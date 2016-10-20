var React = require('react');

var AllInvisibleCards = require('./all_invisible_cards.jsx').AllInvisibleCards;

var CardShow = React.createClass({
  render: function(){
    var imageSrc = "assets/" + this.props.card.imageSrc;
    
    return (
      <div className="col-xs-12">
        <img className="center-block" src={imageSrc}/>
      
        <AllInvisibleCards />
      </div>
    )
  }
});

module.exports = {
  CardShow: CardShow
}