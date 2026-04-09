"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    title: "Backend + Full-Stack Thinking",
    desc: "I enjoy building scalable backend systems and full-stack applications that solve practical problems with clean architecture and strong engineering logic.",
  },
  {
    title: "AI + Real-World Solutions",
    desc: "I have worked on AI-powered systems like Antariksh Prahari using YOLOv8, Flask, OpenCV, and MongoDB for real-time detection and automated reporting.",
  },
  {
    title: "Industry Experience",
    desc: "Through internships at DRDO and BPTP, I gained hands-on exposure to monitoring systems, automation workflows, enterprise development, and performance optimization.",
  },
  {
    title: "Problem Solving Mindset",
    desc: "My approach combines DSA, OOP, database fundamentals, and structured thinking to design solutions that are efficient, reliable, and impactful.",
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 lg:px-20 overflow-hidden scroll-mt-24"
    >
      {/* ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-16 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute left-10 bottom-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -50, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />

          <div className="relative rounded-3xl border border-cyan-400/15 bg-[#111827]/85 backdrop-blur-xl p-8 md:p-10 shadow-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-cyan-400 text-sm tracking-[0.25em] uppercase mb-4"
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Turning
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}ideas into systems{" "}
              </span>
              that create impact
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.65 }}
              className="mt-6 text-gray-300 leading-8 text-base md:text-lg"
            >
              I am a Computer Science undergraduate passionate about backend
              engineering, full-stack development, and problem solving. I enjoy
              building solutions that are not only functional, but also scalable,
              efficient, and meaningful in real-world use.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.65 }}
              className="mt-5 text-gray-400 leading-8 text-base md:text-lg"
            >
              My experience spans MERN development, AI-powered applications,
              enterprise workflow automation, and secure system design. During
              my internships at DRDO and BPTP, I worked on monitoring systems,
              automation flows, and performance-focused development that improved
              operational efficiency and reduced manual effort.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.65 }}
              className="mt-5 text-gray-400 leading-8 text-base md:text-lg"
            >
              What drives me most is the chance to combine engineering with
              practical thinking to build systems that solve actual problems and
              deliver measurable value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.65 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "DRDO Project Intern",
                "BPTP Salesforce - Developer Intern",
                "MERN Stack",
                "Model Training & Evaluation (YOLOv8)",
                "DSA + OOP",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT GRID */}
        <div className="grid sm:grid-cols-2 gap-5">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl border border-gray-700 bg-[#1e293b]/80 backdrop-blur-md p-6 shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />

              <div className="relative">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 text-cyan-300 font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-7xl mx-auto mt-12 rounded-3xl border border-cyan-400/15 bg-[#0f172a]/80 backdrop-blur-xl p-6 md:p-8"
      >
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
            <p className="mt-2 text-gray-400">Industry Internships</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">AI + Full-Stack</h3>
            <p className="mt-2 text-gray-400">Strong hands-on project exposure</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">Top Finishes</h3>
            <p className="mt-2 text-gray-400">Hackathon-level competitive results</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}