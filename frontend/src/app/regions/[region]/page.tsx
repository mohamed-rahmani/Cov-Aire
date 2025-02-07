import DepartmentCard from "@/components/DepartmentCard";

export default function page() {
  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md mb-7">
      <div className="px-6 py-6 text-[#898989]">Region Name</div>
      <div className="grid grid-cols-3 gap-5 px-6">
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
      </div>
    </div>
  );
}