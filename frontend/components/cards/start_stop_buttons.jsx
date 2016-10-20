var React = require('react');

var RunningCountDisplay = require('./running_count_display.jsx').RunningCountDisplay;

var StartStopButtons = React.createClass({
  handleClickStart: function(){
    if(!this.props.started){
      this.props.startTime();
    }
    this.props.toggleStarted();
  },
  render: function(){
    var startStopButtonText = (this.props.started) ? "Stop" : "Start" ;
    return (
      <div className="col-xs-12 section-block">
        <div className="center-block" style={{width:"80%", textAlign:"center"}}>
      
          <div className="btn-group button-card-controls" style={{float: "left"}}>
            <button type="button" className="btn btn-danger">
              Reset
            </button>
          </div>
      
          <RunningCountDisplay runningCount={this.props.runningCount}/>
      
          <div className="btn-group button-card-controls" style={{float: "right"}}>
            <button type="button" 
                    className="btn btn-success" 
                    style={{float: "right"}}
                    onClick={this.handleClickStart}>
              {startStopButtonText}
            </button>
          </div>
          
        </div>
      </div>
    )
  }
});

module.exports = {
  StartStopButtons: StartStopButtons
}