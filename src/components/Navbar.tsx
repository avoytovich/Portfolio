import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-bold">My Portfolio</div>
      <div>
        <Link href="#about" className="px-4">About</Link>
        <Link href="#skills" className="px-4">Skills</Link>
        <Link href="#projects" className="px-4">Projects</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
