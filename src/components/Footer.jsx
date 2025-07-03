import { Copy } from 'lucide-react';

function Footer({ onCopy }) {
  const emails = [
    { label: "Homme", email: "lesbasesdelislam00@gmail.com" },
    { label: "Femme", email: "lesbasesdelislamfemme@gmail.com" },
  ];

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    if (onCopy) onCopy();
  };

  return (
    <footer className="w-full px-4 text-center text-sm text-gray-600 dark:text-gray-300 py-6">
      <div className="inline-flex flex-col items-center gap-2 p-4 rounded-xl bg-white/60 dark:bg-black/30 backdrop-blur-md shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] max-w-lg mx-auto">
        <p className="mb-2 font-medium">Une remarque, un bug ou une idée d'amélioration ?</p>
        {emails.map(({ label, email }, i) => (
          <div
            key={i}
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => handleCopy(email)}
          >
            <span className="text-gray-800 dark:text-white font-semibold">{label} :</span>
            <span className="text-green-600 dark:text-green-400 font-medium underline">{email}</span>
            <Copy size={16} className="text-gray-600 dark:text-gray-300 group-hover:text-green-500 transition-colors" />
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
