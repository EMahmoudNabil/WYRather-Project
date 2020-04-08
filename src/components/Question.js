// React Library
import React, { Component } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';

// React Router Redirect Component
import { Link } from 'react-router-dom';


// bootstrap Library
import {Card  , Button ,Image} from 'react-bootstrap';



class Question extends Component {
	render() {
		const { question, author  } = this.props;
		const { optionOne,  id  } = question;
		const { name, avatarURL } = author;

		return (
		
					<Card bg="light" className="m-3">
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
							{name} :
						</Card.Header>
						<Card.Body className="text-center">
							<Card.Text>{optionOne.text.slice(0, 50)}...?</Card.Text>
							
						</Card.Body>
						<Card.Footer >
						<Link to={`/questions/${id}`}>
								<Button variant="outline-info float-right">View Question</Button>
							</Link>
						
						</Card.Footer>
					</Card>
			
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

export default connect(mapStateToProps)(Question);
