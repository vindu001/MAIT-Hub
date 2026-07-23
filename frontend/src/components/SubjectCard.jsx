import { FaDownload, FaEye } from "react-icons/fa";

function SubjectCard({ subject }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

      <h2 className="text-white text-xl font-bold">
        {subject.name}
      </h2>

      <div className="flex gap-4 mt-6">

        <button className="bg-blue-600 px-5 py-2 rounded-lg text-white flex items-center gap-2">
          <FaEye />
          Preview
        </button>

        <button className="bg-green-600 px-5 py-2 rounded-lg text-white flex items-center gap-2">
          <FaDownload />
          Download
        </button>

      </div>

    </div>
  );
}

export default SubjectCard;