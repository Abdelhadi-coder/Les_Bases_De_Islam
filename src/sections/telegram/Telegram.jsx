import { Send } from "lucide-react";
import telegram from "../../constants/telegram";

const Telegram = () => {
  return (
    <main className="min-h-screen pt-32 px-4 bg-gradient-to-br from-white via-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-gray-900 text-4xl font-bold mb-10 text-center">
          Canaux Telegram
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {telegram.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:bg-gray-100 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="text-green-500 mb-4" size={44} strokeWidth={1.75} />
                  <h2 className="text-gray-800 text-2xl font-semibold mb-2">
                    {cat.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-6">
                    {cat.description}
                  </p>
                </div>

                <a
                  href={cat.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group self-center"
                >
                  <div className="inner gap-2 bg-white text-black border border-gray-300 hover:bg-black hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg flex items-center">
                    <span>Rejoindre</span>
                    <Send
                      strokeWidth={2.5}
                      className="transition-colors group-hover:stroke-white stroke-black"
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Telegram;
