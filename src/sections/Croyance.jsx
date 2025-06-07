import { croyance } from '../constants/croyance';
import { Link } from 'react-router-dom';

const Croyance = () => {
  return (
    <main className="min-h-screen pt-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white text-4xl font-bold mb-8 text-center">Cours sur la croyance</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {croyance.map((serie) => (
            <Link key={serie.id} to={`/croyance/${serie.id}`}>
              <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:bg-gray-700 transition">
                <h2 className="text-white text-2xl font-semibold mb-2">{serie.title}</h2>
                <p className="text-gray-400 text-sm">{serie.description}</p>
                <p className="text-green-500 mt-3">{serie.cours.length} audios</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
export default Croyance;
