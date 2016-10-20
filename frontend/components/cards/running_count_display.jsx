var React = require('react');

var RunningCountDisplay = React.createClass({
  render: function(){
    return (
      <div className="box-with-shadow" style={{width: "20%", maxWidth:"150px", display:"inline-block"}}>
         <span className="running-count">{this.props.runningCount}</span>
      </div>
    )
  }
});

module.exports = {
  RunningCountDisplay: RunningCountDisplay
}