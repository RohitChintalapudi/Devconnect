import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const educationData = [
    {
      id: 1,
      title: "School",
      institution: "D A V Public School",
      years: "2010–2022",
      achievements: ["NCC Cadet", "94.33% in Class 10"],
      icon: "🏫",
    },
    {
      id: 2,
      title: "Intermediate",
      institution: "SR Junior College",
      years: "2022–2024",
      achievements: [
        "97.9% in Board",
        "96.46% in JEE Mains",
        "Rank 5,316 in AP EAMCET",
      ],
      icon: "🎓",
    },
    {
      id: 3,
      title: "College",
      institution: "SRM AP University",
      years: "2024–2028",
      achievements: ["9.56 CGPA (1st Year)", "Built multiple web apps"],
      icon: "🏛️",
    },
  ];

  // Animation variants for the cards
  const cardVariants = {
    initial: {
      scale: 1,
      rotateY: 0,
      boxShadow: "0 0 0px rgba(251, 191, 36, 0)",
    },
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(251, 191, 36, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
    active: {
      scale: 1.05,
      boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the front side
  const frontVariants = {
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      rotateY: -90,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for the back side
  const backVariants = {
    hidden: {
      opacity: 0,
      rotateY: 90,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };

  // Icon bounce animation
  const iconVariants = {
    initial: {
      y: 0,
      scale: 1,
    },
    animate: {
      y: [-5, 0, -5],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  // Achievement list animation
  const achievementVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-black via-gray-900 to-yellow-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-4xl font-bold mt-6 text-yellow-400"
          >
            About Me & My Education
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mt-6"
          >
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white">
              <b className="inline-block px-2 py-1 rounded text-black bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                Hi, I'm Rohit
              </b>
              , a passionate and creative{" "}
              <b className="inline-block px-2 py-1 rounded text-black bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-500">
                Full Stack Web Developer
              </b>
              . I love transforming ideas into reality using code, and I'm
              constantly{" "}learning new technologies to
              stay ahead in the fast-paced
              <b className="inline-block px-2 py-1 rounded text-black bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-500">
               world of web development.
              </b>
            </p>
          </motion.div>
        </div>

        {/* Timeline line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mb-16 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
        ></motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {educationData.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative perspective-1000"
              >
                <motion.div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onClick={() => toggleCard(item.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleCard(item.id);
                    }
                  }}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  animate={isActive ? "active" : "initial"}
                  className="relative border-2 rounded-2xl border-yellow-400/30 w-full bg-black/40 backdrop-blur-sm h-64 cursor-pointer group overflow-hidden transform-gpu"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front side */}
                  <AnimatePresence mode="wait">
                    {!isActive && (
                      <motion.div
                        key="front"
                        variants={frontVariants}
                        initial="visible"
                        exit="hidden"
                        className="absolute inset-0 flex items-center justify-center font-bold text-xl text-white p-8"
                      >
                        <div className="text-center">
                          <motion.div
                            variants={iconVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            className="text-4xl mb-3"
                          >
                            {item.icon}
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="text-yellow-400"
                          >
                            {item.title}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Back side (details) */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key="back"
                        variants={backVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black text-sm flex flex-col justify-center items-center text-center p-4 rounded-2xl"
                      >
                        <motion.h2
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="font-bold text-black text-lg mb-2"
                        >
                          {item.institution}
                        </motion.h2>

                        <motion.p
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3, duration: 0.3 }}
                          className="mb-3 text-gray-800"
                        >
                          <strong>Years:</strong> {item.years}
                        </motion.p>

                        <motion.ul className="list-disc font-bold text-left pl-4 space-y-1 text-gray-900">
                          {item.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              custom={i}
                              variants={achievementVariants}
                              initial="hidden"
                              animate="visible"
                            >
                              {achievement}
                            </motion.li>
                          ))}
                        </motion.ul>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.3 }}
                          className="mt-4 text-xs text-gray-700 font-medium"
                        >
                          Click again to flip back
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
