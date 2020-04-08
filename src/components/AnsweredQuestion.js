// React Library
import React, { Component } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// bootstrap Library
import {Card,Row,Col,ProgressBar,Button ,Image ,Badge} from 'react-bootstrap';

// Components
import PageNotFound from './PageNotFound';

// React Router Redirect Component
import { Link } from 'react-router-dom';

class AnsweredQuestion extends Component {

	
	render() {
		const { question, author, authedUser } = this.props;

		if (question === null) {
			return <PageNotFound />;
		}

		const { optionOne, optionTwo } = question;
		const { name, avatarURL } = author;
		const total = optionOne.votes.length + optionTwo.votes.length;
		const precentOptionOne = Math.round((optionOne.votes.length / total) * 100);
		const precentOptionTwo = Math.round((optionTwo.votes.length / total) * 100);

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card bg="light" className="m-3" border="primary">
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
						</Card.Header>

						<Card.Body className="d-flex justify-content-center">
							<ul>
								<li>
									{optionOne.text}
									{optionOne.votes.includes(authedUser) ? (
										<span className="text-info ml-5">
											<Badge variant="success">Your Answered</Badge> 
										</span>
									) : null}
								</li>
								<ProgressBar
									now={precentOptionOne}
									label={`${precentOptionOne}%`}
									variant="info"
								/>
								<Card.Text className="text-muted">
									Answered {optionOne.votes.length} from {total}{' '}
									users
								</Card.Text>
								<li>
									{optionTwo.text}
									{optionTwo.votes.includes(authedUser) ? (
										<span className="text-info ml-5">
										<Badge variant="info">Your Answered</Badge> 
										</span>
									) : null}
								</li>
								<ProgressBar
									now={precentOptionTwo}
									label={`${precentOptionTwo}%`}
									variant="info"
								/>
								<Card.Text className="text-muted">
								Answered {optionTwo.votes.length} from {total}{' '}
									users
								</Card.Text>
							</ul>
							
						</Card.Body>
						<Card.Footer>						
							<Link to={`/`}>
								<Button size="tiny"  className="float-right" >Back</Button>
							</Link>
						</Card.Footer>

					
						
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authedUser
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
