import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchPostSaga(action) {
  //call when want to excute funciton
  //if call is async func it will wait until done and asign value to posts by yield
  const posts = yield call(api.fetchPosts);
  console.log('[posts]', posts);
  yield put(actions.getPosts.getPostSuccess(posts.data)); //trigger an action in saga input is return value from api
  //Block of code in reducer with relevant action will be executed
  //posts.data so the stored data gonna be an array instead of an object
}

function* mySaga() {
  /**In redux-saga, the takeLatest effect is used to take the latest request of a particular pattern.
   * It will cancel any previously-running saga for the same request,
   * if it's still running, and then run the latest one. */
  /**The first argument to takeLatest is the action type that the saga will be triggered by.
   * The second argument is a generator function that will be executed when that action is dispatched. */
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

//generator function es6
export default mySaga;
