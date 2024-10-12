import AddInput from '@/components/AddInput';
import SearchSnippetInput from '@/components/SearchSnippetInput';
import Snippets from '@/components/Snippets';
import Tags from '@/components/Tags';
import UserProfile from '@/components/UserProfile';

export default function AllSnippets() {
	return (
	
			<div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
				{
					/* Dummy content */
					// data.map((snippet, idx) => (
					// 	<div key={idx} className="flex flex-col gap-2 p-2 border border-border">
					// 		{snippet}
					// 	</div>
					// ))
				}

				<div className="flex justify-between items-center">
					{/* user profile */}
					<UserProfile />

					<div className="flex">
						{/* Search Snippet */}

						<SearchSnippetInput />

						{/* Add Input */}
						<AddInput />
					</div>
				</div>

				{/* Tags */}
				<Tags />

				{/* Snippets */}
				<Snippets />
			</div>
		
	);
}
