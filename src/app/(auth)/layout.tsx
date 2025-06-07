interface Props {
	children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
	return (
		<div className=" bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10 ">
			{children}
		</div>
	);
};

export default AuthLayout; 