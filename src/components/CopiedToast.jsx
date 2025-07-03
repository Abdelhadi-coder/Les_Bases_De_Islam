import React from 'react';

export default function CopiedToast({ visible }) {
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-4 rounded-2xl bg-gray-800/80 text-white text-lg font-semibold shadow-lg backdrop-blur-md z-50 transition-opacity duration-500 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      ✅ Email copié !
    </div>
  );
}
