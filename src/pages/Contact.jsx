import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <main className="flex flex-col justify-center items-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <legend className="font-bold text-xl sm:text-2xl text-center mb-6 text-black bg-purple-500 px-4 py-2 rounded-lg mx-auto w-fit">
            "Contact me"
          </legend>

          <form className="flex flex-col gap-6 sm:gap-8 border-2 shadow-2xl shadow-purple-500 w-full justify-center items-center px-4 sm:px-8 py-6 sm:py-8 rounded-lg transition-shadow duration-300">
            {/* Name Field */}
            <div className="w-full max-w-sm">
              <label htmlFor="name" className="block font-bold text-black mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border-2 bg-white/70 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Email Field */}
            <div className="w-full max-w-sm">
              <label
                htmlFor="email"
                className="block font-bold text-black mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-2 bg-white/70 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Phone Field */}
            <div className="w-full max-w-sm">
              <label
                htmlFor="phone"
                className="block font-bold text-black mb-2"
              >
                Phone no:
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full border-2 bg-white/70 text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Message Field */}
            <div className="w-full max-w-sm">
              <label
                htmlFor="message"
                className="block font-bold text-black mb-2"
              >
                Message:
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                rows="4"
                className="w-full border-2 bg-white/70 text-black rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2"
            >
              <button
                type="submit"
                className="font-bold border-2 bg-white/30 hover:bg-gradient-to-br from-blue-700 via-violet-700 to-fuchsia-700 bg-opacity-80 hover:text-white cursor-pointer rounded-xl hover:border-2 hover:border-black px-6 py-3 transition-all duration-300"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </motion.div>
      </main>

      {/* Social Media Links - Responsive Layout */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-12"
      >
        {/* Mobile: Horizontal Layout */}
        <div className="flex sm:hidden justify-center items-center gap-6 px-4">
          <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <img
              src="../assets/icons8-github-30.png"
              className="w-8 h-8 mb-1"
              alt="GitHub"
            />
            <span className="text-white text-xs cursor-pointer">
              <a
                href="https://github.com/RohitChintalapudi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </div>

          <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <img
              src="../assets/icons8-instagram-50.png"
              className="w-8 h-8 mb-1"
              alt="Instagram"
            />
            <span className="text-white text-xs cursor-pointer">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </span>
          </div>

          <div className="flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out">
            <img
              src="../assets/icons8-linkedin-30.png"
              className="w-8 h-8 mb-1"
              alt="LinkedIn"
            />
            <span className="text-white text-xs cursor-pointer">
              <a
                href="https://www.linkedin.com/in/rohit-chintalapudi-5454ba36a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden sm:flex flex-row justify-center items-center gap-5">
          <div className="flex flex-row justify-center hover:scale-105 transition-all duration-300 ease-in-out gap-1 items-center">
            <img
              src="../assets/icons8-github-30.png"
              className="w-12 h-12 lg:w-14 lg:h-14"
              alt="GitHub"
            />
            <span className="text-white cursor-pointer text-sm lg:text-base">
              <a
                href="https://github.com/RohitChintalapudi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </span>
          </div>

          <div className="flex flex-row justify-center hover:scale-105 transition-all duration-300 ease-in-out gap-1 items-center">
            <img
              src="../assets/icons8-instagram-50.png"
              className="w-10 h-10 lg:w-12 lg:h-12"
              alt="Instagram"
            />
            <span className="text-white cursor-pointer text-sm lg:text-base">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </span>
          </div>

          <div className="flex flex-row justify-center gap-1 hover:scale-105 transition-all duration-300 ease-in-out items-center">
            <img
              src="../assets/icons8-linkedin-30.png"
              className="w-10 h-10 lg:w-12 lg:h-12"
              alt="LinkedIn"
            />
            <span className="text-white cursor-pointer text-sm lg:text-base">
              <a
                href="https://www.linkedin.com/in/rohit-chintalapudi-5454ba36a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
