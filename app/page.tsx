"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import ParticlesBackground from "./components/ParticlesBackground";
import AboutMe from "./components/AboutMe";
import Loader from "./components/Loader";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
export default function Home() {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const projects = [
    {
      title: "Antariksh Prahari – Space Guardian",
      description:
        "Full-stack AI web app for detecting Fire Extinguisher, Tool Boxes, and Oxygen Tanks using YOLOv8. Supports image upload and live camera input, with automated PDF/email reporting and a Flask-MongoDB dashboard for detection logs. Achieved mAP@0.5 of 0.912, accelerated analysis by 30%, and reduced manual review work by 45%.",
      github: "https://github.com/Saurabhvch12003/Antariksh-Prahari-Space-Guardian",
      image: "/projects/antariksh-prahari.jpg",
      tech: ["Python", "Flask", "YOLOv8", "MongoDB", "OpenCV"],
    },
    {
      title: "Advanced Regional Operations System (AROS)",
      description:
        "MERN-based command-and-control system with JWT security for real-time monitoring across 30+ zones. Built with modular architecture, interactive map support, and automated PDF reporting workflows. Improved operational decision-making by 35% and reduced data retrieval time by 40%.",
      github: "https://github.com/Saurabhvch12003/ADVANCE-REGIONAL-OPERATIONS-SYSTEM---AROS-",
      image: "/projects/aros.jpg",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Leaflet", "APIs"],
    },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setSending(true);
    setStatus("");

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setSending(false);
  };

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <main className="bg-[#0f172a] text-white min-h-screen scroll-smooth">
          <ParticlesBackground />

          <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0f172a]/70 border-b border-gray-800">
            <motion.div
              style={{ scaleX }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 origin-left"
            />

            <div className="flex justify-between items-center px-6 md:px-8 py-4">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setMenuOpen(false);
                }}
                className="group relative cursor-pointer"
              >
                <span className="absolute -inset-2 rounded-xl bg-cyan-400/10 blur-md opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="relative inline-block rounded-xl px-3 py-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition duration-300 group-hover:scale-105 group-active:scale-95">
                  Saurabh Singh
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-400/0 transition duration-300 group-hover:border-cyan-400/40" />
              </button>

              <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
                <li>
                  <a href="#home" className="hover:text-cyan-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cyan-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-cyan-400 transition">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-cyan-400 transition">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-cyan-400 transition">
                    Contact
                  </a>
                </li>
              </ul>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>

            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                  className="md:hidden px-6 pb-5"
                >
                  <div className="rounded-2xl border border-cyan-400/15 bg-[#111827]/95 backdrop-blur-xl shadow-xl overflow-hidden">
                    {[
                      { label: "Home", href: "#home" },
                      { label: "About", href: "#about" },
                      { label: "Skills", href: "#skills" },
                      { label: "Projects", href: "#projects" },
                      { label: "Contact", href: "#contact" },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block px-5 py-4 text-gray-300 border-b border-gray-800 last:border-b-0 hover:bg-cyan-400/10 hover:text-cyan-300 transition"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          <section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
>
  {/* Background glow */}
  <motion.div
    animate={{ y: [0, -40, 0] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute left-1/2 top-10 -translate-x-1/2 w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-[140px]"
  />

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full pt-24">
    {/* LEFT SIDE */}
    <div className="z-10 text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold leading-tight"
      >
        <motion.span
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-block text-white mr-4"
        >
          Hi, I&apos;m
        </motion.span>

        <span className="relative inline-block">
          <motion.span
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 blur-xl"
          />

          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.95, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
            className="relative inline-block bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent"
          >
            Saurabh Singh
          </motion.span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05 }}
        className="mt-6 text-xl text-gray-300"
      >
        Java Full-Stack Developer • Problem Solver • DSA Enthusiast
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2 }}
        className="mt-5 max-w-2xl text-gray-400 leading-8 text-base md:text-lg"
      >
        I build scalable software systems, full-stack applications, and impactful
        real-world solutions with a strong focus on performance, clean logic,
        and practical engineering.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        className="mt-10 flex flex-wrap justify-center md:justify-start gap-6"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-cyan-500 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          View Projects
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          className="px-8 py-3 border border-cyan-500 rounded-xl font-semibold hover:bg-cyan-500 transition"
        >
          Resume
        </a>
      </motion.div>

      
    </div>

    {/* RIGHT SIDE IMAGE */}
    <div className="relative flex justify-center md:justify-end z-10">
      {/* Extra glow behind image */}
      <div className="absolute w-[280px] md:w-[380px] h-[280px] md:h-[380px] rounded-full bg-cyan-400/20 blur-[80px]" />

      <motion.img
        src="/hero-astronaut.png"
        alt="Astronaut Developer"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[240px] md:w-[360px] drop-shadow-[0_0_45px_rgba(34,211,238,0.35)]"
      />
    </div>

    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 1.5 }}
  className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4"
