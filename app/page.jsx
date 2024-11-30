"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [isTuah, setIsTuah] = useState(false);
  const [placeIndex, setPlaceIndex] = useState(0);

  const places = [
    "Boracay",
    "Palawan",
    "Baguio",
    "Siargao",
    "Cebu",
    "Davao",
    "Batanes",
    "Vigan",
    "Camiguin",
    "Coron",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTuah(true);
      const timeout = setTimeout(() => {
        setIsTuah(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }, 24000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const placeInterval = setInterval(() => {
      setPlaceIndex((prevIndex) => (prevIndex + 1) % places.length);
    }, 4000);

    return () => clearInterval(placeInterval);
  }, [places.length]);

  return (
    <>
      <header className="max-h-[60vh] pt-[10vh]">
        <div
          className="flex w-full h-full"
          style={{ backgroundImage: "url('hero-bg.webp')", backgroundSize: "cover" }}
        >
          <div className="flex items-center justify-center p-5 bg-opacity-70 lg:w-1/2 bg-slate-900">
            <h1 className="text-6xl text-center text-white w-96">
              <span className="text-yellow-300">
                Hawk {isTuah ? "Tuah!" : "Tours!"}
              </span>{" "}
              Travel to
              <br />
              <span className="text-yellow-300">{places[placeIndex]}</span>
            </h1>
          </div>
          <div className="lg:w-1/2">
            <img src="bus-mockup-v0.webp" className="h-[50vh] w-auto" alt="bus" />
          </div>
        </div>
      </header>
    </>
  );
}
