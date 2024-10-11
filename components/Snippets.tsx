import React from 'react';
import CodeSnippet from './SyntaxHighlighter';
import { codeStringSnippets } from '@/constant';

export default function Snippets() {
	return (
		<div className="border border-border w-full max-w-7xl p-3 rounded-md overflow-scroll">
			{/* Code Snippet Card */}
			{codeStringSnippets.map((snippet) => (
				<CodeSnippet key={snippet.id} {...snippet} />
			))}
		</div>
	);
}
