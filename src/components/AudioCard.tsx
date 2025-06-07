import { Play, Pause, Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface AudioCardProps {
  title: string;
  chapitre: string;
  audioSrc: string;
}

export const AudioCard = ({ title, chapitre, audioSrc }: AudioCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("0:00");
  const [speed, setSpeed] = useState(1);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60);
      setDuration(`${minutes}:${seconds.toString().padStart(2, "0")}`);
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [audioSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const changeSpeed = (value: number) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.playbackRate = value;
    setSpeed(value);
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-md flex flex-col gap-5 text-white">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="mb-1 text-sm text-green-400">{chapitre}</div>
        <span className="text-sm text-gray-400">Durée : {duration}</span>
      </div>

      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="flex items-center gap-4">
        <button
          onClick={togglePlay}
          className="w-13 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>

        <audio
          ref={audioRef}
          src={audioSrc}
          onEnded={() => setIsPlaying(false)}
          className="w-full"
          controls
        />
      </div>

      <div className="flex flex-wrap gap-3 justify-between items-center">
        <div className="flex gap-2">
          {[1, 1.5, 2].map((val) => (
            <button
              key={val}
              onClick={() => changeSpeed(val)}
              className={`px-3 py-1 rounded-md border ${
                speed === val
                  ? "bg-green-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              } transition`}
            >
              ×{val}
            </button>
          ))}
        </div>

        <a
          href={audioSrc}
          download
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
        >
          <Download size={18} />
          Télécharger
        </a>
      </div>
    </div>
  );
};
