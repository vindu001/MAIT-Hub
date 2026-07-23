 import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import BranchCard from "../components/BranchCard";
import branches from "../data/branches";
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

<h2 className="text-3xl font-bold text-center mt-10 mb-8">
  Choose Your Branch
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

  {branches.map((branch) => (
    <BranchCard
      key={branch.id}
      branch={branch}
    />
  ))}

</div>
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