import React from 'react';

class Citation extends React.Component {
	render () {
		return(
			<div>
				<p> {this.props.details.citation} </p>
					<span> {this.props.details.auteur} </span>
			</div>
		)
	}
}

export default Citation;