>
  <a
    href="https://github.com/Saurabhvch12003"
    target="_blank"
    rel="noopener noreferrer"
    title="GitHub"
    aria-label="Visit my GitHub profile"
    className="group flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#111827]/80 text-cyan-300 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 active:scale-95"
  >
    <FaGithub size={20} className="transition duration-300 group-hover:scale-110" />
  </a>

  <a
    href="https://www.linkedin.com/in/saurabh-singh-vch12003"
    target="_blank"
    rel="noopener noreferrer"
    title="LinkedIn"
    aria-label="Visit my LinkedIn profile"
    className="group flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#111827]/80 text-cyan-300 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 active:scale-95"
  >
    <FaLinkedin size={20} className="transition duration-300 group-hover:scale-110" />
  </a>

  <a
    href="https://leetcode.com/Saurabh_12003"
    target="_blank"
    rel="noopener noreferrer"
    title="LeetCode"
    aria-label="Visit my LeetCode profile"
    className="group flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-[#111827]/80 text-cyan-300 backdrop-blur-xl shadow-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400/10 active:scale-95"
  >
    <FaCode size={18} className="transition duration-300 group-hover:scale-110" />
  </a>
</motion.div>
  </div>

  

  <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 z-10">
  ↓ Scroll
</div>
</section>  
          <AboutMe />

          <section
            id="skills"
            className="relative py-28 px-6 scroll-mt-24 overflow-hidden"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-20 top-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className="text-center"
              >
                <p className="text-cyan-400 text-sm tracking-[0.25em] uppercase mb-3">
                  My Skill Set
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Technologies I use to
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {" "}
                    build impactful systems
                  </span>
                </h2>
                <p className="mt-5 max-w-3xl mx-auto text-gray-400 leading-8 text-base md:text-lg">
                  My technical foundation is centered around software development,
                  full-stack engineering, problem solving, databases, and enterprise
                  tools. I enjoy building systems that are scalable, practical, and
                  efficient.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 mt-16">
                {[
                  {
                    title: "Programming & Problem Solving",
                    accent: "from-cyan-400 to-blue-500",
                    description:
                      "Strong fundamentals in object-oriented programming and data structures, with a focus on writing clean, logical, and scalable solutions.",
                    skills: ["Java", "JavaScript", "Core Java", "OOP", "DSA"],
                  },
                  {
                    title: "Web & Full-Stack Development",
                    accent: "from-blue-400 to-purple-500",
                    description:
                      "Comfortable building frontend and full-stack applications using modern JavaScript workflows, component-based UI design, and backend integrations.",
                    skills: ["React", "HTML", "CSS", "JavaScript", "SDLC"],
                  },
                  {
                    title: "Databases & Query Languages",
                    accent: "from-cyan-400 to-emerald-500",
                    description:
                      "Experienced with structured and NoSQL databases, along with query design for efficient storage, retrieval, and backend workflows.",
                    skills: ["Oracle SQL", "MySQL", "MongoDB", "SOQL"],
                  },
                  {
                    title: "Enterprise Tools & Workflow",
                    accent: "from-purple-400 to-cyan-500",
                    description:
                      "Hands-on exposure to enterprise platforms, development environments, version control, and collaborative engineering workflows.",
                    skills: [
                      "Apex",
                      "Salesforce",
                      "Git",
                      "GitHub",
                      "VS Code",
                      "Eclipse",
                    ],
                  },
                ].map((group, index) => (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="relative"
                  >
                    <div
                      className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-r ${group.accent} opacity-20 blur-xl`}
                    />
                    <div className="relative h-full rounded-3xl border border-gray-700 bg-[#111827]/85 backdrop-blur-xl p-8 shadow-xl">
                      <div
                        className={`inline-flex rounded-2xl px-4 py-2 text-sm font-medium bg-gradient-to-r ${group.accent} text-white`}
                      >
                        {group.title}
                      </div>

                      <p className="mt-5 text-gray-400 leading-7">
                        {group.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-3">
                        {group.skills.map((skill) => (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.08 }}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 shadow-sm"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-12 rounded-3xl border border-cyan-400/15 bg-[#0f172a]/80 backdrop-blur-xl p-6 md:p-8"
              >
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h3 className="text-3xl font-bold text-cyan-400">Backend</h3>
                    <p className="mt-2 text-gray-400">
                      Java, APIs, databases, secure system logic
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-cyan-400">Full-Stack</h3>
                    <p className="mt-2 text-gray-400">
                      React-driven interfaces connected to practical backend workflows
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-cyan-400">
                      Problem Solving
                    </h3>
                    <p className="mt-2 text-gray-400">
                      Strong DSA and OOP mindset for efficient engineering
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="projects" className="relative py-24 px-6 scroll-mt-24 overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-10 top-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute right-10 bottom-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
  </div>

  <div className="relative max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <p className="text-cyan-400 text-sm tracking-[0.25em] uppercase mb-3">
        Featured Work
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Projects that reflect my
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}engineering approach
        </span>
      </h2>

      <p className="mt-5 max-w-3xl mx-auto text-gray-400 leading-8 text-base md:text-lg">
        A curated showcase of projects focused on real-world impact, backend
        engineering, AI-based problem solving, and scalable application design.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: index * 0.12 }}
          whileHover={{ y: -10 }}
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            github={project.github}
            image={project.image}
            tech={project.tech}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

          <section
  id="contact"
  className="relative py-24 text-center px-6 scroll-mt-24 overflow-hidden"
>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute left-1/2 top-10 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
    <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-purple-500/10 blur-3xl" />
  </div>

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
    <motion.div
      initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="text-left"
    >
      <p className="text-cyan-400 text-sm tracking-[0.25em] uppercase mb-3">
        Contact Me
      </p>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Let&apos;s build something
        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {" "}meaningful together
        </span>
      </h2>

      <p className="mt-6 text-gray-400 leading-8 text-base md:text-lg">
        I’m always open to discussing internships, developer roles, project
        collaborations, and opportunities where I can contribute with backend,
        full-stack, or problem-solving skills.
      </p>

      <div className="mt-8 space-y-4">

      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative"
    >
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />

      <form
        onSubmit={handleSubmit}
        className="relative max-w-xl mx-auto flex flex-col gap-4 rounded-3xl border border-cyan-400/15 bg-[#111827]/85 backdrop-blur-xl p-8 shadow-2xl"
      >
        <motion.input
          whileFocus={{ scale: 1.01 }}
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="p-4 rounded-xl bg-[#1e293b] border border-gray-700 outline-none focus:border-cyan-400 transition"
        />

        <motion.input
          whileFocus={{ scale: 1.01 }}
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-xl bg-[#1e293b] border border-gray-700 outline-none focus:border-cyan-400 transition"
        />

        <motion.textarea
          whileFocus={{ scale: 1.01 }}
          name="message"
          placeholder="Your Message"
          rows={6}
          required
          className="p-4 rounded-xl bg-[#1e293b] border border-gray-700 outline-none focus:border-cyan-400 transition"
        />

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          disabled={sending}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 py-4 rounded-xl font-semibold shadow-lg disabled:opacity-50"
        >
          {sending ? "Sending..." : "Send Message"}
        </motion.button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="text-green-400 mt-2"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="text-red-400 mt-2"
            >
              ❌ Failed to send message.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </motion.div>
  </div>
</section>
          <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
            © {new Date().getFullYear()} Saurabh Singh. All rights reserved.
          </footer>
        </main>
      )}
    </>
  );
}