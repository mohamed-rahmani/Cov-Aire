import Link from "next/link";

export default function RegionCard() {
  return (
    <Link href={"/regions/" + "name"} className="bg-white rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-105 shadow-md border flex flex-col items-center">
      <div className="py-10 text-lg">Corse</div>
    </Link>
  );
}
