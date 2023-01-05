import { createAction } from 'redux-actions';

/**For actions we have 3 states
 * - Send request
 * - when successful
 * - when fail
 */

/**pass an objects for many actions */
export const getPosts = createAction({
  getPostsRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (err) => err,
});
