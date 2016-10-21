var React = require('react');

var CardStore = require('../stores/card.js');

var CustomNav = require('./navigation/custom_nav.jsx').CustomNav;
var CardShow = require('./cards/show.jsx').CardShow;
var CardCountButtons = require('./cards/count_buttons.jsx').CardCountButtons;
var CardDescription = require('./cards/description.jsx').CardDescription;
var ErrorDisplay = require('./cards/error_display.jsx').ErrorDisplay;
var StartStopButtons = require('./cards/start_stop_buttons.jsx').StartStopButtons;
var SpeedBar = require('./cards/speed_bar.jsx').SpeedBar;

var App = React.createClass({
  getInitialState: function(){
    return  {   shoeOfCards:  CardStore.buildDecks(6),
                currentCardIndex: 0,
                started: false,
                runningCount: 0,
                timesBetweenCards: [],
                correctCount: 0,
                incorrectCount: 0,
                startTime: 0,
                incorrectDescription: ""
            };
  },
  cycleThroughCards: function(){
    var that = this;
    this.startInterval = setInterval(function(){
      that.setState({ currentCardIndex: that.state.currentCardIndex+1 });
    }, 1000);
  },
  defaultCard: function(){
    return {value: "ace", suite: "spades", countValue: 1, imageSrc: "ace_of_spades.svg"};
  },
  handleCorrectCount: function(value){
    //increment index
    //update running count
    //add one to correct count
    //update startTime to this new start time
    //because user got it right, set incorrectDescription to blank string
    
    //calculate new time to add to timesBetweenCards
    var calculatedTime = new Date().getTime() - this.state.startTime;
    //add time between cards
    var newTimesBetweenCards = this.state.timesBetweenCards.slice();
    newTimesBetweenCards.push(calculatedTime);
    
    var newCardIndex = this.state.currentCardIndex + 1;
    var newRunningCount = this.state.runningCount + value;
    var newCorrectCount = this.state.correctCount+1;
    
    this.setState({ currentCardIndex: newCardIndex,
                    runningCount: newRunningCount,
                    correctCount: newCorrectCount,
                    timesBetweenCards: newTimesBetweenCards,
                    startTime: new Date().getTime(),
                    incorrectDescription: ""});
  },
  handleIncorrectCount: function(value, enteredValue){
    //add one to incorrect count
    var currentCard = this.state.shoeOfCards[this.state.currentCardIndex];
    var newIncorrectDescription = "You entered " + enteredValue + ", but the correct value for the " +
      currentCard.value + " of " + currentCard.suite + " is " + value;
    var newIncorrectCount = this.state.incorrectCount+1;
    
    this.setState({ incorrectCount: newIncorrectCount,
                    incorrectDescription: newIncorrectDescription});
  },
  startTime: function(){
    this.setState({startTime: new Date().getTime()});
  },
  toggleStarted: function(){
    // if(this.state.started){
 //      clearInterval(this.startInterval);
 //    } else {
 //      this.cycleThroughCards();
 //    }
    this.setState({started: !this.state.started});
  },
  updateRunningCount: function(countValue){
    this.setState({runningCount: countValue});
  },
  render: function(){
    var currentCard = this.state.shoeOfCards[this.state.currentCardIndex] || this.defaultCard();

    return(
      <div>
        <CustomNav />
      
        <CardShow card={currentCard}/>
        <StartStopButtons toggleStarted={this.toggleStarted} 
                          runningCount={this.state.runningCount}
                          started={this.state.started}
                          startTime={this.startTime}/>
        
        <CardCountButtons card={currentCard} 
                          started={this.state.started}
                          runningCount={this.state.runningCount}
                          handleCorrectCount={this.handleCorrectCount}
                          handleIncorrectCount={this.handleIncorrectCount}/>
        <ErrorDisplay description={this.state.incorrectDescription}/>
        <CardDescription />
        <SpeedBar />
      </div>
    )
  }
});

module.exports = {
  App: App
}