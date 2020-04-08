// React Library
import React, { Component } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// bootstrap Library
import {Card, Form ,Button }  from 'react-bootstrap';

// Components
import { setAuthUsers } from '../actions/authUser';

class Login extends Component {
	state = {
		Error: '',
		userSelected: ''
	};

	handleChange = (e) => {
        const userSelected = e.target.value;

        this.setState(() => ({
            userSelected
        }));
    };


	handleSubmit = (e) => {
		const { dispatch } = this.props;
		const userID = this.userID.value;
		e.preventDefault();

		if (userID !== '') {
			dispatch(setAuthUsers(userID));
		} else {
			this.setState({ Error: 'You must select a username' });
		}
	};

	

	render() {
		const { users  } = this.props;

		return (
					<Card >
						<Card.Header >Login</Card.Header>
						<Card.Body>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group >
									<Form.Label >Username</Form.Label>
									<Form.Control
										as="select"
										ref={(id) => (this.userID = id)}  onChange={(e) => this.handleChange(e)}>
										<option></option>
										{users.map((item  ) => (
											<option value={item.qid} key={item.qid}>
											 {item.name}
											</option>
										))}			
									</Form.Control>
								</Form.Group>

								<Button type="submit" disabled={this.state.userSelected === ''} >
									Login
								</Button>
							</Form>
						</Card.Body>
					</Card>	
		);
	}
}




function mapStateToProps({ users  }) {
	return {
		users: Object.keys(users ).map((id) => ({
			qid: id,
			name: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login);
