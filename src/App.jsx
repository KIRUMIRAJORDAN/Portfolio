import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import { projects } from './data/projects.js';
import heroImage from './assets/me.jpeg'; // Updated to point directly to your accurate asset configuration

function MainConsole() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [latency, setLatency] = useState(14);
  const [uptime, setUptime] = useState(99.982);

  // Live Metric Stream Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * (16 - 11 + 1)) + 11);
      setUptime(prev => Math.min(99.999, prev + 0.0001));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filterCategories = ['ALL', 'NETWORKING & INFRASTRUCTURE', 'FULL-STACK DEVELOPMENT', '3D CAD MODELING'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(project => project.category.toUpperCase() === activeFilter);

  const skillMatrix = [
    {
      domain: "Infrastructure & Routing",
      skills: ["Cisco IOS Configuration", "VLAN Segmentation", "Layer 3 Inter-VLAN Routing", "T568B Physical Cable Termination", "Patch Panel Deployment"]
    },
    {
      domain: "Full-Stack Development",
      skills: ["React.js (Hooks & Context)", "Node.js RESTful APIs", "Express Middleware Architecture", "SQL Database Schema Normalization", "JWT Authentication Securing"]
    },
    {
      domain: "Mechanical Design & Tools",
      skills: ["SolidWorks Digital Twins", "Mechanical Design Intent", "3D Printing Prototyping", "Git/GitHub Version Control", "Tailwind CSS Processing"]
    }
  ];

  return (
    <div className="space-y-24 animate-[fadeIn_0.5s_ease-out]">
      
      {/* ================= LIVE SYSTEM METRICS MONITOR ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-900/30 border border-slate-800/80 rounded-2xl backdrop-blur-md font-mono text-xs shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-indigo-500/5 opacity-40"></div>
        
        <div className="flex items-center gap-3 border-r border-slate-800/60 pr-2 relative z-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <div>
            <div className="text-slate-500 text-[9px] uppercase tracking-widest font-bold">CORE_GATEWAY</div>
            <div className="text-emerald-400 font-bold mt-0.5 tracking-wide">SECURE_ONLINE</div>
          </div>
        </div>

        <div className="flex items-center gap-3 md:border-r border-slate-800/60 pr-2 relative z-10">
          <div className="text-blue-500 font-bold text-sm">⚡</div>
          <div>
            <div className="text-slate-500 text-[9px] uppercase tracking-widest font-bold">NET_LATENCY</div>
            <div className="text-blue-400 font-bold mt-0.5 tracking-wide">{latency}ms <span className="text-[8px] text-slate-600 font-normal">(STREAM)</span></div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-r border-slate-800/60 pr-2 pt-2 md:pt-0 relative z-10">
          <div className="text-indigo-500 font-bold text-sm">⚙️</div>
          <div>
            <div className="text-slate-500 text-[9px] uppercase tracking-widest font-bold">SYS_UPTIME</div>
            <div className="text-slate-300 font-bold mt-0.5 tracking-wide">{uptime.toFixed(3)}%</div>
          </div>
        </div>

        <div className="flex items-center gap-3 pr-2 pt-2 md:pt-0 relative z-10">
          <div className="text-purple-500 font-bold text-sm">🛡️</div>
          <div>
            <div className="text-slate-500 text-[9px] uppercase tracking-widest font-bold">SSL_TUNNEL</div>
            <div className="text-purple-400 font-bold mt-0.5 tracking-wide">AES_256_ACTIVE</div>
          </div>
        </div>
      </div>

      {/* ================= HERO / PROFILE SECTION ================= */}
      <section id="about" className="grid md:grid-cols-12 gap-12 items-center border-b border-slate-800/40 pb-16">
        <div className="md:col-span-8 order-2 md:order-1 space-y-6">
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none">
            Bridging software solutions with physical engineering infrastructure.
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            Hi, I'm Jordan Kirumira. I am an Information Technology student specializing in full-stack web architectures and high-performance computer networking. I build scalable digital platforms using React and Node.js while designing, racking, and configuring robust physical and simulated enterprise network topologies.
          </p>
        </div>

        <div className="md:col-span-4 order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group w-48 h-48 sm:w-56 sm:h-56">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative w-full h-full bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden group-hover:border-blue-500/60 transition-colors duration-300">
              <img src={heroImage} alt="Jordan Kirumira Profile Layout Headshot" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition duration-500 ease-out" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1 font-mono text-[9px] text-slate-400 tracking-wider shadow-2xl">
              LOC: KAMPALA, UG
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS MATRIX SECTION ================= */}
      <section className="bg-slate-950/40 border border-slate-900 rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-xl">
        <div className="border-b border-slate-800/60 pb-6 mb-8">
          <h3 className="text-xl font-bold text-white tracking-tight">Verified Engineering Subsystems Matrix</h3>
          <p className="text-slate-500 text-xs mt-1 font-mono tracking-wide">System proficiencies acquired via physical installations, field research, and lab deployments.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {skillMatrix.map((matrix, index) => (
            <div key={index} className="space-y-4 bg-slate-900/10 p-4 border border-slate-800/40 rounded-xl hover:border-slate-800 transition-colors">
              <h4 className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest border-l-2 border-blue-500 pl-2">
                {matrix.domain}
              </h4>
              <ul className="space-y-2.5">
                {matrix.skills.map((skill, sIndex) => (
                  <li key={sIndex} className="flex items-start gap-2 text-sm text-slate-400 hover:text-slate-300 transition-colors">
                    <span className="text-blue-500 font-mono text-xs select-none mt-0.5">▪</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TECHNICAL PROJECTS GRID SECTION ================= */}
      <section id="projects" className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Featured Technical Deployments</h2>
          <p className="text-slate-500 text-sm mt-1">Core academic builds, physical engineering simulations, and production-ready applications.</p>
        </div>

        {/* Custom Filter Control Bar */}
        <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950/60 border border-slate-900 rounded-xl inline-flex shadow-inner">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3.5 py-2 rounded-lg text-[11px] font-mono font-medium transition-all duration-200 uppercase tracking-wider ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40 border border-blue-500'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900/40 border border-transparent'
              }`}
            >
              {category === 'ALL' ? '⚡ All System Frameworks' : category.split(' & ')[0].split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Asymmetric Elegant Deployment Showcase Grid Layout */}
        <div className="grid md:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            // Asymmetric design assignment rules: first item takes wide space, others split evenly
            const isWideCard = idx === 0 && activeFilter === 'ALL';
            return (
              <div 
                key={project.id} 
                className={`bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-blue-500/40 hover:bg-slate-900/50 transition-all duration-300 flex flex-col justify-between group shadow-lg ${
                  isWideCard ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4'
                }`}
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-8 pt-4 border-t border-slate-900">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="bg-slate-950/80 border border-slate-800/60 text-slate-400 text-[10px] px-2.5 py-1 rounded-md font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/project/${project.id}`} 
                    className="block text-xs font-mono font-bold text-center text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 px-4 py-3 rounded-xl transition-all shadow-md shadow-blue-900/20 transform group-hover:translate-y-[-1px]"
                  >
                    RUN_DIAGNOSTICS_VIEW →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="bg-gradient-to-br from-slate-950 via-[#0a1124] to-slate-950 border border-slate-800 rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden group">
        <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
        <div className="relative z-10 space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">Let's Connect Subsystems</h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm leading-relaxed font-light">
            Available for enterprise routing simulations, full-stack application development engineering loops, or collaborative structural systems architecture.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/256780618609" // Swap out with your accurate contact digit values
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-950 hover:bg-slate-100 active:bg-slate-200 font-mono font-bold text-xs tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-white/5 hover:scale-[1.02]"
            >
              INITIALIZE_WHATSAPP_CHAT
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#070b19] selection:bg-blue-500 selection:text-white pb-24 text-slate-300 font-sans antialiased">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 mt-8">
          <Routes>
            <Route path="/" element={<MainConsole />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}