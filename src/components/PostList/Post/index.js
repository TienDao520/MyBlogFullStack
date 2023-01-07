import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { MoreVert } from '@mui/icons-material';
import { Favorite } from '@mui/icons-material';

import moment from 'moment';
export default function Post({ post }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format('HH:MM MM DD, YYYY')}
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
      ></CardHeader>
      <CardMedia image={post.attachment} title='Title' />
      <CardContent>
        <Typography variant='h5' color='textPrimary'>
          {post.title}
        </Typography>
        <Typography variant='body2' component='p' color='textSecondary'>
          {post.content}
        </Typography>
        <CardActions>
          <IconButton>
            <Favorite />
            <Typography component='span' color='textSecondary'>
              {post.likeCount}
            </Typography>
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
}
