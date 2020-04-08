// React Library
import React, { Component, Fragment } from 'react';

// React Redux Connect function
import { connect } from 'react-redux';
import { Route, Switch , BrowserRouter as Router  } from 'react-router-dom';

// Handle Initial Data Action Creator
import { handleInitialData } from '../actions/shared';

// Components
import Login from './Login'
import NavBar from './NavBar';
import Home from './Home';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './PageNotFound';



class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
		const { authedUser } = this.props;

		
			return <Fragment>
					{!authedUser ? <Login />
						: 
							<Router>
							<NavBar />
								<main>
									<Switch>
										<Route path="/" exact component={Home} />
										<Route path="/questions/:id" component={QuestionPage} />
										<Route path="/add" component={NewQuestion} />
										<Route path="/leaderboard" component={LeaderBoard} />
										<Route component={PageNotFound} />
									</Switch>
								</main>
					
				</Router>
						}
				 </Fragment>;	
	}
}

function mapStateToProps({ authedUser }) {
	return {authedUser};
}

export default connect(mapStateToProps)(App);
