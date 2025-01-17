const About = () => (
  <section className="py-20 bg-gray-100" id="about">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
      <p className="text-gray-700 mb-6 text-center">
        I’m a React (front-end) developer developer with 6 years in the IT industry
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Address */}
        <div className="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2.25c4.97 0 9 3.867 9 8.625 0 6.75-9 13.125-9 13.125s-9-6.375-9-13.125c0-4.758 4.03-8.625 9-8.625z"
            />
          </svg>
          <p className="text-gray-700">
            <strong>Address:</strong> Krakow, Poland
          </p>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 5.25a4.5 4.5 0 0 1 6.364 0l.88.88c.885.884 1.957.728 2.482.297.526-.43 1.497-.933 2.475-.297l1.385.854c1.06.654 1.758 2.09 1.154 3.234l-.79 1.529c-.505.975-.238 2.095.379 2.716l.87.871a4.5 4.5 0 0 1 0 6.364l-1.09 1.09a3.6 3.6 0 0 1-5.09 0L8.5 15.82a5.852 5.852 0 0 1-1.184-.982l-3.63-3.63a5.852 5.852 0 0 1-.982-1.184L2.14 9.25a3.6 3.6 0 0 1 0-5.09l1.09-1.09z"
            />
          </svg>
          <p className="text-gray-700">
            <strong>Phone:</strong> +48 575 190 839
          </p>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 8.25l-9 6-9-6M21.75 8.25v7.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25v-7.5M21.75 8.25L12 2.25l-9 6"
            />
          </svg>
          <p className="text-gray-700">
            <strong>Email:</strong>{' '}
            <a href="mailto:levanwork@gmail.com" className="text-blue-500 hover:underline">
              levanwork@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Languages and Education combined in one row */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Languages */}
        <div>
          <h3 className="text-xl font-bold text-center mb-4">Languages</h3>
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <p className="text-gray-700">
                <strong>English:</strong> Upper-Intermediate
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <p className="text-gray-700">
                <strong>Polish:</strong> Pre-intermediate
              </p>
            </div>
            <div className="flex items-start space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <p className="text-gray-700">
                <strong>Ukrainian:</strong> Native
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-bold text-center mb-4">Education</h3>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-start space-x-4">
              <p className="text-gray-700">
                <strong>SOFTSERVE | IT ACADEMY:</strong> WebUI/NODE
              </p>
            </div>
            <ul className="text-gray-700 ml-6 list-disc">
              <li>Completed a course in development, design, and architecture of modern software systems based on object-oriented languages</li>
              <li>HTML 5 app development fundamentals</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
