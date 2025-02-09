"use client";

import DepartmentCard from "@/components/DepartmentCard";
import { getDepartmentsByRegion } from "@/services/covaire/CovaireService";
import { useQuery } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { region } = useParams();
  const regionName = decodeURIComponent(region as string);

  const { data, error, isLoading } = useQuery({
    queryKey: ["departments", regionName],
    queryFn: () => getDepartmentsByRegion(regionName),
    enabled: !!regionName,
  });

  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md mb-7">
      <div className="px-6 py-6 text-[#898989]">
        <Link href={`/regions`}>{regionName}</Link>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-6 py-2">
        {isLoading && <LoaderCircle className="animate-spin" />}
        {error && <p className="text-red-500">Erreur : {error.message}</p>}
        {data &&
          data.map((dept: string, index: number) => (
            <DepartmentCard
              key={index}
              regionName={regionName}
              nameDepartment={dept}
            />
          ))}
      </div>
    </div>
  );
}
