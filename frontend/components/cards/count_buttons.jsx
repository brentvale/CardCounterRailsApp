var React = require('react');

var CardCountButtons = React.createClass({
  render: function(){
    return(
      <div className="col-xs-12">
        <div className="center-block" style={{textAlign:"center"}}>
          <div className="btn-group one-third-button">
            <button type="button" className="btn button-fill">
              <span>-1</span>
            </button>
          </div>
          <div className="btn-group one-third-button">
            <button type="button" className="btn button-fill">
              <span>0</span>
            </button>
          </div>
          <div className="btn-group one-third-button">
            <button type="button" className="btn button-fill">
              <span>+1</span>
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