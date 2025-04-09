import { useEffect, useState } from 'react';
import Filters from '../components/Filters';
import CarCard from '../components/CarCard';
import CarDetailsModal from '../components/CarDetailModal';
import WishListComp from '../components/WishListComp';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const API = "http://localhost:5000/api/cars";
const CARS_PER_PAGE = 10;
export default function Home() {
  const [cars, setCars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({});
  const [selectedCar, setSelectedCar] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [showWishlist, setShowWishlist] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();


  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setCars(data);
        console.log(data, 'data');
      });
  }, []);

  useEffect(() => {
    const result = cars.filter(car => {
      return (!filters.brand || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
             (!filters.price || car.price <= filters.price) &&
             (!filters.fuel || car.fuel === filters.fuel) &&
             (!filters.seats || car.seats === +filters.seats);
    });
    setFiltered(result);
    setCurrentPage(1); 
  }, [filters, cars]);

  const startIndex = (currentPage - 1) * CARS_PER_PAGE;
  const endIndex = startIndex + CARS_PER_PAGE;
  const currentCars = filtered.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filtered.length / CARS_PER_PAGE);
  
  const addToWishlist = (car) => {
    const existing = wishlist.find(c => c.id === car.id);
    if (!existing) {
      const updated = [...wishlist, car];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setWishlist(updated);
      toast.success(`${car.brand} ${car.model} added to wishlist!`);
    } else {
      toast.info(`${car.brand} ${car.model} is already in wishlist`);
    }
  };
  
 

  
  return (
    <div className="home px-4 py-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Car Finder</h1>
        <div className="flex justify-end mb-4">
        <button 
          className="bg-pink-600 text-white px-4 py-2 rounded shadow hover:bg-pink-700"
          onClick={() => navigate('/wishlist')}
        >
          My Wishlist
        </button>
  {showWishlist && (
  <WishListComp 
    wishlist={wishlist}
    setWishlist={setWishlist}
    setSelectedCar={setSelectedCar}
    onClose={() => setShowWishlist(false)}
  />
)}
</div>

      <div className="mb-6 bg-white shadow p-4 rounded-lg">
        <Filters filters={filters} setFilters={setFilters} />
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Cars</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
        {currentCars.map(car => (
          <CarCard
            key={car.id}
            car={car}
            onClick={setSelectedCar}
            onWishlist={addToWishlist}
          />
        ))}
      </div>
{/* Pagination controls */}
<div className="flex justify-center items-center gap-4 mb-8">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <CarDetailsModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      <ToastContainer position="top-right" autoClose={2000} />
      

      

    </div>
  );
}
