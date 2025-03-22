import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

// TODO need to make mobile responsive with hamburger


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
            <div className='flex w-full justify-end'>
                {/* Hamburger */}
                    <div className='flex flex-col items-center  relative' onClick={() => setNavOpen(!navOpen)}>
                        <div className={`bg-slate-200 w-[23px] h-[2px] absolute transition origin-left -top-2 ${navOpen ? 'rotate-45 ' : ''}`}></div>
                        <div className={`bg-slate-200 w-[14px] h-[2px] transition ${navOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                        <div className={`bg-slate-200 w-[23px] h-[2px] absolute transition origin-left top-2 ${navOpen ? '-rotate-45 ' : ''}`}></div>
                    </div>

                {/* Dropdown menu */}
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