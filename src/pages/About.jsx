import { motion } from "framer-motion";

export default function About() {
  const educationData = [
    {
      id: 1,
      title: "School",
      institution: "D A V Public School",
      years: "2010–2022",
      achievements: ["NCC Cadet", "94.33% in Class 10"],
      icon: "🏫",
      gradient: "from-blue-500 via-violet-700 to-fuchsia-700",
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
      gradient: "from-purple-500 via-pink-600 to-red-500",
    },
    {
      id: 3,
      title: "College",
      institution: "SRM AP University",
      years: "2024–2028",
      achievements: ["9.56 CGPA (1st Year)", "Built multiple web apps"],
      icon: "🏛️",
      gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-4 sm:px-6 -mt-10 lg:px-8 py-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About Me & My Education
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
              <b className="bg-cyan-400 px-2 py-1 rounded">Hi, I'm Rohit</b>, a
              passionate and creative{" "}
              <b className="bg-purple-500 px-2 py-1 rounded text-white">
                Frontend Web Developer
              </b>
              . I love transforming ideas into reality using code, and I'm
              constantly
              <b> learning new technologies</b> to stay ahead in the fast-paced
              world of web development. Whether it's{" "}
              <b className="bg-cyan-400 px-2 py-1 rounded">
                creating clean UI, optimizing user experiences
              </b>
              , or solving challenging coding problems—I{" "}
              <b className="bg-purple-500 px-2 py-1 rounded text-white">
                enjoy every bit of the process.
              </b>
            </p>
          </div>
        </div>
        <div className="w-32 sm:w-48 lg:w-64 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mb-16 rounded-full"></div>

        <div className="space-y-8">
          <div className="hidden lg:flex justify-center items-center gap-20 mb-8">
            {educationData.map((item, index) => (
              <div key={item.id} className="text-center relative">
                {index < educationData.length - 1 && (
                  <div className="absolute top-4 left-full w-20 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-400"></div>
                )}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 rounded-full text-white font-bold text-lg shadow-lg">
                  {item.years}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="lg:hidden mb-4 text-center">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-500 px-4 py-2 rounded-full text-white font-bold shadow-lg">
                    {item.years}
                  </span>
                </div>

                <div className="relative border-2 rounded-2xl border-black/20 w-full bg-white/20 h-64 p-8 group overflow-hidden hover:shadow-black hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-xl group-hover:opacity-0 transition-opacity duration-500">
                    <div className="text-center">
                      <div className="text-4xl mb-3">{item.icon}</div>
                      <div>{item.title}</div>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-tl from-0% from-purple-600 to-100% to-blue-600 text-white text-sm flex flex-col justify-center items-center text-center p-4 rounded-2xl`}
                  >
                    <h2 className="font-bold text-black text-lg mb-2">
                      {item.institution}
                    </h2>
                    <p className="mb-3">
                      <strong>Years:</strong> {item.years}
                    </p>
                    <ul className="list-disc font-bold text-left pl-4 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
