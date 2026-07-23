import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto mt-10">
      <div className="flex items-center bg-white rounded-2xl shadow-xl overflow-hidden">

        <input
          type="text"
          placeholder="Search Notes, PYQs, Practical Files..."
          className="flex-1 px-6 py-5 text-lg outline-none text-gray-700"
        />

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-5 text-white transition">
          <FaSearch />
        </button>

      </div>
    </div>
  );
}

export default SearchBar;