import { createActions, createAction } from 'redux-actions';

//Method to get type of action
export const getType = (reduxAction) => {
  return reduxAction().type;
};

/**For actions we have 3 states
 * - Send request
 * - when successful
 * - when fail
 */

/**pass an objects for many actions */
export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_POST_MODAL');
export const hideModal = createAction('HIDE_CREATE_POST_MODAL');

/**Each action is a function return object:
  getType(getPosts.getPostSuccess)

  {
    type: 'getPostSuccess'
    payload: {
      name: 'Test'
    }
  }

 */
