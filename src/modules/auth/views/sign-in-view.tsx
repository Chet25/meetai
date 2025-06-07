import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
Button

export function SignInView() {
	return (
		<div className="flex flex-col gap-6">
			<Card className="overflow-hidden p-0">
				<CardContent className="grid p-0 md:grid-cols-2">
					<form></form>
					<div className="bg-radial from-green-500 to-green-600 ">
						<img src="/logo.svg" alt="logo" />
						<p>MeetAi via Chet</p>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
