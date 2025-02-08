"use client";

import RegionCard from "@/components/RegionCard";
import { getAllRegion } from "@/services/covaire/CovaireService";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";

export default function Page() {
  const { data, error, isLoading } = useQuery({
    queryKey: [getAllRegion],
    queryFn: async () => {
      const result = await getAllRegion();
      return result;
    },
  });
  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md mb-7">
      <div className="px-6 py-6 text-[#898989]">Sélectionner une région</div>
      <div className="grid grid-cols-3 gap-5 px-6">
        {isLoading && <LoaderCircle className="spin-animation" />}
        {error && <p className="error">Error: {error.message}</p>}
        {data &&
          data
            .filter(
              (regionName: string) =>
                regionName !== null && regionName !== "null"
            )
            .map((regionName: string, index: number) => {
              return <RegionCard key={index} regionName={regionName} />;
            })}
      </div>
    </div>
  );
}
