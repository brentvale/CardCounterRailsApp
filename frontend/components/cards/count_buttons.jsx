var React = require('react');

var CardCountButtons = React.createClass({
  checkValue: function(event){
    //if user has not started, alert must click
    if(this.props.started){
      //if tapped button == cards value
      var enteredValue;
      switch(event.target.id){
        case "plusOne":
          enteredValue = 1;
          break;
        case "neutral":
          enteredValue = 0;
          break;
        case "minusOne":
          enteredValue = -1;
          break;
      }

      if(this.props.card.countValue === enteredValue){
        this.props.handleCorrectCount(this.props.card.countValue);
      } else {
        this.props.handleIncorrectCount(this.props.card.countValue, enteredValue);
      }
    } else {
      alert("Click start to begin");
    }
  },
  render: function(){
    var plusOne = this.props.runningCount + 1;
    var minusOne = this.props.runningCount - 1;
    
    return(
      <div className="col-xs-12">
        <div className="center-block" style={{textAlign:"center"}}>
      
          <div className="btn-group one-third-button">
            <button type="button" id="plusOne"
                                  className="btn button-fill" 
                                  onClick={this.checkValue}
                                  style={{zIndex: "100"}}>
              {plusOne}
            </button>
          </div>
      
          <div className="btn-group one-third-button">
            <button type="button" id="neutral"
                                  className="btn button-fill" 
                                  onClick={this.checkValue}
                                  style={{zIndex: "100"}}>
              {this.props.runningCount}
            </button>
          </div>
      
          <div className="btn-group one-third-button">
            <button type="button" id="minusOne"
                                  className="btn button-fill" 
                                  onClick={this.checkValue}
                                  style={{zIndex: "100"}}>
              {minusOne}
            </button>
          </div>
          
        </div>
      </div>
    )
  }
});

module.exports = {
  CardCountButtons: CardCountButtons
}