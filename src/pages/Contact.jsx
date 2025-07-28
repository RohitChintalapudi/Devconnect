import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <main className="flex flex-row justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <legend className="font-bold text-2xl items-center ml-[132px] mt-10 text-black bg-purple-500 w-[153px]">
            "Contact me"
          </legend>

          <form className="flex flex-col gap-8 border-2 shadow-2xl shadow-purple-500 w-[400px] justify-center items-center px-8 py-4 mt-4 rounded-lg transition-shadow duration-300">
            <div className="mt-10">
              <label htmlFor="name" className="font-bold text-black">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-2 ml-2 bg-white/70 text-black rounded px-2 py-1"
              />
            </div>

            <div>
              <label htmlFor="email" className="font-bold text-black">
                Email:
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border-2 ml-2 bg-white/70 text-black rounded px-2 py-1"
              />
            </div>

            <div className="-ml-8">
              <label htmlFor="text" className="font-bold text-black">
                Phone no:
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border-2 ml-2 bg-white/70 text-black rounded px-2 py-1"
              />
            </div>

            <div className="-ml-10">
              <label htmlFor="message" className="font-bold text-black">
                Message:
              </label>
              <textarea
                placeholder="Enter your message"
                className="border-2 ml-2 -mb-4 bg-white/70 text-black rounded px-2 py-1"
              ></textarea>
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-3 mb-10"
            >
              <button className="font-bold border-2 bg-white/30 hover:bg-gradient-to-br from-blue-700 via-violet-700 to-fuchsia-700 bg-opacity-80 hover:text-white cursor-pointer rounded-xl hover:border-2 hover:border-black px-4 py-2 transition-all duration-300">
                Submit
              </button>
            </motion.div>
          </form>
        </motion.div>
      </main>
      <motion.div
        initial={{ opacity: 0,scale:0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-row mt-7 gap-5 justify-center items-center"
      >
        <div className="flex flex-row justify-center hover:scale-105 transition-all duration-300 ease-in-out gap-1 items-center">
          <img src="../assets/icons8-github-50.png" className="w-14 h-14" />
          <span className="text-white cursor-pointer">
            <a href="https://github.com/RohitChintalapudi" target="_main">
              Github
            </a>
          </span>
        </div>

        <div className="flex flex-row justify-center  hover:scale-105 transition-all duration-300 ease-in-out  gap-1 items-center">
          <img src="../assets/icons8-instagram-50.png" className="w-12 h-12" />
          <span className="text-white cursor-pointer">
            <a href="#" target="_main">
              Instagram
            </a>
          </span>
        </div>

        <div className="flex flex-row justify-center gap-1 hover:scale-105 transition-all duration-300 ease-in-out  items-center">
          <img src="../assets/icons8-linkedin-30.png" className="w-12 h-12" />
          <span className="text-white cursor-pointer">
            <a
              href="https://www.linkedin.com/in/rohit-chintalapudi-5454ba36a/"
              target="_main"
            >
              LinkedIn
            </a>
          </span>
        </div>
      </motion.div>
    </>
  );
}
