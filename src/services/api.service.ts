import axios from 'axios';

const githubApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GITHUB_API,
});

export { githubApi };
