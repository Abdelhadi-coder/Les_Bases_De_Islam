// import { BookOpen, Sun, Moon } from 'lucide-react';
// import Button from './components/Button';
// import { Link } from 'react-router-dom';
// import { useTheme } from './components/ThemeContext';

// const App = () => {
//   const { theme, toggleTheme } = useTheme(); // 👈

//   // return (
//   //   <main className="h-screen flex items-center justify-center bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800 from-gray-100 via-white to-gray-200 px-4 transition-colors duration-500">
//   //     <div className="absolute top-4 right-4">
//   //       <button
//   //         onClick={toggleTheme}
//   //         className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-md border dark:border-gray-600 border-gray-300 transition-all duration-300 hover:scale-110"
//   //         aria-label="Toggle Theme"
//   //       >
//   //         {theme === 'dark' ? (
//   //           <Sun className="text-yellow-400" size={24} />
//   //         ) : (
//   //           <Moon className="text-blue-700" size={24} />
//   //         )}
//   //       </button>
//   //     </div>

//   //     <div className="text-center space-y-6 transition-all duration-500">
//   //       <h4 className="text-3xl text-green-400 font-medium font-arabic tracking-normal">
//   //         السَّلَامُ عَلَيْكُمْ وَ رَحْمَةُ اللهِ وَ بَرَكاتُهُ
//   //       </h4>
//   //       <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white">
//   //         Cours de sciences religieuse
//   //       </h1>
//   //       <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
//   //         Apprends la langue arabe, la croyance authentique et la religion selon la compréhension des pieux prédécesseurs.
//   //       </p>
//   //       <Button
//   //         to="/categories"
//   //         text="Voir les cours"
//   //         icon={BookOpen}
//   //         props={{ size: 28, strokeWidth: 3 }}
//   //         color="coursBtn"
//   //         hover="black"
//   //         size="md"
//   //       />
//   //     </div>
//   //   </main>
//   // );
//   return (
//   <main className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 via-white to-gray-400 px-4 transition-colors duration-500 relative">
//     <div className="absolute top-4 right-4">
//       <button
//         onClick={toggleTheme}
//         className="p-2 rounded-full bg-gray-200 shadow-md border border-gray-300 transition-all duration-300 hover:scale-110"
//         aria-label="Toggle Theme"
//       >
//         {theme === 'dark' ? (
//           <Sun className="text-yellow-400" size={24} />
//         ) : (
//           <Moon className="text-blue-700" size={24} />
//         )}
//       </button>
//     </div>

//     <div className="text-center space-y-6 transition-all duration-500 max-w-xl px-4">
//       <h4 className="text-3xl text-green-600 font-medium font-arabic tracking-normal">
//         السَّلَامُ عَلَيْكُمْ وَ رَحْمَةُ اللهِ وَ بَرَكاتُهُ
//       </h4>
//       <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
//         Cours de sciences religieuse
//       </h1>
//       <p className="text-gray-700 text-lg max-w-xl mx-auto">
//         Apprends la langue arabe, la croyance authentique et la religion selon la compréhension des pieux prédécesseurs.
//       </p>
//       <Link
//         to="/categories"
//         className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 group"
//       >
//         <BookOpen size={24} strokeWidth={2.5} className="transition-transform duration-300" />
//         Voir les cours
//       </Link>
//     </div>

//   </main>
// );

// };

// export default App;

import { useState, useEffect } from 'react';
import { BookOpen, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import CopiedToast from './components/CopiedToast';

const Home = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [showToast, setShowToast] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const triggerToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <>
      <CopiedToast visible={showToast} />
      <main className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-gray-200 via-white to-gray-400 px-4 pt-28 transition-colors duration-500 relative">
        <div className="text-center space-y-6 sm:mt-22 transition-all duration-500 max-w-xl px-4">
          <h4 className="text-5xl text-green-600 font-medium font-amiri tracking-normal">
            السلام عليكم ورحمة الله وبركاته
          </h4>
          <h1 className="text-4xl md:text-4xl font-bold text-gray-900">
            Cours de science religieuse
          </h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Apprends la langue arabe, la croyance authentique, et la religion selon la compréhension des pieux prédécesseurs,<br /> <span className='text-lg text-gray-700 font-bold italic font-amiri tracking-normal'>dispensées par le frère Aliy le Congolais.</span>
          </p>
          {/* <p className="text-lg text-gray-700 font-bold italic font-amiri tracking-normal">
            dispensé par le frère Aliy le congolais
          </p> */}

          <Link
            to="/categories"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 group"
          >
            <BookOpen size={24} strokeWidth={2.5} className="transition-transform duration-300" />
            Voir les cours
          </Link>

          <div className="mt-6 flex justify-center">
            <a
              href="https://m.youtube.com/@LesbasesdelislamAliy"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full backdrop-blur-lg border border-red-400/30 bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300 shadow-md hover:shadow-lg hover:shadow-red-400/50 hover:scale-110 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-red-500 hover:bg-gradient-to-tr hover:from-white hover:via-gray-300 hover:to-gray-400 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <div className="relative z-10">
                <svg
                  className="w-7 h-7 fill-current text-red-600 group-hover:text-red-500 transition-colors duration-300"
                  viewBox="0 0 576 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
        <hr className="border-t border-gray-300/30 mt-7 dark:border-gray-700/50 w-full max-w-lg mx-auto mb-3" />
        <Footer onCopy={triggerToast} />
      </main>
    </>
  );
};

export default Home;