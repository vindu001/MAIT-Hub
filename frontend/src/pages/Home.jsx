import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import BranchCard from "../components/BranchCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">

      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl text-white font-bold text-center mb-14">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <FeatureCard
            icon="📚"
            title="Notes"
            subtitle="Semester-wise notes for every branch."
          />

          <FeatureCard
            icon="📄"
            title="Previous Year Papers"
            subtitle="University PYQs with solutions."
          />

          <FeatureCard
            icon="🧪"
            title="Practical Files"
            subtitle="Lab files ready for submission."
          />

          <FeatureCard
            icon="📖"
            title="Syllabus"
            subtitle="Latest MAIT & GGSIPU syllabus."
          />

          <FeatureCard
            icon="💰"
            title="Fee Structure"
            subtitle="Latest fee details and notices."
          />

          <FeatureCard
            icon="📢"
            title="Notices"
            subtitle="Official college updates."
          />
<section className="max-w-7xl mx-auto py-20 px-6">

  <h2 className="text-4xl text-white font-bold text-center mb-12">
    Browse By Branch
  </h2>

  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

    <BranchCard emoji="💻" branch="Information Technology" />

    <BranchCard emoji="🖥️" branch="Computer Science" />

    <BranchCard emoji="🤖" branch="AI & ML" />

    <BranchCard emoji="📡" branch="Electronics" />

    <BranchCard emoji="⚡" branch="Electrical" />

    <BranchCard emoji="⚙️" branch="Mechanical" />

    <BranchCard emoji="🏗️" branch="Civil" />

    <BranchCard emoji="🧪" branch="Applied Science" />

  </div>

</section>

<section className="max-w-7xl mx-auto px-6 pb-20">

  <h2 className="text-4xl text-white font-bold text-center mb-12">
    MAIT Hub Stats
  </h2>

  <div className="grid md:grid-cols-4 gap-8">

    <div className="bg-slate-900 rounded-2xl p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-500">10K+</h2>
      <p className="text-gray-400 mt-3">Notes</p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-500">2500+</h2>
      <p className="text-gray-400 mt-3">PYQs</p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-500">800+</h2>
      <p className="text-gray-400 mt-3">Practical Files</p>
    </div>

    <div className="bg-slate-900 rounded-2xl p-8 text-center">
      <h2 className="text-5xl font-bold text-blue-500">9</h2>
      <p className="text-gray-400 mt-3">Departments</p>
    </div>

  </div>

</section>

<Footer />
        </div>

      </section>

    </div>
  );
}

export default Home;