import Image from "next/image";

export default function NavBar(){
   return(
   <>
   <nav className="w-full py-[1vh] fixed top-0 flex items-center bg-slate-900 text-white shadow">
      <div className="flex items-center justify-center w-1/2 h-full space-x-4">
         <img className="invert h-[8vh]" src="logo.webp" alt="logo" />
         <h2 className="text-lg font-medium">Hawk Tours</h2>
      </div>
      <ul className="flex items-center w-1/2 h-full justify-evenly">
         <li><a href="/">Home</a></li>
         <li><a href="/">Home</a></li>
         <li><a href="/">Home</a></li>
         <li><a href="/">Home</a></li>
      </ul>
   </nav>
   </>
   );
}