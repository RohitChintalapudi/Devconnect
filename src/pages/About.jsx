import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="w-[1200px] m-auto">
        <p className="font-bold text-2xl text-center mt-13">
          About me & My Education
        </p>
        <p className="text-center font-medium mt-10 text-xl">
         <b className="bg-cyan-400"> Hi, I'm Rohit </b>, a passionate and creative<b className="bg-purple-400"> Frontend Web Developer</b>. I
          love transforming ideas into reality using code, and I'm constantly
         <b> learning new technologies</b> to stay ahead in the fast-paced world of web
          development. Whether it's<b className="bg-cyan-400"> creating a clean UI, optimizing user
          experiences</b>, or solving challenging coding problems—I <b className="bg-purple-400">enjoy every bit
          of the process.</b>
        </p>
      </div>
      <hr className="-mb-10 mt-15 w-[600px] m-auto "></hr>
      <div className="mt-20">
        <div className="flex flex-row justify-center mb-5 font-bold gap-72 ml-4 text-lg">
          <div>2010–2022</div>
          <div>2022–2024</div>
          <div>2024–Present</div>
        </div>

        <div className="flex justify-center gap-20 flex-row flex-wrap">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-2 rounded-xl border-black w-[300px] bg-white/30 h-[200px] p-8 group overflow-hidden hover:shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center font-bold text-xl group-hover:opacity-0">
              School
            </div>
            <div className="absolute inset-0 opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500 via-violet-700 to-fuchsia-700 text-white text-sm flex flex-col justify-center items-center text-center p-4">
              <h2 className="font-bold text-black text-[16px] mb-1">
                D A V Public School
              </h2>
              <p>
                <strong>Years:</strong> 2010–2022
              </p>
              <ul className="list-disc mt-1 font-bold text-left pl-4">
                <li>NCC Cadet</li>
                <li>94.33% in Class 10</li>
              </ul>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-2 rounded-xl border-black w-[300px] h-[200px] p-8 group overflow-hidden hover:shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center  bg-white/30 font-bold text-xl group-hover:opacity-0">
              Intermediate
            </div>
            <div className="absolute inset-0 opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500 via-violet-700 to-fuchsia-700 text-white text-sm flex flex-col justify-center items-center text-center p-4">
              <h2 className="font-bold text-black text-[16px] mb-1">
                SR Junior College
              </h2>
              <p>
                <strong>Years:</strong> 2022–2024
              </p>
              <ul className="list-disc font-bold mt-1 ml-10 text-left pl-4">
                <li>97.9% in Board</li>
                <li>96.46% in JEE Mains</li>
                <li>Rank 5,316 in AP EAMCET</li>
              </ul>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-2 rounded-xl border-black w-[300px] h-[200px] p-8 group overflow-hidden hover:shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center font-bold bg-white/30  text-xl  group-hover:opacity-0">
              College
            </div>
            <div className="absolute inset-0 opacity-0 cursor-pointer group-hover:opacity-100 transition-all duration-500 bg-gradient-to-br from-blue-500 via-violet-700 to-fuchsia-700 text-white text-sm flex flex-col justify-center items-center text-center p-4">
              <h2 className="font-bold text-black text-[16px] mb-1">
                SRM AP University
              </h2>
              <p>
                <strong>Years:</strong> 2024–2028
              </p>
              <ul className="list-disc mt-1 font-bold text-left pl-4">
                <li>9.56 CGPA (1st Year)</li>
                <li>Built multiple web apps</li>
              </ul>
              
            </div>
          </motion.div>
        </div>
      </div>

      

    </motion.div>
  );
}
