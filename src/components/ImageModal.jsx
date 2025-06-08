import { useEffect } from "react";
import { CircleX } from "lucide-react";

const ImageModal = ({ imageSrc, onClose }) => {
  // Permet de fermer avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Permet de fermer si on clique à l’extérieur de l’image
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed pt-20 inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      {/* Bouton pour fermer */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold"
        onClick={onClose}
        aria-label="Fermer l'image"
      >
        <CircleX color="white" />
      </button>

      {/* L’image agrandie */}
      <img
        src={imageSrc}
        alt="Image du cours"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border border-gray-700"
      />
    </div>
  );
};

export default ImageModal;
