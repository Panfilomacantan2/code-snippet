'use client';

import React, { useState } from 'react';
import { Sidebar, SidebarBody, SidebarLink } from './ui/sidebar';
import { IconLogout2, IconBrandTabler, IconTrash, IconHeart } from '@tabler/icons-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useClerk } from '@clerk/nextjs';
import SideBarLink from './SideBarLink';


export function SideBar() {
	const { signOut } = useClerk();

	const links = [
		{
			label: 'All Snippets',
			href: '/',
			icon: <IconBrandTabler className="text-inherit h-5 w-5 flex-shrink-0" />,
		},
		{
			label: 'Favorites',
			href: '/favorites',
			icon: <IconHeart className="text-inherit h-5 w-5 flex-shrink-0" />,
		},
		{
			label: 'Trash',
			href: '/trash',
			icon: <IconTrash className="text-inherit h-5 w-5 flex-shrink-0" />,
		},
		{
			label: 'Logout',
			href: '#',
			icon: <IconLogout2 className="text-inherit h-5 w-5 flex-shrink-0" />,
			onClick: () => signOut(),
		},
	];

	const [open, setOpen] = useState(false);
	return (
		<div
			className={cn(
				'rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 min-w-[80px] border border-neutral-200 dark:border-neutral-700 overflow-hidden',
				'h-[100vh]', // for your use case, use `h-screen` instead of `h-[60vh]`
			)}
		>
			<Sidebar open={open} setOpen={setOpen} animate={true}>
				<SidebarBody className="justify-between gap-10">
					<div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
						{open ? <Logo /> : <LogoIcon />}
						<div className="mt-8 flex flex-col gap-2">
							{links.map((link, idx) => (
								<SidebarLink key={idx} link={link} />
							))}
						</div>
					</div>

					{/* User Button */}
					<div>
						<SideBarLink />
					</div>
				</SidebarBody>
			</Sidebar>
			
		</div>
	);
}
export const Logo = () => {
	return (
		<Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
			<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-black dark:text-white whitespace-pre">
				CodeSnippets
			</motion.span>
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link href="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
			<div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
		</Link>
	);
};

