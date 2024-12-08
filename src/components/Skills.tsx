const Skills = () => (
  <section className="py-16 bg-gray-50" id="skills">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Technologies */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Technologies</h3>
          <ul className="text-gray-700 text-center">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Ruby</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS/SCSS</li>
          </ul>
        </div>

        {/* Libraries */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Libraries</h3>
          <ul className="text-gray-700 text-center">
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Redux</li>
            <li>Sequelize</li>
            <li>Mongoose</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Tools</h3>
          <ul className="text-gray-700 text-center">
            <li>Redux Toolkit</li>
            <li>Webpack</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>BitBucket</li>
            <li>Postman</li>
            <li>Jira</li>
            <li>VSCode</li>
          </ul>
        </div>

        {/* Databases */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Databases</h3>
          <ul className="text-gray-700 text-center mb-8">
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Operating Systems */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Operating Systems</h3>
          <ul className="text-gray-700 text-center">
            <li>Ubuntu</li>
            <li>Windows</li>
          </ul>
        </div>

        {/* Issue Tracking */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Issue Tracking</h3>
          <ul className="text-gray-700 text-center">
            <li>Jira</li>
            <li>Azure</li>
            <li>Confluence</li>
          </ul>
        </div>

        {/* Platforms/Frameworks */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Platforms/Frameworks</h3>
          <ul className="text-gray-700 text-center">
            <li>Node.js</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
);

export default Skills;
