 import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import SemesterCard from "../components/SemesterCard";
import notesData from "../data/notesData";

function Notes() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-6">

        <h1 className="text-4xl font-bold text-center mb-8">
          Notes
        </h1>

        <SearchBar />

        {notesData.map((semester, index) => (
          <SemesterCard
            key={index}
            semester={semester}
          />
        ))}

      </div>
    </>
  );
}

export default Notes;