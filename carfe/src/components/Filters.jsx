export default function Filters({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap gap-4 p-4 bg-white shadow-md rounded-xl mb-6 justify-center">
      <input
        type="text"
        placeholder="Brand"
        onChange={(e) =>
          setFilters((f) => ({ ...f, brand: e.target.value }))
        }
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) =>
          setFilters((f) => ({ ...f, price: e.target.value }))
        }
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        onChange={(e) =>
          setFilters((f) => ({ ...f, fuel: e.target.value }))
        }
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Fuel Type</option>
        <option>Petrol</option>
        <option>Diesel</option>
        <option>Electric</option>
      </select>
      <select
        onChange={(e) =>
          setFilters((f) => ({ ...f, seats: e.target.value }))
        }
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Seats</option>
        <option>2</option>
        <option>4</option>
        <option>5</option>
        <option>7</option>
      </select>
    </div>
  );
}
