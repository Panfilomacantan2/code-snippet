'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

import { IconPlus } from '@tabler/icons-react';

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';
import { Textarea } from './ui/textarea';

const languages = [
	{ label: 'English', value: 'en' },
	{ label: 'French', value: 'fr' },
	{ label: 'German', value: 'de' },
	{ label: 'Spanish', value: 'es' },
	{ label: 'Portuguese', value: 'pt' },
	{ label: 'Russian', value: 'ru' },
	{ label: 'Japanese', value: 'ja' },
	{ label: 'Korean', value: 'ko' },
	{ label: 'Chinese', value: 'zh' },
] as const;

export default function AddInput() {
	// const { addSnippet } = useSnippetStore((state) => state);

	const formSchema = z.object({
		title: z.string().min(1, {
			message: 'Title must be at least 1 characters.',
		}),
		language: z.string().min(1, {
			message: 'Please select a language.',
		}),
		description: z.string().min(1, {
			message: 'Description must be at least 1 characters.',
		}),
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: '',
			language: '',
			description: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="default" className="text-white !bg-blue-500">
					<IconPlus /> Snippet
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Snippet</DialogTitle>
					<DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						{/* Title */}
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Title</FormLabel>
									<FormControl>
										<Input placeholder="New Title..." {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Select Languages */}
						<FormField
							control={form.control}
							name="language"
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>Language</FormLabel>
									<Popover>
										<PopoverTrigger asChild>
											<FormControl>
												<Button variant="outline" role="combobox" className={cn('w-full justify-between', !field.value && 'text-muted-foreground')}>
													{field.value ? languages.find((language) => language.value === field.value)?.label : 'Select language'}
													<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
												</Button>
											</FormControl>
										</PopoverTrigger>
										<PopoverContent className="w-[200px] p-0">
											<Command>
												<CommandInput placeholder="Search language..." />
												<CommandList>
													<CommandEmpty>No language found.</CommandEmpty>
													<CommandGroup>
														{languages.map((language) => (
															<CommandItem
																value={language.label}
																key={language.value}
																onSelect={() => {
																	form.setValue('language', language.value);
																}}
															>
																<Check className={cn('mr-2 h-4 w-4', language.value === field.value ? 'opacity-100' : 'opacity-0')} />
																{language.label}
															</CommandItem>
														))}
													</CommandGroup>
												</CommandList>
											</Command>
										</PopoverContent>
									</Popover>

									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Description */}
						<FormField
							control={form.control}
							name="description"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Description</FormLabel>
									<FormControl>
										<Textarea placeholder="Tell us a little bit about yourself" className="" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Submit</Button>
					</form>
				</Form>
				<DialogFooter></DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
