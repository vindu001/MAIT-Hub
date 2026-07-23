function BranchCard({ branch }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer p-6 text-center hover:scale-105">

      <div className="text-5xl mb-3">
        {branch.icon}
      </div>

      <h2 className="font-bold text-xl">
        {branch.short}
      </h2>

      <p className="text-gray-500 text-sm mt-2">
        {branch.name}
      </p>

    </div>
  );
}

export default BranchCard;