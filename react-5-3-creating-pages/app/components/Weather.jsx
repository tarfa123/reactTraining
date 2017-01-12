var React = require('react');
var Greeter = require('Greeter');
var Weather = React.createClass({
  render: function () {
    return (
      <Greeter/>
    )
  }
});

module.exports = Weather;
