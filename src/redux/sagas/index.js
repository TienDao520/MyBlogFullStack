import { takeLatest, call } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action) {
  //call when want to excute funciton
  //if call is async func it will wait until done and asign value to posts by yield
  const posts = yield call(api.fetchPosts);
  console.log('[posts]', posts);
}

function* mySaga() {
  /**In redux-saga, the takeLatest effect is used to take the latest request of a particular pattern.
   * It will cancel any previously-running saga for the same request,
   * if it's still running, and then run the latest one. */
  /**The first argument to takeLatest is the action type that the saga will be triggered by.
   * The second argument is a generator function that will be executed when that action is dispatched. */
  yield takeLatest(actions.getPosts.getPostRequest, fetchPostSaga);
}

//generator function es6
export default mySaga;
