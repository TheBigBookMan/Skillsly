"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from 'react';
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const authPages = ["/login", "/register"];

const LayoutWrapper = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();
    const showLayout = !authPages.includes(pathname);

    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col h-screen w-full">
                {showLayout && <Header />}
                <main className="flex-1 overflow-y-auto">{children}</main>
                {showLayout && <Footer />}
            </div>
        </QueryClientProvider>
    )
}

export default LayoutWrapper;