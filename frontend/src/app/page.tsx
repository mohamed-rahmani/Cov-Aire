"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md p-4 mb-7 flex">
      <div className="md:w-1/2 w-full h-full flex flex-col justify-center items-start p-10">
        <p className="max-sm:text-4xl text-5xl">
          Découvrez les aires de covoiturage{" "}
          <span className="inline-block">
            <span className="border-b-green-400 border-b-8">disponible</span>
          </span>{" "}
          partout en France
        </p>
        <p className="text-lg text-[#898989]">
          Trouvez facilement les aires de covoiturage près de chez-vous.
        </p>
        <Link href="/regions">
          <button className="mt-4 px-4 pt-2 pb-[0.25rem] bg-green-400 text-lg rounded-md shadow-md transition duration-300 ease-in-out hover:scale-105">
            Commencer
          </button>
        </Link>
      </div>
      <div className="w-1/2 h-full md:flex justify-center items-center p-10 hidden">
        <Image
          src={"/france.svg"}
          alt="France Map"
          width="600"
          height="600"
          priority
        />
      </div>
    </div>
  );
}
