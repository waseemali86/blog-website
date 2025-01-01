// import Link from 'next/link'
// import Image from 'next/image'
// function Navbar() {
//   return (
//     <div className='bg-white w-full h-16 items-center py-2'>
//         <nav className='flex justify-between mx-10'>
//         <div className='flex justify-center items-center'>
//             <Image
//             className=''
//             src="/w.logo.png"
//             alt="Logo"
//             width={100}
//             height={100} 
//             >  
//             </Image>
//             <h1 className='text-3xl text-black text-center font-bold'>Waseem</h1>
//         </div>
//         <div className='text-lg text-black font-semibold space-x-8'>
//             <Link href="/">Blog</Link>
//             {/* <Link href="/">Icon</Link> */}
//             <Link href="/About">About</Link>
//             <button className='bg-[#7C4EE4] px-8 py-3 rounded-md text-sm text-white'>Contact Us</button>
//         </div>
//         </nav>
  
//     </div>
//   )
// }

// export default Navbar


import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="max-w-[1450px] mx-auto flex justify-between items-center  w-full h-[10vh] md:h-[10vh] bg-orange-500">
      <div className="w-full mx-3 flex justify-between items-center text-white ">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold transition-colors duration-150 hover:text-amber-50">
            Waseem {"Blog's"}
          </h1>
        </div>
        <div className="md:flex gap-10 text-2xl hidden transition-colors duration-150 hover:text-amber-50">
          <Link href="/">
            <h1>Home</h1>
          </Link>
          <Link href="/about">
            <h1>About</h1>
          </Link>
          <Link href="/contact">
            <h1>Contact</h1>
          </Link>
        </div>
        <div className="flex justify-center">
                <Link href="/contact"><button className="bg-orange-600 px-8 py-3 rounded-md text-sm text-white hidden md:block">
                  Contact Us
                </button></Link>
              </div>
        <Sheet>
          <SheetTrigger className="md:hidden flex ">
            <Menu className="text-xl" />
          </SheetTrigger>
          <SheetContent className="w-[300px] bg-[#780000]  sm:w-[380px]">
            <div className="w-full flex flex-col gap-5 text-[#dddcdc] ">
              <div className="flex flex-col text-2xl gap-3">
                <Link href="/">
                  <h1 className="border-b-2">Home</h1>
                </Link>
                <Link href="/about">
                  <h1 className="border-b-2">About</h1>
                </Link>
                <Link href="/contact">
                  <h1 className="border-b-2">Contact</h1>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Header;
