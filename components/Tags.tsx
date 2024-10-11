import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Card } from '@/components/ui/card';

export default function Tags() {
	return (
		<ScrollArea className="h-32 w-full">
			<div className="flex space-x-4 overflow-x-auto max-w-lg">
				{Array.from({ length: 10 }).map((_, index) => (
					<Card className="w-64" key={index}>
						<div className="p-4">
							<p>Card</p>
						</div>
					</Card>
				))}
			</div>
		</ScrollArea>
	);
}
