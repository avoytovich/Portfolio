const Companies = () => (
  <section className="py-20 bg-gray-100" id="projects">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Companies / Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {[
          {
            name: "EPAM / ORACLE HEALTH",
            description:
              "Contributed to the development of Oracle Health applications as part of a multidisciplinary team, consisting of 10 frontend developers, 2 backend developers, a manual QA tester, a Business Analyst (BA), and a Project Manager (PM). \n Participated in building scalable and user-friendly healthcare solutions, focusing on enhancing patient care, streamlining workflows, and improving system interoperability. \n Collaborated closely with cross-functional stakeholders to meet project goals and deliver high-quality software aligned with Oracle Health's standards.",
          },
          {
            name: "TRINETIX / DELOITTE",
            description:
              "Contributed to the development of an audit management application using TypeScript, React and a Microservices architecture, ensuring scalability and maintainability. \n Collaborated closely with a cross-functional team (6 FE developers, 2 BE developers, 3 QA testers, 1 BA, 1 PM) to deliver high-quality features and improvements.\nDeveloped and optimized reusable React components, improving code efficiency and maintainability across the project.\nParticipated in Agile ceremonies, including daily stand-ups, sprint planning, and retrospectives, to align development efforts with project goals.\nConducted code reviews, debugging, and performance optimizations, ensuring a robust and efficient application.\nWorked closely with QA testers to resolve bugs, improve test coverage, and ensure a high-quality user experience.",
          },
          {
            name: "CAPGEMINI / SMARTSKILLS",
            description:
              "Developed and maintained the SmartSkills application using React, JavaScript, Redux Toolkit, and Material-UI, ensuring a dynamic and responsive user interface.\n Designed and implemented efficient state management using Redux Toolkit, improving application performance and scalability. \n Built and optimized reusable UI components with Material-UI, ensuring a modern and accessible design. \n Collaborated with backend developers to integrate APIs, ensuring seamless data retrieval and updates. \n Worked in an Agile environment, actively contributing to sprint planning, stand-ups, and retrospectives to align with project goals. \n Enhanced application usability and accessibility, improving the overall user experience.",
          },
          {
            name: "SOFT-INNOVATION / NEXWAY",
            description:
              "Developed and maintained the Nexway application using React, JavaScript, Redux Toolkit, and Material-UI, ensuring a seamless and scalable user experience. \n Worked on a large-scale payment solution for E-commerce and Retail platforms, supporting Software & SaaS and Internet Security services. \n Implemented and improved state management using Redux Toolkit, optimizing data flow and application performance. \n Integrated and maintained key features for Global Payments, Subscription & Billing models, Reseller portals, and total E-commerce management. \n Collaborated closely with a team of 8 developers, participating in Agile development, sprint planning, and code reviews to ensure high-quality deliverables. \n Debugged and optimized existing functionalities, ensuring a stable and efficient payment processing experience for end-users.",
          },
          {
            name: "PROBEGIN / TIXXIO, WUNDERAGENT, KINGSMEN AGENCY",
            description:
              "<b>Tixxio</b>: Developed and maintained the Tixxio platform using React, React Native, JavaScript, and TypeScript, ensuring a seamless web and mobile experience. \n Built and optimized reusable components for cross-platform compatibility, improving maintainability and performance. \n Integrated APIs and managed state using React hooks and context, ensuring efficient data flow. \n Collaborated with designers and backend developers to deliver a responsive and user-friendly interface. \n Participated in code reviews, debugging, and optimizations, ensuring high code quality and performance. \n Worked in an Agile team, contributing to sprint planning, stand-ups, and retrospectives to meet project deadlines. \n <b>Wunderagent:</b> Developed and maintained features for Wunderagent using Ruby, JavaScript, CoffeeScript, and jQuery, enhancing the platform's functionality. \n Implemented UI components and interactive elements using jQuery and CoffeeScript, improving the overall user experience. \n Integrated backend services with frontend components, ensuring smooth API communication. \n Debugged and optimized legacy code, refactoring it for improved maintainability and performance. \n Worked closely with stakeholders to deliver enhancements based on user feedback and business requirements.",
          },
          {
            name: "KINDGEEK / MYPROFASHIONAL",
            description:
              "Contributed to the development of MyProfashional using React, Redux, Next.js, Sass, and JavaScript, ensuring a high-performance and responsive web application. \n Implemented Redux for efficient state management, optimizing data flow and improving user experience. \n Developed and styled reusable UI components using Sass, ensuring a modern and visually appealing design. \n Integrated frontend with backend APIs, ensuring seamless data retrieval and dynamic content updates. \n Participated in code reviews, debugging, and performance optimizations, maintaining a clean and maintainable codebase. \n Worked in an Agile environment, collaborating with designers, developers, and product managers to align with project goals. \n Enhanced application performance and accessibility, ensuring a smooth user experience across different devices.",
          },
          {
            name: "BOOST SOLUTIONS / COFFECOINS",
            description:
              "Developed and maintained the Coffeecoins application using Node.js, Express, Sequelize, and PostgreSQL, ensuring a scalable and efficient backend system. \n Designed and implemented RESTful APIs to manage transactions, user authentication, and data processing. \n Utilized Sequelize ORM for database interactions, optimizing queries and ensuring data consistency. \n Collaborated with frontend developers to integrate APIs, ensuring seamless communication between the backend and client-side applications. \n Participated in code reviews, debugging, and performance optimizations, improving system reliability and maintainability. \n Worked in an Agile environment, actively contributing to sprint planning, stand-ups, and retrospectives to align with project objectives. \n Ensured data security and implemented best practices for authentication and authorization.",
          },
        ].map((project, index) => (
          <div
            key={project.name}
            className={`p-6 bg-white rounded-lg shadow-md ${
              index === 0
                ? "bg-gradient-to-r from-blue-500 to-teal-400 text-white"
                : "bg-white"
            }`}
          >
            <h3
              className={`text-xl font-bold ${
                index === 0 ? "text-white" : "text-gray-900"
              } text-center mb-4`}
            >
              {project.name}
            </h3>
            <div
              className={`text-sm text-justify ${
                index === 0 ? "text-white" : "text-gray-700"
              }`}
            >
              {project.description.split("\n").map((line, i) => (
                <p
                  key={i}
                  style={{ textIndent: "2rem", whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: line }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Companies;
