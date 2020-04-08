// React Library
import React, { Component, Fragment } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// Components
import UserState from './UserState';

class LeaderBoard extends Component {
	render() {
		return (
			<Fragment>
				<h2 className="text-center my-3">
					<small >LeaderBoard</small>
				</h2>
				{this.props.qid.map((id) => (
					<UserState key={id} id={id} />
				))}
			</Fragment>
		);
	}
}

function mapStateToProps({ users }) {

	const sortedUserIDs = Object.keys(users).sort((idOne, idTwo) => {

		const scoreOne = Object.keys(users[idOne].answers).length + users[idOne].questions.length;
		const scoreTwo = Object.keys(users[idTwo].answers).length + users[idTwo].questions.length;
		
		return scoreTwo - scoreOne;
	});
	return {
		qid: sortedUserIDs
	};
}

export default connect(mapStateToProps)(LeaderBoard);
