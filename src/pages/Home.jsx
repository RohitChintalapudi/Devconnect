import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="-mt-15 ml-6">
      <motion.div
        className="flex flex-col justify-center ml-[140px] gap-2 relative top-[310px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p 
        initial={{ opacity: 0,opacity: 0 }}
        animate={{ opacity: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }} className="font-extrabold text-[47px] relative">Front End Developer</motion.p>
        <p className="relative font-bold text-[18px] w-[700px] ">
         <b className="bg-purple-500"> I am Rohit - web developer </b> with a passion for creating beautiful and responsive websites. I specialize in transforming ideas into <b className="bg-cyan-400">interactive and user-friendly</b> digital experiences.
        </p>
        <motion.button
         initial={{ scale: 0 }} animate={{ scale: 1 }}
           whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="outline-2 w-30 p-2 inline-block rounded-xl backdrop-blur-md shadow-2xl hover:shadow-purple-500 bg-white/30 font-bold relative
          top-4 hover:backdrop-blur-2xl hover:shadow-2xl hover:bg-gradient-to-br from-blue-700 via-violet-700 to-fuchsia-700 bg-opacity-80 cursor-pointer
          text-white drop-shadow-[0_0_20px_rgba(147,51,234,1)]"
          onClick={() => {navigate("/contact");}}
        >
          Hire me!
        </motion.button>
      </motion.div>
      <motion.div
        className="flex justify-end relative mr-[230px] mt-9"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.img
          src="src/assets/1749228827951.jpg"
          className="rounded-full border-2 border-white shadow-[0_0_15px_rgb(0,0,0)] fixed scale-165"
          initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </main>
  );
}
