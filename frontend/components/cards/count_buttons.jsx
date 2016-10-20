var React = require('react');

var CardCountButtons = React.createClass({
  checkValue: function(event){
    //if user has not started, alert must click
    if(this.props.started){
      //if tapped button == cards value
      var enteredValue = parseInt($(event.target).html());

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
    return(
      <div className="col-xs-12">
        <div className="center-block" style={{textAlign:"center"}}>
      
          <div className="btn-group one-third-button">
            <button type="button" className="btn button-fill" 
                                  onClick={this.checkValue}
                                  style={{zIndex: "100"}}>
              1
            </button>
          </div>
      
          <div className="btn-group one-third-button">
            <button type="button" className="btn button-fill" 
                                  onClick={this.checkValue}
                                  style={{zIndex: "100"}}>
              0
            </button>
          </div>
      
          <div className="btn-group one-third-button">
            <button type="button" className="btn button-fill" 
                                  onClick={this.checkValue}
                                  style={{zIndex: "100"}}>
              -1
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