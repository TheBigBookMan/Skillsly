import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const {logout} = useAuth();
    const [navOpen, setNavOpen] = useState<boolean>(false);

    const onLogout = () => {
        const confirmation = confirm("Are you sure you want to logout?");

        return !confirmation && logout();
    }

    return (
        <header className="w-full flex justify-between items-center py-2 px-4">
            <div className='flex'>
                <Link href="/">
                    {/* <img /> */}
                    <p>image</p>
                </Link>
            </div>

            {/* Mobile */}
            <div className='flex w-full justify-end md:hidden'>
                {/* Hamburger */}
                    <div className='flex flex-col items-center  relative' onClick={() => setNavOpen(!navOpen)}>
                        <div className={`bg-slate-200 w-[23px] h-[2px] absolute transition origin-left -top-2 ${navOpen ? 'rotate-45 ' : ''}`}></div>
                        <div className={`bg-slate-200 w-[14px] h-[2px] transition ${navOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                        <div className={`bg-slate-200 w-[23px] h-[2px] absolute transition origin-left top-2 ${navOpen ? '-rotate-45 ' : ''}`}></div>
                    </div>

                {/* Dropdown menu */}
                <AnimatePresence>
                    {navOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 20 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="absolute left-0 mt-2 w-full bg-gray-800 border border-slate-600 text-slate-200 rounded-lg shadow-lg overflow-hidden z-50 "
                        >
                            <ul className="flex flex-col ">
                                {/* <Link className="px-4 py-2 hover:bg-gray-100">Profile</Link> */}
                                <Link href="/skills" className="px-4 py-2 hover:bg-gray-100">Sklls</Link>
                                <Link href="/inbox" className="px-4 py-2 hover:bg-gray-100">Inbox</Link>
                                <Link href="/lessons" className="px-4 py-2 hover:bg-gray-100">Lessons</Link>
                                <Link href="/settings" className="px-4 py-2 hover:bg-gray-100">Settings</Link>
                                <div onClick={onLogout} className="px-4 py-2 hover:bg-gray-100">Logout</div>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Desktop */}
            <div className='justify-around hidden md:flex'>
                <div className='flex gap-6'>
                    <Link href="/skills" >Skills</Link>
                    {/* <Link href="/profile/[profileId]" >Profile</Link> */}
                    <Link href="/inbox">Inbox</Link>
                    <Link href="/lessons">Lessons</Link>
                </div>

                <div className='flex gap-10'>
                    <Link href="/settings">Settings</Link>
                    <p onClick={onLogout}>Logout</p>
                </div>
            </div>
        </header>
    )
}

export default Header;