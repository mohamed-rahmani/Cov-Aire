"use client";

import CarpoolingAreaCard from "@/components/CarpoolingAreaCard";
import { getCarpoolingAreasByDepartment } from "@/services/covaire/CovaireService";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

type CarpoolingArea = {
  city: string;
  adress: string;
  place_name: string;
  zip_code: string;
  geographic_coordinates: string;
};

export default function Page() {
  const { region, department } = useParams();
  const regionName = decodeURIComponent(region as string);
  const departmentName = decodeURIComponent(department as string);

  const { data, error, isLoading } = useQuery<CarpoolingArea[]>({
    queryKey: ["carpooling-areas", departmentName],
    queryFn: () => getCarpoolingAreasByDepartment(departmentName),
    enabled: !!departmentName,
  });

  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md mb-7">
      <div className="px-6 py-6 text-[#898989]">
        <Link href={`/regions/${regionName}`}>{regionName}</Link> {">"}{" "}
        <Link href={`/regions/${regionName}/${departmentName}`}>
          {departmentName}
        </Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-6 pb-6">
        {isLoading && <LoaderCircle className="animate-spin" />}
        {error && <p className="text-red-500">Erreur : {error.message}</p>}
        {data &&
          data.map((area, index) => (
            <CarpoolingAreaCard
              key={index}
              city={area.city}
              placeName={area.place_name}
              zipCode={area.zip_code}
              geographicCoordinates={area.geographic_coordinates}
            />
          ))}
      </div>
    </div>
  );
}
