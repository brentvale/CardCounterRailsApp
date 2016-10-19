var React = require('react');

var CardDescription = React.createClass({
  render: function(){
    return(
      <div className="col-xs-12 section-block">
        <div className="box-with-shadow center-block" style={{width: "90%"}}>
           Description of card and [+1][0][-1]
        </div>
      </div>
    )
  }
});

module.exports = {
  CardDescription: CardDescription
}