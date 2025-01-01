import Link from "next/link";

function Homepage() {
  return (
    <>
    <div className="max-w-[1450px] mx-auto bg-orange-500">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold text-center">Welcome to {"Waseem's"} Blog</h1>
        <p className="text-lg text-gray-600 my-5">Discover the latest blog posts, tutorials, and articles.</p>
        <Link href="/Blogs"><button className="py-3 px-8 text-white font-bold bg-gray-800 rounded-md hover:bg-gray-700">Explore Blogs</button></Link>
      </div>
    </div>
    
    </>
  )
}

export default Homepage;



