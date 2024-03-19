import "./globals.css";
import type { Metadata } from "next";
import { Oxygen } from "next/font/google";

// const font = Roboto({ weight: "500", subsets: ["latin"] });
const font = Oxygen({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lista de Regalos",
	description: "Lista de regalos de Mati y Ro",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`bg-[#f5f5f5] ${font.className}`}>{children}</body>
		</html>
	);
}
