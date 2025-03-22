import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

import LayoutWrapper from "@/components/common/LayoutWrapper";

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
        <html lang="en">
            <body>
                <AuthProvider>
                    <LayoutWrapper>{children}</LayoutWrapper>
                </AuthProvider>
            </body>
        </html>
    );
}
