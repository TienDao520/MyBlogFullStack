import React from 'react';
import { Container, Fab } from '@mui/material';
import Header from '../components/Header';
import PostList from '../components/PostList';
import { Add } from '@mui/icons-material';
import { css } from '@emotion/css';

export default function HomePage() {
  return (
    <Container maxWidth='lg'>
      <Header />
      <PostList />
      <Fab
        color='primary'
        // className={
        //   ('mui-fixed', css`position: 'fixed', bottom: '2px', right: '2px'`)
        // }
        sx={{ position: 'fixed', bottom: '2px', right: '2px' }}
      >
        <Add />
      </Fab>
    </Container>
  );
}
