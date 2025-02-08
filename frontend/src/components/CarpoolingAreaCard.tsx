type CarpoolingAreaCardProps = {
  zipcode: number;
  city: string;
  adress: string;
  namePlace: string;
  parkingType: string;
  parkingBike: string;
  sfr4G: string;
  free4G: string;
  orange4G: string;
  bouygues4G: string;
  geographic: string;
};

export default function CarpoolingAreaCard(props: CarpoolingAreaCardProps) {
  return (
    <div className="bg-white py-10 rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-105 shadow-md border flex flex-col items-center">
      <div className="text-lg">{props.namePlace}</div>
      <div className="text-lg">{props.zipcode}</div>
      <div className="text-lg">{props.city}</div>
      <div className="text-lg">{props.adress}</div>
      <div className="text-lg">{props.geographic}</div>
      <div className="text-lg">{props.parkingType}</div>
      <div className="text-lg">{props.parkingBike}</div>
      <div className="text-lg">{props.bouygues4G}</div>
      <div className="text-lg">{props.free4G}</div>
      <div className="text-lg">{props.sfr4G}</div>
      <div className="text-lg">{props.orange4G}</div>
    </div>
  );
}
