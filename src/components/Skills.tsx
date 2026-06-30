const Skills = () => (
  <section className="py-16 bg-gray-50" id="skills">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Technical Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Frontend */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Frontend</h3>

          <ul className="space-y-2 text-gray-700">
            <li>React</li>
            <li>Next.js</li>
            <li>TypeScript</li>
            <li>JavaScript (ES6+)</li>
            <li>Redux Toolkit</li>
            <li>React Native</li>
            <li>Material UI</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Backend & APIs</h3>

          <ul className="space-y-2 text-gray-700">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>GraphQL</li>
            <li>REST APIs</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Engineering */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Software Engineering</h3>

          <ul className="space-y-2 text-gray-700">
            <li>Component Architecture</li>
            <li>Application Modernization</li>
            <li>Performance Optimization</li>
            <li>Responsive Design</li>
            <li>Clean Code</li>
            <li>Code Reviews</li>
            <li>Agile (Scrum)</li>
          </ul>
        </div>

        {/* Cloud */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>

          <ul className="space-y-2 text-gray-700">
            <li>Microsoft Azure</li>
            <li>Git</li>
            <li>CI/CD</li>
            <li>
              Docker <span className="text-gray-400">(Learning)</span>
            </li>
            <li>
              GitHub Actions <span className="text-gray-400">(Learning)</span>
            </li>
            <li>
              Azure DevOps <span className="text-gray-400">(Learning)</span>
            </li>
          </ul>
        </div>

        {/* Tooling */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Tooling</h3>

          <ul className="space-y-2 text-gray-700">
            <li>Webpack</li>
            <li>Vite</li>
            <li>Gulp</li>
            <li>Postman</li>
            <li>Jira</li>
            <li>GitHub</li>
          </ul>
        </div>

        {/* AI */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">
            AI & Modern Development
          </h3>

          <ul className="space-y-2 text-gray-700">
            <li>Prompt Engineering</li>
            <li>
              OpenAI API <span className="text-gray-400">(Learning)</span>
            </li>
            <li>Retrieval-Augmented Generation (RAG)</li>
            <li>Vector Embeddings</li>
            <li>AI-assisted Development</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
