import axios from 'axios'; // library to support REST API callings

const URL = 'http://localhost:4000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
