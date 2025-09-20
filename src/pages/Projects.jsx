import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cric-Play",
      image: "../assets/img1.png",
      link: "https://github.com/RohitChintalapudi/Cric-Play",
      delay: 0.2,
    },
    {
      id: 2,
      title: "Word Assemble Game",
      image: "../assets/img4.png",
      link: "https://github.com/RohitChintalapudi/Word-Assemble-game",
      delay: 0.4,
    },
    {
      id: 3,
      title: "Weather App",
      image: "../assets/img2.png",
      link: "https://github.com/RohitChintalapudi/weather-app/tree/master",
      delay: 0.6,
    },
  ];

  return (
    <main className="px-4 -mt-15 sm:px-6 lg:px-8 py-8">
      {/* Main Title */}
      <motion.p
        className="font-bold text-2xl sm:text-3xl lg:text-[27px] text-center mt-4 sm:mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.p>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <p className="font-bold text-center text-base sm:text-lg lg:text-[20px] mt-6 sm:mt-10 px-2">
          "Crafted using{" "}
          <span className="bg-cyan-400 px-1 py-0.5 rounded">
            "HTML, CSS, JavaScript, React JS, and Tailwind CSS"
          </span>{" "}
          — each project reflects{" "}
          <span className="bg-purple-500 px-1 py-0.5 rounded text-white">
            "clean design and usability"
          </span>
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-12 sm:mt-16 lg:mt-20 max-w-7xl mx-auto">
        {/* Mobile: Single Column */}
        <div className="flex flex-col gap-8 sm:hidden">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  className="w-full max-w-sm rounded-xl drop-shadow-2xl border-2 hover:shadow-2xl transition-shadow duration-300"
                  alt={project.title}
                />
              </a>
              <p className="font-bold text-center text-lg mt-4">
                {project.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2 Columns */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-8 justify-items-center">
          {projects.slice(0, 2).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center max-w-sm"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  className="w-full rounded-xl drop-shadow-2xl border-2 hover:shadow-2xl transition-shadow duration-300"
                  alt={project.title}
                />
              </a>
              <p className="font-bold text-center text-lg mt-4">
                {project.title}
              </p>
            </motion.div>
          ))}
          {/* Third project centered below */}
          <div className="col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: projects[2].delay }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center max-w-sm"
            >
              <a
                href={projects[2].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={projects[2].image}
                  className="w-full rounded-xl drop-shadow-2xl border-2 hover:shadow-2xl transition-shadow duration-300"
                  alt={projects[2].title}
                />
              </a>
              <p className="font-bold text-center text-lg mt-4">
                {projects[2].title}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Desktop: 3 Columns */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.delay }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center max-w-sm lg:max-w-none"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  className="w-full lg:w-[400px] rounded-xl drop-shadow-2xl border-2 hover:shadow-2xl transition-shadow duration-300"
                  alt={project.title}
                />
              </a>
              <p className="font-bold text-center text-lg lg:text-[18px] mt-4 lg:mt-5">
                {project.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 sm:mt-12 lg:mt-10"
      >
        <p className="font-bold text-sm sm:text-base lg:text-[17px] text-center px-4">
          Click on the project to{" "}
          <span className="bg-cyan-500 px-1 py-0.5 rounded">
            get source code!
          </span>
        </p>
      </motion.div>
    </main>
  );
}
