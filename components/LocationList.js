var React = require('react');

var LocationItem = require('./LocationItem');

var LocationList = React.createClass({

	render() {
		var self=this;

		var locations= this.props.locations.map(function(l) {
				var active = self.props.activeLocationAddresss == l.address;

				return <LocationItem address={l.address} timestamp={l.timestamp}
							active={active} onClick={self.props.onClick} />

		});

		if(!locations.length) {
			return null;
		}

		return (
			<div className="list-group col-xs-12 col-md-6 col-offset-3">
				<span className ="list-group-item active"> Saved Locations </span>
				{locations}
			</div>

		)


	}




});

module.exports = LocationList;