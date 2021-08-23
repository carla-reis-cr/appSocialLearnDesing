import  { AxiosResponse } from 'axios';
import { PostType } from '../models/post.interface';
import { HashtagType } from '../models/hashtags.interface'
import api from './api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
	post: (url: string, body: {}) => api.post(url, body).then(responseBody),
	put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
};

const postApi = {
	getPosts: (): Promise<PostType[]> => requests.get('posts/all'),
	getPostsFormat: (): Promise<PostType[]> => requests.get('posts/allPostFormat'),
	getHashtagPost: (): Promise<HashtagType[]> => requests.get('posts/hashtagsPosts'),
	getAPost: (id: number): Promise<PostType> => requests.get(`posts/${id}`),
	createPost: (post: PostType): Promise<PostType> =>
		requests.post('posts/create', post),
	updatePost: (post: PostType, id: number): Promise<PostType> =>
		requests.put(`posts/${id}`, post),
	deletePost: (id: number): Promise<void> => requests.delete(`posts/${id}`),
};

export default postApi;
