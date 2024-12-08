import Image from 'next/image';

const Hero = () => (
  <section
    className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white"
    id="hero"
  >
    <div className="text-center px-4 md:px-0">
      {/* Profile Photo */}
      <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
        <Image
          src="/avatar_v3.jpg" // Replace with your image path
          alt="Profile Picture"
          fill
          className="object-cover"
        />
      </div>
      {/* Hero Text */}
      <h1 className="text-4xl md:text-5xl font-bold">
        Hi, I’m <span className="text-blue-500">Andrii Voitovych</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        A <span className="text-blue-400">Front-end (React) developer</span> passionate about creating awesome web experiences.
      </p>
    </div>
  </section>
);

export default Hero;

