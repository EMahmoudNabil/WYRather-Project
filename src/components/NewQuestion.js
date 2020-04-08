// React Library
import React, { Component, Fragment } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// React Router Redirect Component
import { Redirect } from 'react-router-dom';

// bootstrap Library
import {Card , Form , Button ,Badge} from 'react-bootstrap';

//handle New Question Action Creator
import { handleNewQuestion } from '../actions/questions';

class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		back: false
	};

	handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		const { optionOne, optionTwo } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();

		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				back: true
			},
			() => dispatch(handleNewQuestion(optionOne, optionTwo))
		);
	};

	render() {
		const { optionOne, optionTwo, back } = this.state;

		if (back === true) return <Redirect to="/" />;

		return (
			<Fragment>
				<h2 className="text-center my-3">
					<small>Would You Rather</small>
				</h2>
					<Card >
							<Card.Body className="justify-content-center">
								<Form className="text-center my-3">
									
									<Form.Group controlId="optionOne">
										<Form.Label style={{  fontSize:'20px' }}>Choice One</Form.Label>
										<Form.Control
											type="text"
											name="optionOne"
											value={optionOne}
											onChange={this.handleInputChange}
										/>
									</Form.Group>

									<h3>
									<Badge variant="success">OR</Badge> 	
									</h3>

									<Form.Group controlId="optionTwo">
										<Form.Label   style={{  fontSize:'20px' }}>Choice Two</Form.Label>
										<Form.Control
											type="text"
											name="optionTwo"
											value={optionTwo}
											onChange={this.handleInputChange}
										/>
									</Form.Group>
							
								</Form>
								<Button
										type="submit"
										variant="success"
										disabled={optionOne === '' || optionTwo === ''}
										onClick={this.handleSubmit}
										style={{  width:'200px' , height:"50px" }}
									>
										Submit
									</Button>
							</Card.Body>
						</Card>
			</Fragment>
		);
	}
}

export default connect()(NewQuestion);
