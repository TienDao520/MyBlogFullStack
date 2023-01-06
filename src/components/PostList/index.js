import { Grid } from '@mui/material';
import React from 'react';

export default function PostList() {
  return (
    <Grid container spacing={2} alignItems='stretch'>
      <Grid item xs={12} sm={6}>
        <p>This is post 1</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>This is post 2</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>This is post 3</p>
      </Grid>
    </Grid>
  );
}
