import { Input } from '@nextui-org/react';
import { IconSearch } from '@tabler/icons-react';

export default function SearchSnippetInput() {
	return (
		<Input
			// label="Search"
			isClearable
			radius="md"
			classNames={{
				label: 'text-black/50 dark:text-white/90',
				input: ['bg-transparent', 'text-black/90 dark:text-white/90', 'placeholder:text-default-700/50 dark:placeholder:text-white/60'],
				innerWrapper: 'bg-transparent',
				inputWrapper: [
					
					'bg-default-200/50',
					'dark:bg-default/60',
					'backdrop-blur-xl',
					'backdrop-saturate-200',
					'hover:bg-default-200/70',
					'dark:hover:bg-default/70',
					'group-data-[focus=true]:bg-default-200/50',
					'dark:group-data-[focus=true]:bg-default/60',
					'!cursor-text',
				],
			}}
			placeholder="Search an Snippet..."
			startContent={<IconSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />}
		/>
	);
}
