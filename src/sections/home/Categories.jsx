import { Link } from "react-router-dom";
import categories from "../../constants/categories";

const Categories = () => {
  return (
    <main className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-10 text-center">
          Catégories de cours
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {categories.map((cat, idx) => {
            const Icon = cat.icon; 
            return (
              <Link
                key={idx}
                to={cat.to}
                className="flex flex-col items-center justify-center bg-gray-800 p-10 rounded-2xl shadow-lg hover:bg-gray-700 transition"
              >
                <Icon className="text-green-400 mb-4" size={44} strokeWidth={2.5} />
                <h2 className="text-white text-2xl font-semibold text-center">
                  {cat.name}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Categories;
