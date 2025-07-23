import { motion } from "framer-motion";

export default function Skills() {
  const skillIcons = [
    "src/assets/5847f5bdcef1014c0b5e489c.png",
    "src/assets/62b221ef038aad4d3ed7ca2e.png",
    "src/assets/613b64fe30e8530004ba3a03.png",
    "src/assets/62a74dd1223343fbc2207d00.png",
    "src/assets/62a754d4223343fbc2207d0b.png",
    "src/assets/62a6360f03a870b920cbfd41.png",
    "src/assets/62a75261223343fbc2207d09.png",
    "src/assets/629b7ab67c5cd817694c3230.png",
    "src/assets/a8cd2dd4499c1bba48709320bb50fb56.png",
    "src/assets/fc6f52ff1691fd7c40061f4d251bac76.png",
    "src/assets/icons8-tailwindcss-48.png"
  ];

  return (
    <main>
      <div className="flex flex-row items-center justify-center mt-30">
        <motion.p
          className="font-bold text-[27px] text-center px-4"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-500"
        >
          "Skills that power my passion"
        </motion.span> for building scalable, sleek, and 
        <motion.span
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 30 }}
          transition={{ duration: 0.5 }}
          className="bg-cyan-500"
        >
          "smart solutions"
        </motion.span>
        </motion.p>
      </div>

      <div className="flex flex-row items-center scale-115 mt-14 ml-[460px] flex-wrap w-[600px] gap-6 justify-center">
        {skillIcons.map((icon, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={icon} className="w-20 h-20 cursor-pointer hover:scale-120 transition-all duration-300 ease-in-out object-contain" alt={`Skill ${index}`} />
          </motion.div>
        ))}
      </div>
    </main>
  );
}

