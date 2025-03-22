import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { Poppins } from "next/font/google";

import LayoutWrapper from "@/components/common/LayoutWrapper";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // you can choose your weights
    variable: "--font-poppins", // allows custom CSS variable use
  });

export const metadata: Metadata = {
    title: 'Skillsly',
    description: 'Learn and teach skills for points'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <html lang="en" className={poppins.variable}>
            <body className="font-poppins">
                <AuthProvider>
                    <LayoutWrapper>{children}</LayoutWrapper>
                </AuthProvider>
            </body>
        </html>
    );
}
