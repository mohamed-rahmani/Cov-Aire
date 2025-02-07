import Link from "next/link";

type DepartmentCardProps = {
  regionName: string;
  nbDepartment: string;
  nameDepartment: string;
};

export default function DepartmentCard({
  regionName,
  nbDepartment,
  nameDepartment,
}: DepartmentCardProps) {
  return (
    <Link
      href={
        "/regions/" +
        decodeURIComponent(regionName) +
        "/" +
        decodeURIComponent(nameDepartment)
      }
      className="bg-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-105 shadow-md border flex flex-col items-center"
    >
      <div className="py-10 text-lg">{nbDepartment}</div>
      <div className="pb-2 text-lg">{nameDepartment}</div>
    </Link>
  );
}
