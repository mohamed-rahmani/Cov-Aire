import Link from "next/link";

type CarpoolingAreaCardProps = {
  city: string;
  zipCode: string;
  placeName: string;
  geographicCoordinates: string;
};

export default function CarpoolingAreaCard(props: CarpoolingAreaCardProps) {
  return (
    <div className="bg-white py-10 rounded-md shadow-md border flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="text-lg">{props.city}</div>
        <div className="text-lg">{props.zipCode}</div>
        <div className="px-2 text-lg text-center">{props.placeName}</div>
      </div>
      <Link
        href={`https://www.google.fr/maps/search/?api=1&query=${props.geographicCoordinates}`}
      >
        <button className="mt-4 px-4 pt-2 pb-[0.25rem] bg-green-400 text-lg rounded-md shadow-md transition duration-300 ease-in-out hover:scale-105">
          Voir sur la carte
        </button>
      </Link>
    </div>
  );
}
