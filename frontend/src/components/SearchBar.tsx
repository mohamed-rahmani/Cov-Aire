"use client";

import { getCarpoolingAreasByKeyword } from "@/services/covaire/CovaireService";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle, Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type CarpoolingArea = {
  city: string;
  adress: string;
  place_name: string;
  zip_code: string;
  geographic_coordinates: string;
  region: string;
  department: string;
};

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const { data, error, isLoading } = useQuery({
    queryKey: ["departments", searchTerm],
    queryFn: () => getCarpoolingAreasByKeyword(searchTerm),
    enabled: !!searchTerm,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative md:w-[30rem] w-full">
      <div className="relative">
        <Search className="absolute left-3 top-2 text-[#898989]" size={18} />
        <input
          type="text"
          placeholder="Tapez une ville, un département ..."
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full pl-10 pt-[0.40rem] py-1 border placeholder:text-[#898989] border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black shadow-sm"
        />
      </div>

      {searchTerm && data && data.length > 0 && (
        <ul className="absolute w-full bg-white border mt-1 rounded-lg shadow-md max-h-[90vh] overflow-y-auto scrollbar-thin">
          {isLoading && <LoaderCircle className="animate-spin" />}
          {error && <p className="text-red-500">Erreur : {error.message}</p>}
          {data
            .slice(0, 10) // On limite à 10 résultats, comme dans ton code
            .map((area: CarpoolingArea, index: number) => (
              <li
                key={index}
                className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                <div className="flex-1 min-w-0 max-w-[70%]">
                  <div className="text-sm">
                    {area.zip_code}, {area.city}
                  </div>
                  <div className="text-sm">
                    {area.department}, {area.region}
                  </div>
                  <div className="text-sm">{area.place_name}</div>
                </div>
                <div className="flex w-[30%] justify-end items-end">
                  <Link
                    href={`https://www.google.fr/maps/search/?api=1&query=${area.geographic_coordinates}`}
                  >
                    <button className="text-xs px-4 py-1 bg-green-400 rounded-md shadow-md transition duration-300 ease-in-out hover:scale-105">
                      Voir sur la carte
                    </button>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
