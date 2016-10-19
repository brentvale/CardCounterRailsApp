var React = require('react');

var CardShow = React.createClass({
  render: function(){
    var imageSrc = "assets/" + this.props.card.imageSrc;
    console.log("cards showing");
    return (
      <div className="col-xs-12">
        <img className="center-block" src={imageSrc}/>
      </div>
    )
  }
});

module.exports = {
  CardShow: CardShow
}