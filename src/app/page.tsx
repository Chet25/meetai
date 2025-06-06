"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";

export default function Home() {
	const { data: session } = authClient.useSession();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSubmit = async () => {
		console.log(email, password, name);
		await authClient.signUp.email(
			{
				email,
				password,
				name,
			},
			{
				onError: (ctx) => {
					window.alert(ctx.error.message);
				},
				onSuccess: () => {
					window.alert("Successfully signed up");
				},
			}
		);
	};


	const onLogin = async () => {
		console.log(email, password, name);
		await authClient.signIn.email(
			{
				email,
				password,
			},
			{
				onError: (ctx) => {
					window.alert(ctx.error.message);
				},
				onSuccess: () => {
					window.alert("Successfully signed up");
				},
			}
		);
	};

	if (session) {
		return (
			<div>
				Logged in as {session.user.name}
				<Button onClick={() => authClient.signOut()}>Sign Out</Button>
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
			<h3 className="text-2xl font-bold">Sign Up</h3>
			<Input
				type="text"
				placeholder="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Input
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button onClick={onSubmit}>Sign Up</Button>

			<div className="flex flex-col gap-4 max-w-md mx-auto mt-10">
				<h3 className="text-2xl font-bold">Login</h3>

				<Input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button onClick={onLogin}>Login</Button>
			</div>
		</div>
	);
}
