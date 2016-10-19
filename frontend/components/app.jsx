var React = require('react');

var CustomNav = require('./navigation/custom_nav.jsx').CustomNav;
var CardShow = require('./cards/show.jsx').CardShow;
var CardCountButtons = require('./cards/count_buttons.jsx').CardCountButtons;
var CardDescription = require('./cards/description.jsx').CardDescription;
var ErrorDisplay = require('./cards/error_display.jsx').ErrorDisplay;
var StartStopButtons = require('./cards/start_stop_buttons.jsx').StartStopButtons;
var SpeedBar = require('./cards/speed_bar.jsx').SpeedBar;

var App = React.createClass({
  
  render: function(){
    return(
      <div>
        <CustomNav />
      
        <CardShow />
        <StartStopButtons />
        <ErrorDisplay />
        <CardCountButtons />
        <CardDescription />
        <SpeedBar />
      </div>
    )
  }
});

module.exports = {
  App: App
}