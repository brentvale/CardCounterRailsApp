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
                started: false
            };
  },
  cycleThroughCards: function(){
    var that = this;
    this.startInterval = setInterval(function(){
      that.setState({currentCardIndex: that.state.currentCardIndex+1});
    }, 1000);
  },
  defaultCard: function(){
    return {value: "ace", suite: "spades", countValue: 1, imageSrc: "ace_of_spades.svg"};
  },
  toggleStarted: function(){
    if(this.state.started){
      clearInterval(this.startInterval);
    } else {
      this.cycleThroughCards();
    }
    this.setState({started: !this.state.started});
  },
  render: function(){
    var currentCard = this.state.shoeOfCards[this.state.currentCardIndex] || this.defaultCard();
    
    return(
      <div>
        <CustomNav />
      
        <CardShow card={currentCard}/>
        <StartStopButtons toggleStarted={this.toggleStarted}/>
        <ErrorDisplay />
        <CardCountButtons />
        <CardDescription />
        <SpeedBar />
      </div>
    )
  }
});

module.exports = {
  App: App
}