import { Copy } from 'lucide-react';
import { useState } from 'react';

function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "tonemail@example.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="absolute bottom-4 w-full px-6 text-center text-sm text-gray-600 dark:text-gray-300">
      <div className="inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-white/60 dark:bg-black/30 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
        <span>
          Une remarque, un bug ou une idée d'amélioration ? Contactez-moi sur ce mail :
        </span>
        <div className="inline-flex items-center gap-1 cursor-pointer group relative" onClick={handleCopy}>
          <span className="text-green-600 dark:text-green-400 font-medium underline">{email}</span>
          <Copy size={16} className="text-gray-600 dark:text-gray-300 ml-2 group-hover:text-green-500 transition-colors" />
          {copied && (
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs rounded px-2 py-0.5 shadow-md">
              Copié !
            </span>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;