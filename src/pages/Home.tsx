import { Mail, Github, Linkedin} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import '../App.css'

export default function Home() {
  return (
    <div className="block">
      <header className="p-10 flex flex-row sticky top-0 h-64">
        {/* Left Section */}
        <div className="w-1/2 m-auto basis-1/2">
          <h1 className="text-7xl font-bold mb-6">Bomy Rhee</h1>
          <h2 className="text-lg max-w-2xl leading-relaxed text-gray-300">Frontend Developer • UX/UI • React | JS | HTML/CSS</h2>
          <p className="text-lg max-w-2xl leading-relaxed">Currently a Web Dev Freelancer</p>
        </div>
        {/* Right Section */}
        <div className="flex flex-row justify-between items-end m-auto h-full">
          {/* SNS Logo */}
          <div className="mt-2 space-x-4 flex flex-row">
            <a href="bomyrhee@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Mail">
              <Mail className="w-6 h-6 hover:text-yellow-400 transition" />
            </a>
            <a href="https://github.com/20201141" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6 hover:text-yellow-400 transition" />
            </a>
            <a href="https://www.linkedin.com/in/bomyrhee" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 hover:text-yellow-400 transition" />
            </a>
          </div>
        </div>
      </header>

      <section className="pt-10 pb-10 bg-white text-black text-center">
        <h3 className="text-3xl font-semibold mb-4">Projects</h3>
        <div className="mt-10 flex flex-col gap-10">
          {/* NSF */}
          <div className="w-[900px] mx-auto">
            <Link to="/" className="block border-4 border-indigo-300 rounded-lg p-4 transition duration-300 hover:shadow-md hover:border-indigo-400 text-black no-underline">
              <div className="flex justify-center">
                {/* Left: Title & website badge */}
                <div className="w-1/2 flex flex-col items-center">
                  <h4 className="text-xl font-bold mb-1 text-center">Not Stack Overflow</h4>
                  <span className="px-3 py-1 bg-indigo-400 text-black rounded-full text-sm font-medium shadow-sm">Website</span>
                </div>
                {/* Right: description & links */}
                <div className="w-[400px]">
                  <p>A forum website using React, TypeScript, and Node.js with tag filtering.</p>
                  <div className="flex justify-center mt-2">
                    <a href="https://github.com/20201141/NSF" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-6 h-6 hover:text-yellow-400 transition" />
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Red Pages */}
          <div className="w-[900px] mx-auto">
            <Link to="/" className="block border-4 border-indigo-300 rounded-lg p-4 transition duration-300 hover:shadow-md hover:border-indigo-400 text-black no-underline">
              <div className="flex justify-center">
                {/* Left: Title & website badge */}
                <div className="w-1/2 flex flex-col items-center">
                  <h4 className="text-xl font-bold mb-1 text-center">Red Pages</h4>
                  <span className="px-3 py-1 bg-indigo-400 text-black rounded-full text-sm font-medium shadow-sm">Website</span>
                </div>
                {/* Right: description & links */}
                <div className="w-[400px]">
                  <p>A RPI student dorms resource site built with PHP, JS, and MySQL.</p>
                  <div className="flex justify-center mt-2">
                    <a href="https://github.com/20201141/RedPages" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-6 h-6 hover:text-yellow-400 transition" />
                    </a>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* RPI Dorms */}
          <div className="w-[900px] mx-auto">
            <Link to="/" className="block border-4 border-indigo-300 rounded-lg p-4 transition duration-300 hover:shadow-md hover:border-indigo-400 text-black no-underline">
              <div className="flex justify-center">
                {/* Left: Title & website badge */}
                <div className="w-1/2 flex flex-col items-center">
                  <h4 className="text-xl font-bold mb-1 text-center">RPI Dorms</h4>
                  <span className="px-3 py-1 bg-indigo-400 text-black rounded-full text-sm font-medium shadow-sm">Website</span>
                </div>
                {/* Right: description & links */}
                <div className="w-[400px]">
                  <p>Dorm info website built with HTML, CSS, JS, and JSON data structure for static rendering.</p>
                  <div className="flex justify-center mt-2 gap-4">
                    <a href="https://github.com/20201141/RPIDorm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="w-6 h-6 hover:text-yellow-400 transition" />
                    </a>
                    <Link to="https://20201141.github.io/RPIDorm/index.html" className="inline-flex items-center gap-1 text-blue-600 hover:text-yellow-400 text-sm">
                      View Live <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        &copy; Bomy Rhee | 이보미.<br></br>All rights reserved.
      </footer>
    </div>
  );
}