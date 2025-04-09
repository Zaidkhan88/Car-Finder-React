import React from 'react';
import { toast,ToastContainer} from 'react-toastify';
import { Heart, Eye } from 'lucide-react';

function WishListComp({ wishlist, setWishlist, setSelectedCar }) {

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter(c => c.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    setWishlist(updated);
    toast.error("Removed from wishlist!");
  };

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Wishlist 💖
      </h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-12">
          Your wishlist is empty. Start adding some dream rides!
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map(car => (
            <div
              key={car.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border"
            >
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {car.brand} {car.model}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {car.fuel} • {car.seats} seats • {car.transmission}
                </p>
                <p className="text-lg text-blue-600 font-bold mt-2">
                  ${car.price}
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => removeFromWishlist(car.id)}
                    className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-2 rounded-md transition"
                  >
                    <Heart className="w-4 h-4" />
                    Remove
                  </button>

                  {setSelectedCar && (
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-2 rounded-md transition"
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default WishListComp;
