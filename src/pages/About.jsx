import React, { useState } from "react";
import { motion } from "framer-motion";

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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-yellow-400">
            About Me & My Education
          </h1>
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-white">
              <b className="inline-block px-2 py-1 rounded text-black bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600">
                Hi, I'm Rohit
              </b>
              , a passionate and creative{" "}
              <b className="inline-block px-2 py-1 rounded text-black bg-gradient-to-br from-yellow-500 via-yellow-600 to-amber-500">
                Frontend Web Developer
              </b>
              . I love transforming ideas into reality using code, and I'm
              constantly <b className="text-yellow-400">learning new technologies</b> to stay ahead in the
              fast-paced world of web development.
            </p>
          </div>
        </div>

        {/* Timeline line */}
        <div className="w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 mx-auto mb-16 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {educationData.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
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
                  className="relative border-2 rounded-2xl border-yellow-400/30 w-full bg-black/40 backdrop-blur-sm h-64 p-8 cursor-pointer group overflow-hidden hover:shadow-yellow-400 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  {/* Front side */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center font-bold text-xl text-white transition-opacity duration-500 ${
                      isActive
                        ? "opacity-0 pointer-events-none"
                        : "opacity-100 group-hover:opacity-0 pointer-events-auto"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div className="text-yellow-400">{item.title}</div>
                    </div>
                  </div>

                  {/* Back side (details) */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 text-black text-sm flex flex-col justify-center items-center text-center p-4 rounded-2xl ${
                      isActive
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 group-hover:opacity-100 pointer-events-none"
                    }`}
                  >
                    <h2 className="font-bold text-black text-lg mb-2">
                      {item.institution}
                    </h2>
                    <p className="mb-3 text-gray-800">
                      <strong>Years:</strong> {item.years}
                    </p>
                    <ul className="list-disc font-bold text-left pl-4 space-y-1 text-gray-900">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}