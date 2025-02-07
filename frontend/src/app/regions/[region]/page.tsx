import DepartmentCard from "@/components/DepartmentCard";

type PageParams = Promise<{ region: string }>;

export default async function page({ params }: { params: PageParams }) {
  const { region } = await params;
  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md mb-7">
      <div className="px-6 py-6 text-[#898989]">
        {decodeURIComponent(region)}
      </div>
      <div className="grid grid-cols-3 gap-5 px-6">
        <DepartmentCard
          regionName={region}
          nbDepartment="77"
          nameDepartment="Seine-et-Marne"
        />
        <DepartmentCard
          regionName={region}
          nbDepartment="77"
          nameDepartment="Seine-et-Marne"
        />
        <DepartmentCard
          regionName={region}
          nbDepartment="77"
          nameDepartment="Seine-et-Marne"
        />
        <DepartmentCard
          regionName={region}
          nbDepartment="77"
          nameDepartment="Seine-et-Marne"
        />
        <DepartmentCard
          regionName={region}
          nbDepartment="77"
          nameDepartment="Seine-et-Marne"
        />
        <DepartmentCard
          regionName={region}
          nbDepartment="77"
          nameDepartment="Seine-et-Marne"
        />
      </div>
    </div>
  );
}
