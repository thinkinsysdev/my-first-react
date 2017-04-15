var React = require('react')

var CurrentLocation = React.createClass({
	toggleFavorite(){
		this.props.onFavoriteToggle(this.props.address);
	},

	render() {
		var startClassName = "glyphicon glyphicon-star-empty";

		if(this.props.favorite) {
			startClassName = "glyphicon glyphicon-star"
		}

		return (
			<div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
				<h4 id="save-location"> {this.props.address} </h4>
				<span className={startClassName} onClick={this.toggleFavorite} aria-hidden="true"> </span>
			</div>

			);
	}

});

module.exports = CurrentLocation;