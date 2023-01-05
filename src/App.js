import { useDispatch } from 'react-redux';

import * as actions from './redux/actions';

function App() {
  //Call action, return a function to trigger an action from UI
  const dispatch = useDispatch();

  dispatch(actions.getPosts.getPostsRequest());
  return <p>This is Blog App</p>;
}

export default App;

/**
 * Old method: connect(mapState, mapDispatch)(App)
 *  higher-order component in the Redux library that connects a React component to a Redux store.
mapState is a function that maps the state stored in the Redux store to the props of a React component. 
This allows the component to access the state of the store as props.

mapDispatch is a function that maps dispatch functions to the props of a React component. This allows the component to trigger actions that update the state of the store.
App is a React component that will be connected to the Redux store.

The connect function takes mapState and mapDispatch as arguments and returns a new function that takes a React component as an argument. 
This new function then creates a higher-order component that wraps the original component, providing it with the ability to access the state of the store and dispatch actions.
 * 
 * New method: using hooks: to use a dispatch import from react-redux
 */
