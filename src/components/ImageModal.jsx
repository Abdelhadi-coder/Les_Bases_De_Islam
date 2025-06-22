import { useEffect } from "react";
import { CircleX } from "lucide-react";

const ImageModal = ({ imageSrc, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed pt-20 inset-0 bg-gray-300 bg-opacity-90 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <button
        className="absolute top-6 mt-20 right-6 z-50 bg-black/60 hover:bg-red-600 text-white p-2 rounded-full transition"
        onClick={onClose}
        aria-label="Fermer l'image"
      >
        <CircleX size={28} />
      </button>
      <img
        src={imageSrc}
        alt="Image du cours"
        className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl border border-gray-700"
      />
    </div>
  );
};

export default ImageModal;
