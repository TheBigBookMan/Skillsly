
// TODO make this page have like a search bar as well or something where they can search a skill and then see teachers and brief information which then require smore to login etc
// TODO maybe like tiles moving across the screen showcasing tesimonials and top rated teachers and most popular skills to learn


const HomePage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold">Welcome to Skillsly</h1>
            
            <p className="text-lg mt-2">Learn and teach skills to earn points!</p>
            
            <div className="mt-6 space-x-4">
                <a href="/login" className="px-6 py-2 bg-blue-500 text-white rounded">Login</a>
                <a href="/dashboard" className="px-6 py-2 bg-green-500 text-white rounded">Dashboard</a>
                <a href="/skills" className="px-6 py-2 bg-green-500 text-white rounded">Skills</a> 
            </div>
        </div>
    )
}

export default HomePage;