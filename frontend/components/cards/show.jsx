var React = require('react');

var CardShow = React.createClass({
  render: function(){
    return (
      <div className="col-xs-12">
        <img className="center-block" src="assets/jack_of_spades.svg"/>
      </div>
    )
  }
});

module.exports = {
  CardShow: CardShow
}