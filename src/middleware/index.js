// Redux Thunk Middleware Function
import thunk from 'redux-thunk';

// Custom Middleware Functions
import logger from './logger';

// Redux applyMiddleware Function
import { applyMiddleware } from 'redux';

// applyMiddleware Function
export default applyMiddleware(thunk, logger);