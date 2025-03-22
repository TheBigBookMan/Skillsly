import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LayoutWrapper from "@/components/common/LayoutWrapper";

export const metadata: Metadata = {
    title: 'Skillsly',
    description: 'Learn and teach skills for points'
};

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <LayoutWrapper>{children}</LayoutWrapper>
                    </AuthProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
