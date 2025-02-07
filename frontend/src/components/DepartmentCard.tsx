export default function DepartmentCard() {
    return (
      <div className="bg-white py-10 rounded-md cursor-pointer transition duration-300 ease-in-out hover:scale-105 shadow-md border flex flex-col items-center">
        <div className="text-lg">Numéro de département</div>
        <div className="text-lg">Nom de département</div>
      </div>
    );
  }