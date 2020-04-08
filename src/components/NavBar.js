// React Library
import React, { Fragment } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// React Router Components
import { NavLink} from 'react-router-dom';

// bootstrap Library
import {Navbar , Nav ,Button , Container ,Image} from 'react-bootstrap';

// reset Auth Users Action Creator
import { resetAuthUsers } from '../actions/authUser';


function NavBar(props) {
	const { user, dispatch } = props;

	// this function to logout
	const handleLogout = () => {
		dispatch(resetAuthUsers());
	};

	return (
		<Fragment>
		
			<Navbar>
				<Container>
				<Navbar.Collapse>

					<Nav className="mr-auto">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/add">
							New Question
						</Nav.Link>
						<Nav.Link as={NavLink} to="/leaderboard">
							Leaderboard
						</Nav.Link>
					</Nav>
					
					<Nav className="align-items-start">
						<Navbar.Text>{user.name}</Navbar.Text>
						
						<Image
							src={user.avatarURL}
							className="mx-2"
							width="40"
							height="40"
							roundedCircle
							fluid
							alt="Image"
						/>						

						<Button	
						onClick={handleLogout}	>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
				</Container>
			</Navbar>
			
		</Fragment>
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}

export default connect(mapStateToProps)(NavBar);
