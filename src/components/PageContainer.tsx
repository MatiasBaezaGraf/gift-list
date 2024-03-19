import { Navbar } from "./Navbar";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="fc relative w-full justify-start items-center min-h-screen bg-[#f5f5f5]">
			<Navbar />
			<div className="tablet:py-[20px] tablet:px-[10px]">{children}</div>
		</div>
	);
};
