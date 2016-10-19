var React = require('react');

var SpeedBar = React.createClass({
  render: function(){
    return (
      <div className="box-with-shadow vertical-text" style={{width: "300px"}}>
        Select Speed
      </div>
    )
  }
});

module.exports = {
  SpeedBar: SpeedBar
}