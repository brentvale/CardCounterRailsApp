var React = require('react');

var StartStopButtons = React.createClass({
  
  render: function(){
    return (
      <div className="col-xs-12 section-block">
        <div className="center-block" style={{width:"50%"}}>
          <div className="btn-group button-card-controls">
            <button type="button" className="btn btn-danger">
              Pause
            </button>
          </div>
          <div className="btn-group button-card-controls">
            <button type="button" 
                    className="btn btn-success" 
                    style={{float: "right"}}
                    onClick={this.props.toggleStarted}>
              Start
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