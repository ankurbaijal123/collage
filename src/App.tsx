import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";
import { Balloon } from "./components/Balloon";
import { PhotoCollage } from "./components/PhotoCollage";
import { Countdown } from "./components/Countdown";
import { Heart, Music, AudioLines } from "lucide-react";

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound("/audio/song.mp3", {
    volume: 0.5,
    loop: true,
  });

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 relative overflow-hidden">
      <AnimatePresence>
        {!showContent && <Countdown onComplete={() => setShowContent(true)} />}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full min-h-screen"
          >
            <button
              onClick={toggleMusic}
              className="fixed top-4 right-4 z-50 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              {isPlaying ? (
                <AudioLines className="w-6 h-6" />
              ) : (
                <Music className="w-6 h-6" />
              )}
            </button>

            <div className="container mx-auto px-4 py-8">
              <motion.h1
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                className="text-6xl md:text-8xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
              >
                Happy Birthday Tanisha!
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-center mb-12"
              >
                <p className="text-2xl text-gray-700 flex items-center justify-center gap-2">
                  With lots of love{" "}
                  <Heart
                    className="text-red-500 animate-pulse"
                    fill="currentColor"
                  />
                </p>
              </motion.div>

              <PhotoCollage />

              <div className="relative h-full">
              <Balloon color="bg-pink-400" delay={0} left="left-1/4" />
                <Balloon color="bg-purple-400" delay={0.5} left="left-1/2" />
                <Balloon color="bg-blue-400" delay={1} left="left-3/4" />
                <Balloon color="bg-red-400" delay={1.5} left="left-1/3" />
                <Balloon color="bg-yellow-400" delay={2} left="left-2/3" />
                
               
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-12 max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-xl"
              >
                <p className="text-xl text-gray-700 leading-relaxed">
                  May your day be filled with joy, laughter, and countless
                  beautiful moments. Here's to celebrating you and all the
                  happiness you bring to those around you!
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
