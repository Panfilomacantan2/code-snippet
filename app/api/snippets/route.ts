import { connectToDB } from '@/lib/database/connectDb';
import Snippets from '@/lib/models/snippets.model';
import { NextResponse } from 'next/server';

export async function GET() {
	try {
		await connectToDB();
		const snippets = await Snippets.find();

		if (!snippets) {
			throw new Error('Confession not found!');
		}

		return NextResponse.json(snippets);
	} catch (error) {
		console.log(error);
	}
}

