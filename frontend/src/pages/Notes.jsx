import { useState } from "react";
import Navbar from "../components/Navbar";
import BranchCard from "../components/BranchCard";
import SemesterCard from "../components/SemesterCard";
import SubjectCard from "../components/SubjectCard";

import branches from "../data/branches";
import semesters from "../data/semesters";
import subjects from "../data/subjects";

function Notes() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <h1 className="text-5xl font-bold text-center">
            📚 Notes
          </h1>

          <p className="text-center text-gray-400 mt-4">
            Select your branch and semester to access notes.
          </p>

          {/* Branch Section */}

          <h2 className="text-3xl font-bold mt-14 mb-8">
            Choose Branch
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            {branches.map((item) => (
              <BranchCard
                key={item.id}
                branch={item.short}
                icon={item.icon}
                selected={selectedBranch === item.short}
                onClick={() => setSelectedBranch(item.short)}
              />
            ))}

          </div>

          {/* Semester Section */}

          <h2 className="text-3xl font-bold mt-16 mb-8">
            Choose Semester
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {semesters.map((semester) => (
              <SemesterCard
                key={semester}
                semester={semester}
                selected={selectedSemester === semester}
                onClick={() => setSelectedSemester(semester)}
              />
            ))}

          </div>

          {/* Subject Section */}

          <h2 className="text-3xl font-bold mt-16 mb-8">
            Subjects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {subjects.map((subject, index) => (
              <SubjectCard
                key={index}
                subject={subject}
              />
            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default Notes;