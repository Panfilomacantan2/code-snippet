'use client';

import React from 'react';
import {  UserButton, useUser } from '@clerk/nextjs';
import { Skeleton } from './ui/skeleton';

export default function SideBarLink() {
	const { isSignedIn, isLoaded } = useUser();

	if (!isLoaded) {
		// Handle loading state however you like
		return (
			<div className="flex items-center">
				<Skeleton className="h-12 w-12 rounded-full" />
			</div>
		);
	}

	if (isSignedIn) {
		return <UserButton />;
	}
}
