import React from 'react';

export default class TitleBar extends React.Component{

	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
        <p>Created By {this.props.subTitle}</p>
			</div>
		);
	}

}

TitleBar.propTypes = {
  title: React.PropTypes.string.isRequired,
  subTitle: React.PropTypes.string
};
