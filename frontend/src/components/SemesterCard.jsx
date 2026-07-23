function SemesterCard({ semester, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl px-6 py-4 font-semibold transition ${
        selected
          ? "bg-blue-600 text-white"
          : "bg-slate-800 text-gray-300 hover:bg-slate-700"
      }`}
    >
      {semester}
    </button>
  );
}

export default SemesterCard;