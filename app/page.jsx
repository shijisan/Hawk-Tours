import Hero from "@/components/Hero";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faTicket, faCalendarCheck, faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
	return (
		<>
			<Hero />

			<section className="lg:h-[40vh]">
				<div className="flex items-center justify-center w-full h-full">
					<div className="p-5 bg-white lg:w-[80vw] w-full rounded shadow">
						<div className="inline-flex items-center mb-2 text-4xl font-medium">
							<FontAwesomeIcon className="w-8 h-8 me-4" icon={faBus} />
							<h2 className="">Booking</h2>
						</div>
						<hr />
						<p className="px-4 mt-2 mb-6 indent-16">
							Whether you're looking to reserve a seat for your next trip or need an entire bus for a private journey, we've got you covered. Choose between <a className="text-blue-500 hover:underline" href="#">Book Seats</a> for individual travel or <a className="text-blue-500 hover:underline" href="#">Private Booking</a> for exclusive use of the vehicle. Plan your trip with ease and enjoy a seamless travel experience tailored to your needs.
						</p>

						<div className="flex items-center justify-center w-full h-full gap-1">
							<a className="inline-flex items-center justify-center w-40 p-2 text-center bg-yellow-300 hover:bg-yellow-400 rounded-s" href=""><FontAwesomeIcon className="w-4 h-4 me-2" icon={faTicket} />Book Seats</a>
							<a className="inline-flex items-center justify-center w-40 p-2 text-center bg-yellow-300 hover:bg-yellow-400 rounded-e" href=""><FontAwesomeIcon className="w-4 h-4 me-2" icon={faCalendarCheck} />Private Booking</a>
						</div>
					</div>
				</div>
			</section>

			<section className="min-h-screen">
				<div className="flex flex-col items-center justify-center w-full h-full">
					<div className=" bg-white lg:w-[80vw] w-full rounded shadow">
						<div className="p-5">
							<div className="inline-flex items-center mb-2 text-4xl font-medium">
								<FontAwesomeIcon className="w-8 h-8 me-4" icon={faLocationDot} />
								<h2>Our Terminals</h2>
							</div>
							<hr />
							<div className="mt-2">
								<p className="px-4 mt-2 mb-6 indent-16">We are available nationwide and ready to serve you in various locations across the Philippines. Here are some of our terminals:</p>
								<div className="grid grid-cols-2 gap-4 justify-items-center">
									<ul className="list-disc list-inside">
										<li>Manila Central Terminal</li>
										<li>Cebu City North Terminal</li>
										<li>Davao International Terminal</li>
										<li>Iloilo City Transport Hub</li>
										<li>Tagaytay Bay Terminal</li>
										<li>Quezon City South Bus Station</li>
									</ul>
									<ul className="list-disc list-inside">
										<li>Baguio Mountain Terminal</li>
										<li>Palawan Coastal Hub</li>
										<li>Subic Bay Transport Center</li>
										<li>Batangas South Terminal</li>
										<li>General Santos City Main Station</li>
										<li>Cagayan de Oro Central Terminal</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="h-[40vh] w-full rounded-b" style={{ backgroundImage: "url('bus-terminal.webp')", backgroundSize: "cover", backgroundPosition: "50% 70%" }}>
						</div>
					</div>

				</div>

			</section>

		</>
	);
}