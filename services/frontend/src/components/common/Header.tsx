import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

// TODO need to make mobile responsive with hamburger


const Header = () => {
    const {logout} = useAuth();

    const onLogout = () => {
        const confirmation = confirm("Are you sure you want to logout?");

        return !confirmation && logout();
    }

    return (
        <header className="w-full flex justify-around">
            <div className='flex'>
                <Link href="/">
                    {/* <img /> */}
                </Link>
            </div>

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
        </header>
    )
}

export default Header;