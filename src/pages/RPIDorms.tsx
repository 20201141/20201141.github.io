import { Mail, Github, Linkedin} from 'lucide-react';
import '../App.css'

export default function RPIDorms() {
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

      </section>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        &copy; Bomy Rhee | 이보미.<br></br>All rights reserved.
      </footer>
    </div>
  );
}