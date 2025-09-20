import { motion } from "framer-motion";

export default function Skills() {
  const skillIcons = [
    "../assets/5847f5bdcef1014c0b5e489c.png",
    "../assets/62b221ef038aad4d3ed7ca2e.png",
    "../assets/613b64fe30e8530004ba3a03.png",
    "../assets/62a74dd1223343fbc2207d00.png",
    "../assets/62a754d4223343fbc2207d0b.png",
    "../assets/62a6360f03a870b920cbfd41.png",
    "../assets/62a75261223343fbc2207d09.png",
    "../assets/629b7ab67c5cd817694c3230.png",
    "../assets/a8cd2dd4499c1bba48709320bb50fb56.png",
    "../assets/fc6f52ff1691fd7c40061f4d251bac76.png",
    "../assets/icons8-tailwindcss-48.png",
  ];

  return (
    <main className="px-4 sm:px-6 lg:px-8 py-8 h-screen sm:min-h-screen sm:overflow-y-auto overflow-hidden bg-gradient-to-br from-black via-gray-900 to-yellow-900">
      {/* FIXED: Added proper top spacing for mobile navbar clearance */}
      <div className="flex flex-row items-center justify-center mt-16 sm:mt-16 lg:mt-20">
        <motion.p
          className="font-bold text-xl sm:text-2xl lg:text-[27px] text-center px-4 max-w-4xl text-white"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-yellow-500 text-black px-2 py-1 rounded font-bold"
          >
            "Skills that power my passion"
          </motion.span>{" "}
          for building scalable, sleek, and{" "}
          <motion.span
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-2 py-1 rounded font-bold"
          >
            "smart solutions"
          </motion.span>
        </motion.p>
      </div>

      {/* Skills Flex Container */}
      <div className="flex flex-wrap justify-center gap-6 mt-8 sm:mt-12 lg:mt-14 max-w-5xl mx-auto">
        {skillIcons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-yellow-400/30 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300">
              <img
                src={icon}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out object-contain filter brightness-110"
                alt={`Skill ${index + 1}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 left-16 w-20 h-20 bg-yellow-400/10 rounded-full blur-2xl"
          animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl"
          animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </main>
  );
}
