import RegionCard from "@/components/RegionCard";

export default function page() {
  return (
    <div className="bg-white w-full rounded-2xl border border-gray-300 shadow-md mb-7">
      <div className="px-6 py-6 text-[#898989]">Sélectionner une région</div>
      <div className="grid grid-cols-3 gap-5 px-6">
        <RegionCard regionName="Ile de France" />
        <RegionCard regionName="Ile-de-France" />
        <RegionCard regionName="Ile-de-France" />
        <RegionCard regionName="Ile-de-France" />
        <RegionCard regionName="Ile-de-France" />
        <RegionCard regionName="Ile-de-France" />
      </div>
    </div>
  );
}
