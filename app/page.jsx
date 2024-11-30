import Hero from "@/components/Hero";

export default function HomePage(){
	return(
	<>
		<Hero/>
		
		<section className="lg:h-[40vh]">
            <div className="flex items-center justify-center w-full h-full">
               <div className="p-5 bg-white lg:w-[80vw] rounded">
                  <h2 className="mb-4 text-4xl">Booking</h2>
                  <p className="px-4 mb-6 indent-16">
                     Whether you're looking to reserve a seat for your next trip or need an entire bus for a private journey, we've got you covered. Choose between <a className="text-blue-500 hover:underline" href="#">Book Seats</a> for individual travel or <a className="text-blue-500 hover:underline" href="#">Private Booking</a> for exclusive use of the vehicle. Plan your trip with ease and enjoy a seamless travel experience tailored to your needs.
                  </p>

                  <div className="flex items-center justify-center w-full h-full">
                     <a className="w-40 p-2 text-center bg-yellow-300 rounded-s border-e" href="">Book Seats</a>
                     <a className="w-40 p-2 text-center bg-yellow-300 rounded-e border-s" href="">Private Booking</a>
                  </div>
               </div>
            </div>
         </section>
	</>
	);
}