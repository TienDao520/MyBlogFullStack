import { PostModel } from '../models/PostModel.js';

export const getPosts = async (req, res) => {
  try {
    const post = new PostModel({
      title: 'test',
      content: 'test',
    });

    post.save();

    //need await since PostModel.find() is a promise, and find() will return all post
    const posts = await PostModel.find();
    console.log('posts', posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = (req, res) => {
  res.send('Create success');
};
