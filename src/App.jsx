import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiDownload } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi"; // Added this icon
import "./App.css";
import React from "react";

function App() {
  const experiences = [
    {
      period: "2025 — PRESENT",
      title: "Mid-Level UI/UX Engineer",
      company: "Deerhold Nepal",
      description:
        "Leading design for US Healthcare projects, ensuring intuitive user interfaces and seamless UX. Specialized in data visualization with Highcharts to present complex healthcare data clearly while contributing to company-wide design systems.",
      technologies: ["Figma", "Highcharts", "Node.js", "UX Strategy"],
      link: "https://deerhold.com/",
    },
    {
      period: "2024 — 2025",
      title: "Associate UI/UX Engineer",
      company: "Deerhold Nepal",
      description:
        "Developed high-fidelity wireframes, iterative prototypes, and custom illustrations. Built dynamic e-commerce websites using React and Node.js, collaborating closely with clients to align requirements.",
      technologies: ["React", "Node.js", "Figma", "CSS"],
      link: "https://deerhold.com/",
    },
    {
      period: "2023 — 2024",
      title: "UI/UX Engineer Intern",
      company: "Deerhold Nepal",
      description:
        "Assisted in creating Figma designs and building interfaces using React.js. Applied core design principles to enhance usability across various internal and client-facing modules.",
      technologies: ["Figma", "React.js", "HTML", "CSS"],
      link: "https://deerhold.com/",
    },
    {
      period: "APR — JUN 2023",
      title: "Software Engineer Intern",
      company: "Leapfrog Technology Inc.",
      description:
        "Mastered JavaScript fundamentals and DOM manipulation. Developed logic-based projects like Flappy Bird and Candy Crush using vanilla JavaScript, focusing on clean code and event handling.",
      technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
      link: "https://www.lftechnology.com/",
    },
  ];

  const projects = [
    {
      title: "Enterprise Healthcare Data Systems",
      description:
        "Led the UX transformation of complex hospital datasets into actionable clinical dashboards. Conducted stakeholder requirement analysis to identify core KPIs, resulting in a 'signal-vs-noise' design strategy to reduce clinician cognitive load. Focused on WCAG accessibility and high-density data visualization using Highcharts.",
      tech: [
        "Information Architecture",
        "Stakeholder Analysis",
        "Highcharts",
        "UX Research",
      ],
      links: [],
    },
    {
      title: "Full-Stack Product Lifecycle & Deployment",
      description:
        "Solo development of end-to-end platforms from Figma wireframes to production-ready environments. These projects emphasize continuous user feedback loops and iterative design, ensuring that user flows remain intuitive and responsive across diverse business domains.",
      tech: [
        "Iterative Design",
        "React",
        "Solo Execution",
        "User Flow Optimization",
      ],
      links: [
        { name: "Boulder Admin", url: "https://boulderadmin.com" },
        { name: "All Services Houston", url: "https://allserviceshouston.com" },
      ],
    },
    {
      title: "User Analytics & Reporting Engine",
      description:
        "Designed an automated reporting module for high-volume data interpretation. I collaborated with stakeholders to translate technical requirements into user-centric reports, prioritizing visual hierarchy and strategic data-hiding to simplify complex tables for non-technical users.",
      tech: [
        "Visual Hierarchy",
        "Data Interpretation",
        "Stakeholder Management",
        "Figma",
      ],
      links: [],
    },
    {
      title: "Interaction Design Lab",
      description:
        "A deep-dive into the granular details of user feedback and state-driven animations. By engineering logic-heavy games without frameworks, I optimized input latency and mastered the interaction design principles that lead to seamless digital experiences.",
      tech: [
        "Interaction Design",
        "Vanilla JS",
        "DOM Logic",
        "State Management",
      ],
      links: [],
    },
  ];

  return (
    <div className="min-h-screen bg-navy text-slate-400 font-sans selection:bg-green/30 selection:text-green">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column: Fixed Header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                <a href="/">Yashaswee Sakha</a>
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                Product Designer | UI/UX Engineer
              </h2>

              <p className="mt-4 max-w-xs leading-normal text-slate-400">
                I build accessible, human-centered digital products that turn
                complex data into intuitive experiences.
              </p>

              <a
                href="/Resume.pdf"
                download="Yashaswee_Sakha_Resume.pdf"
                className="group mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-200 hover:text-green transition-all"
              >
                <HiDownload className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download CV
              </a>

              <nav className="nav hidden lg:block">
                <ul className="mt-16 w-max">
                  <li>
                    <a className="group flex items-center py-3" href="#about">
                      <span className="nav__text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav__text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                        My Works
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav__text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200">
                        Experience History
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center">
              <li className="mr-5">
                <a
                  className="hover:text-slate-200 transition-colors"
                  href="https://github.com/yashaswees/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5">
                <a
                  className="hover:text-slate-200 transition-colors"
                  href="https://www.linkedin.com/in/yashaswee-sakha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5">
                <a
                  className="hover:text-slate-200 transition-colors"
                  href="mailto:sakhayashaswee@gmail.com"
                >
                  <HiMail className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Column */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <section
              id="about"
              className="mb-16 scroll-mt-24 text-slate-400 leading-relaxed"
            >
              <p className="mb-4">
                I am a{" "}
                <span className="text-slate-200 font-medium">
                  UI/UX Engineer
                </span>{" "}
                dedicated to crafting digital experiences where polished
                aesthetics meet functional excellence. With a background
                spanning the full design-to-code lifecycle, I specialize in
                building{" "}
                <span className="text-slate-200">
                  accessible, scalable, and human-centric
                </span>{" "}
                interfaces.
              </p>
              <p>
                Currently, I focus on the{" "}
                <span className="text-slate-200">US Healthcare</span> sector,
                transforming complex clinical data into intuitive products that
                prioritize user clarity and accessibility standards.
              </p>
            </section>

            {/* My Works Section */}
            <section id="projects" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 whitespace-nowrap">
                  My Works
                </h2>
                <div className="h-px w-full bg-slate-700"></div>
              </div>

              <ul className="group/list">
                {projects.map((project, index) => (
                  <li key={index} className="mb-12">
                    <div className="group relative grid gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50"></div>
                      <div className="z-10">
                        <h3 className="font-medium text-slate-200">
                          {project.title}
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          {project.description}
                        </p>

                        {/* Render Links for Solo Projects */}
                        {project.links.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-4">
                            {project.links.map((link, i) => (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-green transition-colors group/link"
                              >
                                <span>{link.name}</span>
                                <FiExternalLink className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                              </a>
                            ))}
                          </div>
                        )}

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="items-center rounded-full bg-green/10 px-1 py-1 text-xs font-semibold leading-none tracking-wider text-green "
                              style={{
                                fontSize: "14px",
                                transform: "scale(0.75)",
                                transformOrigin: "left center",
                                marginRight: "-10px",
                              }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Full Experience History */}
            <section id="experience" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 whitespace-nowrap">
                  Experience History
                </h2>
                <div className="h-px w-full bg-slate-700"></div>
              </div>

              <ol className="group/list">
                {experiences.map((exp, index) => (
                  <li key={index} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        {exp.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          {exp.title} ·{" "}
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-green"
                          >
                            {exp.company}
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-slate-400">
                          {exp.description}
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech, i) => (
                            <li
                              key={i}
                              className="text-[10px] font-medium text-slate-300 bg-slate-800 px-2 py-0.5 rounded"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
