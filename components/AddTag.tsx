'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { IconPlus } from '@tabler/icons-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function AddTag() {
	const formSchema = z.object({
		tag: z.string().min(1, {
			message: 'Title must be at least 1 characters.',
		}),
	});

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			tag: '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className=" absolute right-4 top-[6px] text-white !bg-blue-500 px-3 py-0 rounded-sm cursor-pointer z-10">
					<IconPlus size={18}/> Tag
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Tag</DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						{/* Tag */}
						<FormField
							control={form.control}
							name="tag"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Tag</FormLabel>
									<FormControl>
										<Input placeholder="New tag..." {...field} />
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
