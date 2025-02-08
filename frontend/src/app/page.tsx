"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md p-4 mb-7 flex">
      <div className="w-1/2 h-full flex flex-col justify-center items-start p-10">
        <p className="text-5xl">
          Découvrez les aires de covoiturage{" "}
          <span className="relative inline-block">
            <span className="relative z-10">disponible</span>
            <span className="absolute left-0 bottom-0 w-full h-2 bg-green-400 z-0"></span>
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
      <div className="w-1/2 h-full flex justify-center items-center p-10">
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
