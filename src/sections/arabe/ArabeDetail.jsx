import { useParams } from "react-router-dom";
import { useState } from "react";
import arabeCourses from "../../constants/arabeCourses";
import { AudioCard } from "../../components/AudioCard";
import ImageModal from "../../components/ImageModal";

const ArabeDetail = () => {
  const { id } = useParams();
  const cours = arabeCourses.find((c) => c.id === id);
  const firstCover = cours?.audios.find((audio) => audio.cover)?.cover;
  const [modalOpen, setModalOpen] = useState(null);

  if (!cours) {
    return <div className="text-white pt-24 text-center">Cours non trouvé</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white pt-24 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-400 mb-2">{cours.title}</h1>
        <p className="text-gray-300 mb-8">{cours.description}</p>

        {modalOpen && (
        <ImageModal
            imageSrc={modalOpen}
            onClose={() => setModalOpen(null)}
        />
        )}

        <div className="space-y-6">
          {cours.audios.map((audio, index) => (
            <AudioCard
              key={index}
              title={audio.name}
              audioSrc={audio.audio}
              cover={audio.cover}
              onViewImage={audio.cover ? (src) => setModalOpen(src) : undefined}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArabeDetail;
