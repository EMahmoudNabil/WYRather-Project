// React Library
import React, { Component } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// bootstrap Library
import {Card , Form ,Row , Col , Button ,Image} from 'react-bootstrap';

//handle Save Answer Action Creator
import { handleSaveAnswer } from '../actions/questions';

// Components
import PageNotFound from './PageNotFound';


class UnansweredQuestion extends Component {
	state = {
		errorMsg: ''
	};

	handleSubmit = (id, e) => {
		const answer = this.form.answer.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (answer !== '') {
			dispatch(handleSaveAnswer(id, answer));
		} else {
			this.setState({ errorMsg: 'there is not any question . Now , got to add Question' });
		}
	};

	render() {
		const { question, author } = this.props;

		if (question === null) {
			return <PageNotFound />;
		}

		const { optionOne, optionTwo, id  } = question;
		const { name, avatarURL } = author;
		const { errorMsg } = this.state;

		return (
			<Row className="justify-content-center">
				<Col xs={12} md={6}>
					<Card border="secondary"  className="m-3">
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
							{name} Asks:
						</Card.Header>

						<Card.Body className="d-flex justify-content-center">
							<Form
								onSubmit={(e) => this.handleSubmit(id, e)}
								ref={(f) => (this.form = f)}>

								{errorMsg ? (
									<p className="text-danger">{errorMsg}</p>
								) : null}


								<Form.Check
										custom
										type="radio"
										id="optionOne"
										label={optionOne.text}
										value="optionOne"
										name="answer"
										className="mb-2"
								/>
								<Form.Check
										custom
										type="radio"
										id="optionTwo"
										label={optionTwo.text}
										value="optionTwo"
										name="answer"
										className="mb-2"
								/>
							
							</Form>
						</Card.Body>
						<Card.Footer >

						<Button type="submit" variant="info" className="float-right" onClick={(e) => this.handleSubmit(id, e)}>
									Vote
								</Button>
						</Card.Footer>
					
					</Card>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(UnansweredQuestion);
