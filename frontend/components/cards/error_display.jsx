var React = require('react');

var ErrorDisplay = React.createClass({
  render: function(){
    return(
      <div className="col-xs-12 section-block">
        <div className="box-with-shadow center-block" style={{width: "90%"}}>
          {this.props.description}
        </div>
      </div>
    )
  }
});

module.exports = {
  ErrorDisplay: ErrorDisplay
}