import React from 'react';
import { Container, Fab } from '@mui/material';
import Header from '../components/Header';
import PostList from '../components/PostList';
import { Add } from '@mui/icons-material';

export default function HomePage() {
  return (
    <Container maxWidth='lg'>
      <Header />
      <PostList />
      <Fab color='primary'>
        <Add />
      </Fab>
    </Container>
  );
}
