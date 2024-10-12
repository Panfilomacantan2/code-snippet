'use client';

import { useUser } from '@clerk/clerk-react';
import Image from 'next/image';
import { Skeleton } from './ui/skeleton';

export default function UserProfile() {
	const { isSignedIn, user, isLoaded } = useUser();

	if (!isLoaded) {
		// Handle loading state however you like
		return (
			<div className="flex items-center space-x-4">
				<Skeleton className="h-12 w-12 rounded-full" />
				<div className="space-y-1">
					<Skeleton className="h-4 w-[250px]" />
					<Skeleton className="h-4 w-[200px]" />
				</div>
			</div>
		);
	}

	if (isSignedIn) {
		// console.log(user.emailAddresses[0].emailAddress);
		return (
			<div className="flex items-center space-x-2 bg-gray-100 max-w-fit px-4 py-1 rounded-md">
				<Image width={30} height={30} src={user.imageUrl} alt="user" className="rounded-full" />

				<div className="">
					<h2 className="text-[14px] font-bold text-foreground-700">{user?.fullName}</h2>
					<p className="text-[12px] text-foreground-500">{user.emailAddresses[0].emailAddress}</p>
				</div>
			</div>
		);
	}

	return <div>Not signed in</div>;
}
