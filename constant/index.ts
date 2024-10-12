export const codeStringSnippets = [
	{
		id: 1,
		title: 'map()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6, 8]
      `,
	},
	{
		id: 2,
		title: 'filter()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens); // [2, 4]
      `,
	},
	{
		id: 3,
		title: 'reduce()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((total, num) => total + num, 0);
  console.log(sum); // 10
      `,
	},
	{
		id: 4,
		title: 'forEach()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  numbers.forEach(num => console.log(num));
  // Output: 1 2 3 4
      `,
	},
	{
		id: 5,
		title: 'find()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  const firstEven = numbers.find(num => num % 2 === 0);
  console.log(firstEven); // 2
      `,
	},
	{
		id: 6,
		title: 'some()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  const hasEven = numbers.some(num => num % 2 === 0);
  console.log(hasEven); // true
      `,
	},
	{
		id: 7,
		title: 'every()',
		codeSnippet: `
  const numbers = [2, 4, 6, 8];
  const allEven = numbers.every(num => num % 2 === 0);
  console.log(allEven); // true
      `,
	},
	{
		id: 8,
		title: 'includes()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  console.log(numbers.includes(2)); // true
  console.log(numbers.includes(5)); // false
      `,
	},
	{
		id: 9,
		title: 'slice()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  const sliced = numbers.slice(1, 3);
  console.log(sliced); // [2, 3]
      `,
	},
	{
		id: 10,
		title: 'splice()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  numbers.splice(1, 2, 9, 10);
  console.log(numbers); // [1, 9, 10, 4]
      `,
	},
	{
		id: 11,
		title: 'concat()',
		codeSnippet: `
  const arr1 = [1, 2];
  const arr2 = [3, 4];
  const merged = arr1.concat(arr2);
  console.log(merged); // [1, 2, 3, 4]
      `,
	},
	{
		id: 12,
		title: 'push()',
		codeSnippet: `
  const numbers = [1, 2, 3];
  numbers.push(4);
  console.log(numbers); // [1, 2, 3, 4]
      `,
	},
	{
		id: 13,
		title: 'pop()',
		codeSnippet: `
  const numbers = [1, 2, 3];
  const last = numbers.pop();
  console.log(last); // 3
  console.log(numbers); // [1, 2]
      `,
	},
	{
		id: 14,
		title: 'shift()',
		codeSnippet: `
  const numbers = [1, 2, 3];
  const first = numbers.shift();
  console.log(first); // 1
  console.log(numbers); // [2, 3]
      `,
	},
	{
		id: 15,
		title: 'unshift()',
		codeSnippet: `
  const numbers = [2, 3, 4];
  numbers.unshift(1);
  console.log(numbers); // [1, 2, 3, 4]
      `,
	},
	{
		id: 16,
		title: 'reverse()',
		codeSnippet: `
  const numbers = [1, 2, 3, 4];
  numbers.reverse();
  console.log(numbers); // [4, 3, 2, 1]
      `,
	},
	{
		id: 17,
		title: 'sort()',
		codeSnippet: `
  const numbers = [4, 1, 3, 2];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // [1, 2, 3, 4]
      `,
	},
];

