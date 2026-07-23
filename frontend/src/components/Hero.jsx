import SearchBar from "./SearchBar";

function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-24">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-6xl font-extrabold">
          One Platform for Every MAIT Student
        </h1>

        <p className="mt-8 text-2xl text-gray-200">
          Notes • PYQs • Practical Files • Syllabus • Fees • Notices
        </p>

        <SearchBar />

      </div>

    </section>
  );
}

export default Hero;