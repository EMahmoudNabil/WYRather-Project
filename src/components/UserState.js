// React Library
import React, { Component } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// bootstrap Library
import {Card , Row , Col ,Image ,Badge} from 'react-bootstrap';


class UserState extends Component {
	render() {
		const { user } = this.props;
		const { name, avatarURL, answers, questions } = user;

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>

					<Card bg="light" className="m-3 justify-content-center">

						<Card.Header>	
							<Image
								src={avatarURL}
								className="mr-2"
								width="40"
								height="40"
								roundedCircle
								fluid
								alt="user Image"
							/>

							{name}
							<h4><Badge variant="info"className="float-right"> 
							 Score: {Object.keys(answers).length + questions.length} </Badge></h4>
						</Card.Header>

						<Card.Body className="d-flex justify-content-center">

							<Card.Text>
								Answered Questions: {Object.keys(answers).length }
								<br />
								Created Questions: {questions.length}
							</Card.Text>

						</Card.Body>
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}

export default connect(mapStateToProps)(UserState);
