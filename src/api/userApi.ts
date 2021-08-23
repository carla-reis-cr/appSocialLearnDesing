import  { AxiosResponse } from 'axios';
import { UserType } from '../models/user.interface';
import api from './api';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => api.get(url).then(responseBody),
	post: (url: string, body: {}) => api.post(url, body).then(responseBody),
	put: (url: string, body: {}) => api.put(url, body).then(responseBody),
	delete: (url: string) => api.delete(url).then(responseBody),
};

const userApi = {
	getUsers: (): Promise<UserType[]> => requests.get('users/all'),
	getAUser: (id: number): Promise<UserType> => requests.get(`users/${id}`),
	createUser: (user: UserType): Promise<UserType> =>
		requests.post('users/register', user),
	updateUser: (user: UserType, id: number): Promise<UserType> =>
		requests.put(`users/${id}`, user),
	deleteUser: (id: number): Promise<void> => requests.delete(`users/${id}`),
};

export default userApi;
