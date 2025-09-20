import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 pt-30 to-yellow-900">
      <div className="max-w-7xl mx-auto -mt-35 w-full">
        {/* Mobile and Tablet Layout (Stack Vertically) */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          {/* Profile Image - Mobile/Tablet */}
          <motion.div
            className="order-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="../assets/1749228827951.jpg"
              alt="Rohit Chintalapudi"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-yellow-400 shadow-[0_0_30px_rgba(251,191,36,0.6)] object-cover"
            />
          </motion.div>

          {/* Content - Mobile/Tablet */}
          <motion.div
            className="order-2 space-y-6 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 leading-tight"
            >
              Frontend Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed"
            >
              <span className="bg-yellow-500 px-2 py-1 rounded font-bold text-black">
                I am Rohit - web developer
              </span>{" "}
              with a passion for creating beautiful and responsive websites. I
              specialize in transforming ideas into{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-2 py-1 rounded font-bold text-black">
                interactive and user-friendly
              </span>{" "}
              digital experiences.
            </motion.p>

            {/* Buttons - Mobile/Tablet */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 rounded-xl backdrop-blur-md shadow-2xl hover:shadow-yellow-400/50 bg-black/60 font-bold text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] border border-yellow-400/30"
                onClick={() => navigate("/contact")}
              >
                Hire me!
              </motion.button>

              <motion.a
                href="/assets/My_resume.pdf"
                download="Rohit_Chintalapudi_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-3 rounded-xl backdrop-blur-md shadow-2xl hover:shadow-yellow-400/50 bg-gray-800/60 font-bold text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] border border-yellow-400/30 text-center inline-block"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout (Side by Side) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center lg:min-h-[70vh]">
          {/* Content - Desktop */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-yellow-400 leading-tight"
            >
              Frontend Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="text-lg xl:text-xl text-white leading-relaxed max-w-2xl"
            >
              <span className="bg-yellow-500 px-3 py-1 rounded-lg font-bold text-black">
                I am Rohit - web developer
              </span>{" "}
              with a passion for creating beautiful and responsive websites. I
              specialize in transforming ideas into{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 rounded-lg font-bold text-black">
                interactive and user-friendly
              </span>{" "}
              digital experiences.
            </motion.p>

            {/* Buttons - Desktop */}
            <motion.div
              className="flex gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl backdrop-blur-md shadow-2xl hover:shadow-yellow-400/50 bg-black/60 font-bold text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] border border-yellow-400/30 text-lg"
                onClick={() => navigate("/contact")}
              >
                Hire me!
              </motion.button>

              <motion.a
                href="/assets/My_resume.pdf"
                download="Rohit_Chintalapudi_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl backdrop-blur-md shadow-2xl hover:shadow-yellow-400/50 bg-gray-800/60 font-bold text-yellow-400 hover:bg-gradient-to-br hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-600 hover:text-black transition-all duration-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.6)] border border-yellow-400/30 text-center text-lg"
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Desktop */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          >
            <motion.img
              src="../assets/1749228827951.jpg"
              alt="Rohit Chintalapudi"
              className="w-72 h-72 xl:w-88 xl:h-88 2xl:w-[26rem] 2xl:h-[26rem] rounded-full border-4 border-yellow-400 shadow-[0_0_40px_rgba(251,191,36,0.7)] object-cover"
              initial={{ scale: 0.8, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            />
          </motion.div>
        </div>

        {/* Floating Elements for Visual Appeal */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl"
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-32 right-16 w-24 h-24 bg-yellow-500/30 rounded-full blur-xl"
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-12 h-12 bg-yellow-600/20 rounded-full blur-xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      </div>
    </main>
  );
}
