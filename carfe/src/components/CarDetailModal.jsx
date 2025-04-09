export default function CarDetailsModal({ car, onClose }) {
  if (!car) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center">
          {car.brand} {car.model}
        </h2>
        <img
          src={car.image}
          alt={car.model}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-semibold">Fuel:</span> {car.fuel}</p>
          <p><span className="font-semibold">Seats:</span> {car.seats}</p>
          <p><span className="font-semibold">Transmission:</span> {car.transmission}</p>
          <p><span className="font-semibold">Color:</span> {car.color}</p>
          <p><span className="font-semibold">Year:</span> {car.year}</p>
          <p className="text-lg font-bold text-blue-600"><span className="font-semibold">Price:</span> ${car.price}</p>
        </div>
      </div>
    </div>
  );
}
