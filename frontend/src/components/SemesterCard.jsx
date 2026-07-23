import SubjectCard from "./SubjectCard";

function SemesterCard({ semester }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6 mb-8">
      <h2 className="text-2xl font-bold mb-5">
        {semester.semester}
      </h2>

      {semester.subjects.map((subject, index) => (
        <SubjectCard
          key={index}
          subject={subject}
        />
      ))}
    </div>
  );
}

export default SemesterCard;