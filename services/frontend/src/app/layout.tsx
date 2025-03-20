import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { usePathname } from "next/navigation";

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

    const pathname = usePathname();

    const authPages = ["/login", "/register"];

    return (
        <html lang="en">
            <body>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <main className="min-h-screen flex flex-col">
                            {!authPages.includes(pathname) && <Header />}

                            {children}

                            {!authPages.includes(pathname) && <Footer />}
                        </main>
                    </AuthProvider>
                </QueryClientProvider>
            </body>
        </html>
    );
}
