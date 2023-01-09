import React from 'react';
import { Container, Fab } from '@mui/material';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import PostList from '../components/PostList';
import { Add } from '@mui/icons-material';
import { css } from '@emotion/css';
import { showModal } from '../redux/actions';
import CreatePostModal from '../components/CreatePostModal';
export default function HomePage() {
  const dispatch = useDispatch();
  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  return (
    <Container maxWidth='lg'>
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color='primary'
        // className={
        //   ('mui-fixed', css`position: 'fixed', bottom: '2px', right: '2px'`)
        // }
        sx={{ position: 'fixed', bottom: '2px', right: '2px' }}
        onClick={openCreatePostModal}
      >
        <Add />
      </Fab>
    </Container>
  );
}
