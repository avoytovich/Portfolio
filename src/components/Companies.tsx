const Companies = () => (
  <section className="py-20 bg-gray-100" id="projects">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Companies / Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'TRINETIX / DELOITTE', description: 'Contributed to the development of audits application using React, TypeScript. Members of team (6 FE dev, 2 BE dev, 3 QA tester, 1 BA, 1 PM).' },
          { name: 'CAPGEMINI / SMARTSKILLS', description: 'Contributed to the development of SmartSkills application using React, JavaScript, Redux, Toolkit and Material-UI' },
          { name: 'SOFT-INNOVATION / NEXWAY', description: 'Developed and maintained Nexway application using React, JavaScript, Redux, Toolkit and Material-UI. Worked on a large-scale payment solution used by E-commerce and Retail platforms that supports Software & SaaS and Internet Security.' },
          { name: 'PROBEGIN / TIXXIO, WUNDERAGENT, KINGSMEN AGENCY', description: 'Worked on Tixxio project using React, React Native, JavaScript, and TypeScript. Developed Wunderagent using Ruby, JavaScript, CoffeeScript, and jQuery.' },
          { name: 'KINDGEEK / MYPROFASHIONAL', description: 'Contributed to the development of MyProfashional using React, Redux, Next, Sass and JavaScript' },
          { name: 'BOOST SOLUTIONS / COFFECOINS', description: 'Worked on Coffeecoins application using Node, Express, Sequelize, and Postgres' },
        ].map((project, index) => (
          <div key={project.name} className={`p-6 bg-white rounded-lg shadow-md ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white' : 'bg-white'}`}>
            <h3 className={`text-xl font-bold ${index === 0 ? 'text-white' : 'text-gray-900'} text-center mb-4`}>{project.name}</h3>
            <p className={`text-sm ${index === 0 ? 'text-white' : 'text-gray-700'}`} style={{ textIndent: '1rem' }}>
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Companies;
