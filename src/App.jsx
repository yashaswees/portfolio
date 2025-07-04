import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import "./App.css";

function App() {
  const experiences = [
    {
      period: "2025 — PRESENT",
      title: "Mid-Level UI/UX Engineer",
      company: "Deerhold Nepal",
      description:
        "Actively involved in Figma design for a US Healthcare project, ensuring intuitive user interfaces and seamless user experience. Involved in data visualization for a US healthcare product, utilizing Highcharts to select the most effective graphs and present complex data clearly. Actively involved in company-wide design decisions, offering insights for design revamps and continuously improving the overall user experience across projects.",
      technologies: ["Figma", "Highcharts", "Illustrator", "Node.js"],
      link: "https://deerhold.com/",
    },
    {
      period: "2024 — 2025",
      title: "Associate UI/UX Engineer",
      company: "Deerhold Nepal",
      description:
        "Created user interfaces in Figma, ensuring intuitive design and responsiveness. Developed high-fidelity wireframes, iterative prototypes, custom illustrations, and design assets. Built e-commerce dynamic websites using React and Node JS & CSS framework. Collaborated with clients to align requirements and deliver design solutions.",
      technologies: ["Figma", "React", "Node.js", "CSS", "Illustrator"],
      link: "https://deerhold.com/",
    },
    {
      period: "2023 — 2024",
      title: "UI/UX Engineer Intern",
      company: "Deerhold Nepal",
      description:
        "Assisted in creating Figma designs, developing illustrations, and building user interfaces using frontend technologies. Gained hands-on experience with React.js, HTML, and CSS while applying design principles to enhance usability and aesthetics.",
      technologies: ["Figma", "React", "HTML", "CSS", "Illustrator"],
      link: "https://deerhold.com/",
    },
    {
      period: "APR — JUN 2023",
      title: "Software Engineer Intern",
      company: "Leapfrog Technology Inc.",
      description:
        "Learned the fundamentals of HTML, CSS, and JavaScript. Developed solo projects like Flappy Bird and Candy Crush using vanilla JavaScript (without frameworks). Gained hands-on experience in DOM manipulation, event handling, and game logic implementation.",
      technologies: ["JavaScript", "HTML", "CSS", "Game Development"],
      link: "https://www.lftechnology.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-navy text-slate-300 font-sans">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-10 md:py-4 lg:px-10 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-8">
          {/* Left Column - Fixed Sidebar */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold text-green sm:text-5xl">
                Yashaswee Sakha
              </h1>
              <h2 className="mt-3 text-lg font-medium text-light-slate sm:text-xl">
                Product Designer | Frontend Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                I build accessible, pixel-perfect digital experiences that blend
                thoughtful design with robust engineering.
              </p>
              <a
                href="../Resume.pdf"
                download
                className="flex gap-2 items-center"
              >
                <HiDownload />
                Download CV
              </a>

              {/* Navigation */}
              <nav className="nav hidden lg:block">
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      className="nav__link group flex items-center py-3"
                      href="#about"
                    >
                      <span className="nav__text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-green">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav__link group flex items-center py-3"
                      href="#experience"
                    >
                      <span className="nav__text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-green">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav__link group flex items-center py-3"
                      href="#projects"
                    >
                      <span className="nav__text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-green">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Social Links */}
            <ul className="ml-1 mt-8 flex items-center">
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-green transition-colors"
                  href="https://github.com/yashaswees/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-green transition-colors"
                  href="https://www.linkedin.com/in/yashaswee-sakha/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </li>
              <li className="mr-5 text-xs">
                <a
                  className="block hover:text-green transition-colors"
                  href="mailto:sakhayashaswee@gmail.com"
                  aria-label="Email"
                >
                  <HiMail className="h-6 w-6" />
                </a>
              </li>
            </ul>
          </header>

          {/* Right Column - Main Content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About Section */}
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              <div>
                <p className="mb-4">
                  I'm a designer and developer passionate about crafting
                  accessible, pixel-perfect user interfaces that blend
                  thoughtful design with robust engineering. My favorite work
                  lies at the intersection of design and development, creating
                  experiences that not only look great but are meticulously
                  built for performance and usability.
                </p>
                <p className="mb-4">
                  Currently, I'm a Mid-Level UI/UX Engineer at{" "}
                  <span className="font-semibold  text-white  ">
                    Deerhold Nepal
                  </span>
                  , specializing in healthcare product design. I contribute to
                  the creation and maintenance of UI components for US
                  healthcare projects, ensuring our platform meets accessibility
                  standards and delivers an inclusive user experience.
                </p>
                <p className="mb-4">
                  In the past, I've had the opportunity to develop software
                  across a variety of settings — from{" "}
                  <span className="font-medium text-light-slate">
                    healthcare startups
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-light-slate">
                    technology companies
                  </span>{" "}
                  to{" "}
                  <span className="font-medium text-light-slate">
                    e-commerce platforms
                  </span>
                  . I've built everything from interactive game projects to
                  comprehensive design systems.
                </p>
                <p>
                  When I'm not designing or coding, I enjoy exploring new design
                  trends, playing games, and continuously learning about
                  emerging technologies in the design and development space.
                </p>
              </div>
            </section>
            <p className=" text-lg font-medium mb-0">EXPERIENCES</p>
            <hr className="border-t my-2 rounded " />
            {/* Experience Section */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  {experiences.map((exp, index) => (
                    <li key={index} className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                          {exp.period}
                        </header>

                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-light-slate">
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-light-slate hover:text-green focus-visible:text-green group/link text-base"
                              rel="noreferrer"
                              href={exp.link}
                              target="_blank"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {exp.title} ·{" "}
                                <span className="inline-block">
                                  {exp.company}
                                  {/* <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" /> */}
                                </span>
                              </span>
                            </a>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">
                            {exp.description}
                          </p>
                          <ul className="mt-2 flex flex-wrap">
                            {exp.technologies.map((tech, techIndex) => (
                              <li key={techIndex} className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-green/10 px-3 py-1 text-xs font-medium leading-5 text-green">
                                  {tech}
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>

                {/* <div className="mt-12">
                  <a
                    className="inline-flex items-center font-medium leading-tight text-light-slate group"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <span className="border-b border-transparent pb-px transition-colors group-hover:border-green">
                        View Full
                      </span>
                      <span className="whitespace-nowrap">
                        <span className="border-b border-transparent pb-px transition-colors group-hover:border-green">
                          {" "}
                          Résumé
                        </span>
                        <FiExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 translate-y-px" />
                      </span>
                    </span>
                  </a>
                </div> */}
              </div>
            </section>

            {/* Projects Section */}
            <p className="text-lg font-medium mb-0">PROJECTS</p>
            <hr className="border-t my-2 rounded " />
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-navy/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  {/* Healthcare Dashboard Project */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                      <div className="z-10 sm:order-2 sm:col-span-8">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-light-slate hover:text-green focus-visible:text-green group/link text-base"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Healthcare Dashboard Design
                              {/* <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" /> */}
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Designed and developed a comprehensive healthcare
                          dashboard for US clients, featuring intuitive data
                          visualization using Highcharts and responsive design
                          principles. The project focused on accessibility and
                          user experience for medical professionals.
                        </p>

                        <ul className="mt-2 flex flex-wrap">
                          {[
                            "Figma",
                            "UX Design",
                            "User centered design",
                            "US Healthcare",
                          ].map((tech, index) => (
                            <li
                              key={index}
                              className="mr-1.5 mt-2 inline-flex items-center  px-1 py-1 text-xs "
                            >
                              <div className="text-green">{tech}</div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* <img
                        alt="Healthcare Dashboard"
                        loading="lazy"
                        width="200"
                        height="120"
                        className="rounded border-2 border-slate-200/10 transition-colors group-hover:border-green/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src="https://via.placeholder.com/200x120/334155/64748b?text=Healthcare+Dashboard"
                      /> */}
                    </div>
                  </li>

                  {/* E-commerce Platform Project */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                      <div className="z-10 sm:order-2 sm:col-span-8">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-light-slate hover:text-green focus-visible:text-green group/link text-base"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              E-commerce Platform
                              {/* <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" /> */}
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Built dynamic e-commerce websites using React and
                          Node.js with a focus on responsive design and user
                          experience. Collaborated with clients to deliver
                          custom solutions that met their specific business
                          requirements.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {[
                            "React",
                            "Node.js",
                            "CSS",
                            "JavaScript",
                            "MongoDB",
                          ].map((tech, index) => (
                            <li
                              key={index}
                              className="mr-1.5 mt-2 inline-flex items-center  px-1 py-1 text-xs "
                            >
                              <div className="text-green">{tech}</div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* <img
                        alt="E-commerce Platform"
                        loading="lazy"
                        width="200"
                        height="120"
                        className="rounded border-2 border-slate-200/10 transition-colors group-hover:border-green/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src="https://via.placeholder.com/200x120/334155/64748b?text=E-commerce+Platform"
                      /> */}
                    </div>
                  </li>

                  {/* JavaScript Games Project */}
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-all lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                      <div className="z-10 sm:order-2 sm:col-span-8">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-light-slate hover:text-green focus-visible:text-green group/link text-base"
                            rel="noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              JavaScript Games Collection
                              {/* <FiExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" /> */}
                            </span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Developed classic games including Flappy Bird and
                          Candy Crush using vanilla JavaScript. Gained hands-on
                          experience in DOM manipulation, event handling, and
                          game logic implementation without using any
                          frameworks.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          {[
                            "JavaScript",
                            "HTML",
                            "CSS",
                            "Canvas API",
                            "Game Logic",
                          ].map((tech, index) => (
                            <li
                              key={index}
                              className="mr-1.5 mt-2 inline-flex items-center  px-1 py-1 text-xs "
                            >
                              <div className="text-green">{tech}</div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* <img
                        alt="JavaScript Games"
                        loading="lazy"
                        width="200"
                        height="120"
                        className="rounded border-2 border-slate-200/10 transition-colors group-hover:border-green/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src="https://via.placeholder.com/200x120/334155/64748b?text=JavaScript+Games"
                      /> */}
                    </div>
                  </li>
                </ul>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
