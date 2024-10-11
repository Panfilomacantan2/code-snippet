import axios from 'axios';

const todosApi = axios.create({
	baseURL: 'http://localhost:3000/api',
});

export const todosUrlEndpoint = '/snippets';

export const getSnippets = async () => {
	const response = await todosApi.get(todosUrlEndpoint);
	return response.data;
};
