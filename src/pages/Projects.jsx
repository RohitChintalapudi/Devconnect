import { motion } from "framer-motion";

export default function Projects() {
  return (
    <main>
      <motion.p
        className="font-bold text-[27px] text-center mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="font-bold text-center text-[20px] mt-10">
          "Crafted using
          <b className="bg-cyan-400"> "HTML, CSS, JavaScript, React JS, and Tailwind CSS"</b> —
          each project reflects <b className="bg-purple-500">"clean design and usability"</b>
        </p>
      </motion.div>

      <div className="flex flex-row justify-center items-center gap-10 mt-20">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/RohitChintalapudi/Cric-Play" target="_main">
            <img
              src="src/assets/img1.png"
              className="w-[400px] rounded-xl drop-shadow-2xl border-2"
              alt="Cric-Play"
            />
          </a>
          <p className="font-bold text-center text-[18px] mt-5">Cric-Play</p>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/RohitChintalapudi/Word-Assemble-game" target="_main">
            <img
              src="src/assets/img4.png"
              className="w-[400px] rounded-xl drop-shadow-2xl border-2"
              alt="Word Assemble Game"
            />
          </a>
          <p className="font-bold text-center text-[18px] mt-5">Word Assemble Game</p>
        </motion.div>

        {/* Project 3 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/RohitChintalapudi/weather-app/tree/master" target="_main">
            <img
              src="src/assets/img2.png"
              className="w-[400px] rounded-xl drop-shadow-2xl border-2"
              alt="Weather App"
            />
          </a>
          <p className="font-bold text-center text-[18px] mt-5">Weather App</p>
        </motion.div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        ><p className="font-bold text-[17px] text-center mt-10">Click on the project to<b className="bg-cyan-500"> get source code!</b></p>
      </motion.div>
    </main>
  );
}
