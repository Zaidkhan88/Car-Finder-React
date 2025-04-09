import { useEffect, useState } from 'react';
import WishListComp from '../components/WishListComp';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);
    const navigate = useNavigate();
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-pink-600 mb-6">My Wishlist</h1>
      <button
  onClick={() => navigate('/')}
  className="mt-6 inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
>
  ⬅ Back to Home
</button>
      <WishListComp
        wishlist={wishlist} 
        setWishlist={setWishlist} 
      />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
