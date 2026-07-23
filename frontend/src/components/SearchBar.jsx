import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto mb-10">
      <div className="flex items-center bg-white shadow-md rounded-xl px-4 py-3">
        <FaSearch className="text-gray-500 mr-3" />

        <input
          type="text"
          placeholder="Search subject..."
          className="w-full outline-none text-lg"
        />
      </div>
    </div>
  );
}

export default SearchBar;