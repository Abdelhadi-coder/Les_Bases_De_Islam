import { BookOpen } from 'lucide-react';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './components/Button';

const App = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4">
      <div className="text-center space-y-6">
        <h4 className="text-3xl text-green-400 font-medium font-arabic tracking-normal">
            السَّلَامُ عَلَيْكُمْ وَ رَحْمَةُ اللهِ وَ بَرَكاتُهُ
        </h4>
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Cours de sciences religieuse
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Apprends la langue arabe, la croyance authentique et la religion selon la compréhension des pieux prédécesseurs.
        </p>
        <Button
            to="/categories"
            text="Voir les cours"
            icon={BookOpen}
            props={{ size: 28, strokeWidth: 3 }}
            color="coursBtn"
            hover="black"
            size="md"
        />
      </div>
    </main>
  );
};

export default App;
