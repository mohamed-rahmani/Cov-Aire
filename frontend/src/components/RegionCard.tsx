import Link from "next/link";

type RegionCardProps = {
  regionName: string;
};

export default function RegionCard({ regionName }: RegionCardProps) {
  return (
    <Link
      href={"/regions/" + regionName}
      className="bg-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-105 shadow-md border flex flex-col items-center"
    >
      <div className="py-10 text-lg">{regionName}</div>
    </Link>
  );
}
