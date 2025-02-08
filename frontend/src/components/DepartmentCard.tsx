import Link from "next/link";

type DepartmentCardProps = {
  regionName: string;
  nameDepartment: string;
};

export default function DepartmentCard({
  regionName,
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
      <div className="py-10 text-lg">{nameDepartment}</div>
    </Link>
  );
}
