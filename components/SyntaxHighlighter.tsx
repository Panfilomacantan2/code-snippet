import { CodeSnippetProps } from '@/types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Snippet } from '@nextui-org/react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { Tooltip } from '@nextui-org/react';
import { useState } from 'react';

export default function CodeSnippet({ title, codeSnippet }: CodeSnippetProps) {
	const [isFavorite, setIsfavorite] = useState(false);
	return (
		<div className="border border-border rounded-sm my-5 p-3 space-y-3 max-w-lg">
			<h2 className="text-lg font-bold text-black">{title}</h2>
			<SyntaxHighlighter language="javascript" style={docco} wrapLines>
				{codeSnippet}
			</SyntaxHighlighter>

			<div className="flex justify-end items-center">
				{isFavorite ? (
					<IconHeartFilled stroke={1} className="cursor-pointer text-blue-500" onClick={() => setIsfavorite(!isFavorite)} />
				) : (
					<Tooltip content={'Add to favorites'}>
						<IconHeart stroke={1} className="cursor-pointer" onClick={() => setIsfavorite(!isFavorite)} />
					</Tooltip>
				)}

				{/* 
				if added to favorite
				<IconHeartFilled stroke={1} className='cursor-pointer'/> 
				
				*/}
				<Snippet codeString={codeSnippet} hideSymbol className="bg-transparent" />
			</div>
		</div>
	);
}
