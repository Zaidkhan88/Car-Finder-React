export default function CarCard({ car, onClick, onWishlist }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center">
      <img
        src={car.image}
        alt={car.model}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800 text-center">
        {car.brand} {car.model}
      </h3>
      <p className="text-gray-600 text-sm mt-1">{car.fuel}, {car.seats} seats</p>
      <p className="text-lg font-bold text-blue-600 mt-2">${car.price}</p>
      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onClick(car)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
        >
          View Details
        </button>
        <button
          onClick={() => onWishlist(car)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
