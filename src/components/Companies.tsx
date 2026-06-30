const projects = [
  {
    title: "Healthcare Platform",
    company: "Oracle Health • EPAM Systems",
    category: "Enterprise Healthcare",

    summary:
      "Contributed to the modernization of a large-scale enterprise healthcare platform by rebuilding legacy frontend functionality and improving the development workflow. Participated in migrating a custom rich-text editor from CKEditor 4 to CKEditor 5 while maintaining compatibility with a Java-based enterprise application.",

    technologies: [
      "JavaScript",
      "CKEditor 4",
      "CKEditor 5",
      "Gulp",
      "Docker",
      "Git",
    ],
  },

  {
    title: "Enterprise Audit Platform",
    company: "Deloitte • Trinetix",
    category: "Enterprise Consulting",

    summary:
      "Developed enterprise audit solutions supporting business workflows for Deloitte. Built scalable frontend features using React and TypeScript while collaborating with cross-functional Agile teams to deliver reliable, maintainable software.",

    technologies: ["React", "TypeScript", "Context API", "Git"],
  },

  {
    title: "SmartSkills",
    company: "Capgemini",
    category: "Learning Platform",

    summary:
      "Developed and maintained a modern learning platform focused on responsive user experiences and scalable frontend architecture. Built reusable React components and improved application maintainability through modern state management.",

    technologies: ["React", "TypeScript", "Redux Toolkit", "Git"],
  },

  {
    title: "Global Commerce Platform",
    company: "Nexway • Software Service & Innovation",
    category: "SaaS & Digital Commerce",

    summary:
      "Contributed to a global SaaS commerce platform supporting subscription billing, digital payments, and reseller management. Developed scalable frontend functionality and reusable components for enterprise e-commerce solutions.",

    technologies: ["React", "JavaScript", "Redux Thunk", "Material UI"],
  },

  {
    title: "Ticketing Platform",
    company: "Tixxio • Probegin",
    category: "Web & Mobile",

    summary:
      "Developed responsive web and mobile applications using React and React Native. Built reusable frontend components and integrated backend services to deliver seamless cross-platform user experiences.",

    technologies: ["React", "React Native", "TypeScript"],
  },

  {
    title: "Real Estate Platform",
    company: "Wunderagent • Probegin",
    category: "Property Technology",

    summary:
      "Maintained and enhanced a Ruby-based platform by implementing new features, improving frontend functionality, and modernizing legacy application components.",

    technologies: ["Ruby", "JavaScript", "jQuery"],
  },

  {
    title: "Business Platform",
    company: "Kingsmen • Probegin",
    category: "Business Solutions",

    summary:
      "Developed React-based frontend functionality using Redux while collaborating with designers and backend engineers to deliver scalable business applications.",

    technologies: ["React", "Redux", "JavaScript"],
  },

  {
    title: "Professional Networking Platform",
    company: "KindGeek",
    category: "Social Platform",

    summary:
      "Developed responsive web applications using React, Next.js, and Redux with a strong focus on reusable components, performance optimization, and modern user interfaces.",

    technologies: ["React", "Next.js", "Redux"],
  },

  {
    title: "Backend Payment Service",
    company: "Boost Solutions",
    category: "Backend Development",

    summary:
      "Developed backend services and REST APIs using Node.js, Express, and PostgreSQL. Built scalable server-side functionality supporting secure business operations and efficient data management.",

    technologies: ["Node.js", "Express", "PostgreSQL", "Sequelize"],
  },
];

const Companies = () => (
  <section className="py-20 bg-gray-100" id="projects">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">
        Enterprise Projects
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
        Throughout my career, I&apos;ve contributed to enterprise software
        across healthcare, consulting, SaaS, e-commerce, education, and fintech,
        building scalable web applications for international clients using
        modern JavaScript technologies.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8"
          >
            <span className="inline-block text-sm font-medium text-blue-600 bg-blue-100 rounded-full px-3 py-1 mb-4">
              {project.category}
            </span>

            <h3 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h3>

            <p className="text-gray-500 mt-1">{project.company}</p>

            <p className="mt-6 text-gray-700 leading-7">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mt-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Companies;
