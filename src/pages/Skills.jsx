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
    <main className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-row items-center justify-center -mt-10 sm:mt-16 lg:mt-20">
        <motion.p
          className="font-bold text-xl sm:text-2xl lg:text-[27px] text-center px-4 max-w-4xl"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-purple-500 px-1 py-0.5 rounded"
          >
            "Skills that power my passion"
          </motion.span>{" "}
          for building scalable, sleek, and{" "}
          <motion.span
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-cyan-500 px-1 py-0.5 rounded"
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
            <img
              src={icon}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out object-contain"
              alt={`Skill ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
