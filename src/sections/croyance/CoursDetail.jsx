import { useParams } from "react-router-dom";
import { AudioCard } from "../../components/AudioCard";
import croyanceCourses from "../../constants/croyanceCourses";

const CoursDetail = () => {
  const { id } = useParams();
  const cours = croyanceCourses.find((c) => c.id === id);

  if (!cours) {
    return <div className="text-white pt-24 text-center">Cours non trouvé</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-400 mb-2">{cours.title}</h1>
        <p className="text-gray-300 mb-8">{cours.description}</p>

        <div className="space-y-6">
          {cours.audios.map((audio, index) => (
            <AudioCard
              key={index}
              title={audio.name}
              chapitre={audio.chapitre}
              audioSrc={audio.audio}
              duration={audio.duration}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CoursDetail;
