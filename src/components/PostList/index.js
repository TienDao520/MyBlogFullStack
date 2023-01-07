import { Grid } from '@mui/material';
import React from 'react';
import Post from './Post';

import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';
import { postsState$ } from '../../redux/selectors';

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  console.log('[PostList - post]', posts);
  //Whenever dispatch change the block inside useEffect will be re-runed
  React.useEffect(() => {
    //reducers can handle when getPostsRequestis called
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems='stretch'>
      {posts.map((post) => (
        ///Added ID for react distigush and tracking the change to update
        <Grid item xs={12} sm={6}>
          <Post key={post._id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
