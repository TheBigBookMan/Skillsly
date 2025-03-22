"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from 'react';

const authPages = ["/login", "/register"];

const LayoutWrapper = ({children}: {children: React.ReactNode}) => {
    const pathname = usePathname();
    const showLayout = !authPages.includes(pathname);

    return (
        <>
            {showLayout && <Header />}
            <main className="flex-1">{children}</main>
            {showLayout && <Footer />}
        </>
    )
}

export default LayoutWrapper;