function SubjectCard({ subject }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow hover:shadow-lg transition mb-3">
      <h3 className="font-semibold text-gray-700">
        {subject.name}
      </h3>

      <a
        href={subject.pdf}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download
      </a>
    </div>
  );
}

export default SubjectCard;