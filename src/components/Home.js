// React Library
import React, { Component, Fragment } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// bootstrap Library
import {Tab ,Nav,Row , Col } from 'react-bootstrap';

// Components
import QuestionsList from './QuestionList';

class Home extends Component {
	
	render() {
		const { answeredQuestionsID, unansweredQuestionsID } = this.props;

		return (

			<Fragment>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
							<Col sm={3}>
								<Nav variant="pills" className="flex-column">
									<Nav.Item>
									<Nav.Link eventKey="unanswered">Unanswered Questions</Nav.Link>
									</Nav.Item>
									<Nav.Item>
									<Nav.Link eventKey="answered">Answered Questions</Nav.Link>
									</Nav.Item>
								</Nav>
							</Col>
							<Col sm={9}>
							<Tab.Content>
									<Tab.Pane eventKey="unanswered">
										<QuestionsList
											idsList={unansweredQuestionsID}
											emptyListNote="No more Unaswered Questions! "
										/>
									</Tab.Pane>
									<Tab.Pane eventKey="answered">
										<QuestionsList
											idsList={answeredQuestionsID}
											emptyListNote="No Answered Questions yet! "
										/>
									</Tab.Pane>
							</Tab.Content>
						</Col>
				</Row>
				</Tab.Container>
			</Fragment>
		);
	}
}


function mapStateToProps({ authedUser, questions, users }) {
	const answeredQuestionsID = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id));

	const unansweredQuestionsID = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))	;

	return {
		answeredQuestionsID,
		unansweredQuestionsID
	};
}

export default connect(mapStateToProps)(Home);
