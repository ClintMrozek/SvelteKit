export { matchers } from './client-matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6')
];

export const dictionary = {
	"": [[1], [0], 2],
	"Blog": [[1], [0], 3],
	"Clock": [[1], [0], 4],
	"Counter": [[1], [0], 5],
	"ToDo": [[1], [0], 6]
};