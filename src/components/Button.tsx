"use client";

const Button = ({
	variant = "primary",
	className,
	onClick,
	children,
	loading,
	squared,
	submit,
	link,
	linkHref,
}: {
	variant?:
		| "primary"
		| "secondary"
		| "cancel"
		| "alternative"
		| "link"
		| "custom";
	className?: string;
	onClick?: (event?: any) => void;
	children: React.ReactNode;
	loading?: boolean;
	squared?: boolean;
	uppercase?: boolean;
	submit?: boolean;
	link?: boolean;
	linkHref?: string;
}) => {
	// Variant class function. This is a mess, but it works fine
	const variantClass = () => {
		switch (variant) {
			case "primary":
				return ` text-white shadow  ${
					loading
						? "bg-[#078cde]"
						: `bg-gradient-to-r from-blue-600 to-sky-500 hover:bg-[#0268a6] hover:shadow-lg rounded-md ${
								!squared && "min-h-[42.5px]"
						  }`
				}`;
			case "secondary":
				return `text-black shadow  ${
					loading
						? "bg-[#bbbfc4] "
						: `bg-[#d1d1d1] hover:bg-[#bab8b8] hover:shadow-lg rounded-md ${
								!squared && "min-h-[42.5px]"
						  }`
				}`;
			case "cancel":
				return `text-black shadow ${
					loading
						? "bg-[#ee6b6b]"
						: `bg-[#f33e3e] hover:bg-[#ee6b6b] hover:shadow-lg rounded-md ${
								!squared && "min-h-[42.5px]"
						  }`
				}`;
			case "alternative":
				return `text-black shadow ${
					loading
						? "bg-[#f5cd5d]"
						: `bg-[#fcba03] hover:bg-[#c28e00] hover:shadow-lg rounded-md ${
								!squared && "min-h-[42.5px]"
						  }`
				}`;
			case "link":
				return `bg-transparent shadow-none ${
					loading ? "text-[#0097a8a4]" : "text-[#0097a8] hover:text-[#0097a8a4]"
				}`;
			case "custom":
				return "";
			default:
				return `bg-[#0086d6] hover:bg-[#0268a6]`;
		}
	};

	// Click handler. If variant is link, don't do ripple effect
	const clickHandler = (event: any) => {
		if (onClick) onClick();
	};

	return (
		<button
			type={submit ? "submit" : "button"}
			id="bt"
			className={`${variantClass()} ${className} fr center gap-[10px] transform duration-[200ms] lg:text-[15px] text-[13px] relative overflow-hidden font-bold ${
				squared
					? "lg:p-[10px] p-[5px] w-[42.5px]"
					: "lg:py-[10px] px-[15px] py-[5px] "
			}`}
			disabled={loading || false}
			onClick={clickHandler}
		>
			{loading && (
				<div
					className={`border-gray-300 h-[20px] w-[20px] animate-spin rounded-full border-[2px] border-t-[#777777]`}
				/>
			)}
			{children}
		</button>
	);
};

export default Button;
