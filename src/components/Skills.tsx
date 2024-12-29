const Skills = () => (
  <section className="py-16 bg-gray-50" id="skills">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        
        {/* Technologies/Languages */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Technologies/<br />Languages:</h3>
          <ul className="text-gray-700 text-center">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>Ruby</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SASS/SCSS</li>
          </ul>
        </div>
        
        {/* Bundlers */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Bundlers:</h3>
          <ul className="text-gray-700 text-center">
            <li>Webpack</li>
          </ul>
          {/* Application/Web servers */}
          <div className="flex-1 min-w-[250px] mt-4">
            <h3 className="text-xl font-semibold mb-2 text-center">Application/<br />Web servers:</h3>
            <ul className="text-gray-700 text-center">
              <li>Express</li>
            </ul>
            {/*DB/ORM*/}
            <div className="flex-1 min-w-[250px] mt-4">
              <h3 className="text-xl font-semibold mb-2 text-center">DB/ORM:</h3>
              <ul className="text-gray-700 text-center mb-8">
                <li>PostgreSQL / Sequelize</li>
                <li>MongoDB / Mongoose</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Libraries */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Libraries/<br />Frameworks:</h3>
          <ul className="text-gray-700 text-center">
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>GraphQL</li>
            <li>Redux</li>
            <li>Material-UI</li>
          </ul>
        </div>

        {/*Code editors/Development tools/Issue tracking*/}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Code editors/<br />Development tools</h3>
          <ul className="text-gray-700 text-center">
            <li>VSCode</li>
            <li>WebStorm</li>
            <li>Postman</li>
          </ul>
        </div>

        {/* VCS */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">VCS:</h3>
          <ul className="text-gray-700 text-center">
            <li>Git</li>
            <li>GitHub</li>
            <li>BitBucket</li>
          </ul>
        </div>

        {/* Operating Systems */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold mb-2 text-center">Operating Systems</h3>
          <ul className="text-gray-700 text-center">
            <li>MacOS</li>
            <li>Linux(Ubuntu)</li>
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

      </div>
    </div>
  </section>
);

export default Skills;
