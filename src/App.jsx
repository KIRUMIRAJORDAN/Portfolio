import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar.jsx';
import { projects } from './data/projects.js';
import heroImage from './assets/hero.png';

export default function App() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [latency, setLatency] = useState(14);
  const [uptime, setUptime] = useState(99.982);

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

  // Structured Core Proficiencies Data Matrix
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
    <div className="min-h-screen selection:bg-blue-500 selection:text-white pb-24 bg-[#0b1329]">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-4 mt-12">
        
        {/* ================= LIVE SYSTEM METRICS MONITOR ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-16 bg-slate-900/40 border border-slate-800/80 rounded-2xl backdrop-blur-md font-mono text-xs shadow-xl">
          <div className="flex items-center gap-3 border-r border-slate-800/60 pr-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div>
              <div className="text-slate-500 text-[10px] uppercase tracking-wider">CORE_GATEWAY</div>
              <div className="text-emerald-400 font-bold mt-0.5">SECURE_ONLINE</div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:border-r border-slate-800/60 pr-2">
            <div className="text-blue-500 font-bold text-base">⚡</div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase tracking-wider">NET_LATENCY</div>
              <div className="text-blue-400 font-bold mt-0.5">{latency}ms <span className="text-[9px] text-slate-600 font-normal">(LIVE)</span></div>
            </div>
          </div>

          <div className="flex items-center gap-3 border-r border-slate-800/60 pr-2 pt-2 md:pt-0">
            <div className="text-indigo-500 font-bold text-base">⚙️</div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase tracking-wider">SYS_UPTIME</div>
              <div className="text-slate-300 font-bold mt-0.5">{uptime.toFixed(3)}%</div>
            </div>
          </div>

          <div className="flex items-center gap-3 pr-2 pt-2 md:pt-0">
            <div className="text-purple-500 font-bold text-base">🛡️</div>
            <div>
              <div className="text-slate-500 text-[10px] uppercase tracking-wider">SSL_TUNNEL</div>
              <div className="text-purple-400 font-bold mt-0.5">AES_256_ACTIVE</div>
            </div>
          </div>
        </div>

        {/* ================= HERO / PROFILE SECTION ================= */}
        <section id="about" className="mb-24 border-b border-slate-800/60 pb-16">
          <div className="grid md:grid-cols-3 gap-12 items-center mb-16">
            
            <div className="md:col-span-2 order-2 md:order-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                Bridging software solutions with physical engineering infrastructure.
              </h1>
              
              <p className="text-slate-400 mt-6 text-base sm:text-lg leading-relaxed max-w-2xl">
                Hi, I'm Jordan Kirumira. I am an Information Technology student specializing in full-stack web architectures and high-performance computer networking. I build scalable digital platforms using React and Node.js while designing, racking, and configuring robust physical and simulated enterprise network topologies. 
              </p>
            </div>

            <div className="md:col-span-1 order-1 md:order-2 flex justify-center">
              <div className="relative group w-48 h-48 sm:w-60 sm:h-60">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                <div className="relative w-full h-full bg-slate-900 border-2 border-slate-700/80 rounded-2xl overflow-hidden group-hover:border-blue-500 transition-colors duration-300">
                  <img 
                    src={heroImage} 
                    alt="Jordan Kirumira Profile" 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
                
                <div className="absolute -bottom-2 -right-2 bg-slate-800 border border-slate-700 rounded-lg px-2 py-0.5 font-mono text-[10px] text-slate-400 shadow-xl">
                  LOC: KAMPALA, UG
                </div>
              </div>
            </div>
          </div>

          {/* ================= CORE PROFICIENCIES SKILLS MATRIX ================= */}
          <div className="mt-12 bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6 md:p-8">
            <div className="border-b border-slate-800/80 pb-4 mb-6">
              <h3 className="text-lg font-bold text-white tracking-tight">Verified Engineering Subsystems Matrix</h3>
              <p className="text-slate-400 text-xs mt-1 font-mono">System proficiencies acquired via physical installations, field research, and lab deployments.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {skillMatrix.map((matrix, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest border-l-2 border-blue-500 pl-2">
                    {matrix.domain}
                  </h4>
                  <ul className="space-y-2.5">
                    {matrix.skills.map((skill, sIndex) => (
                      <li key={sIndex} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-blue-500 font-mono text-xs select-none mt-0.5">▪</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= TECHNICAL PROJECTS SECTION ================= */}
        <section id="projects" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-5 mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Featured Technical Deployments</h2>
              <p className="text-slate-400 text-sm mt-1">Core academic builds, physical engineering simulations, and production-ready applications.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10 p-1.5 bg-slate-900/40 border border-slate-800/80 rounded-xl inline-flex">
            {filterCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all duration-200 uppercase tracking-wider ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/30 border border-blue-500'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                {category === 'ALL' ? '⚡ Show All' : category.split(' & ')[0].split(' ')[0]}
                <span className="hidden sm:inline">
                  {category !== 'ALL' && category.substring(category.split(' & ')[0].split(' ')[0].length)}
                </span>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-slate-800/80 border border-slate-700/50 text-slate-300 text-xs px-2.5 py-1 rounded font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-block text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors w-full shadow-lg shadow-blue-900/20"
                  >
                    View Case Study
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 border border-dashed border-slate-800 rounded-2xl bg-slate-900/20">
              <p className="text-slate-500 font-mono text-sm">No deployments found matching this specific matrix subsystem.</p>
            </div>
          )}
        </section>

        {/* ================= CONTACT SECTION ================= */}
        <section id="contact" className="bg-gradient-to-r from-slate-900 via-[#0f1b3a] to-slate-900 border border-slate-800 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white">Let's Collaborate</h2>
          <p className="text-slate-400 mt-2 max-w-md mx-auto text-sm">
            Available for technical collaborations, full-stack architectural builds, and enterprise network infrastructure consultations.
          </p>
          <div className="mt-6">
            <a 
              href="mailto:jordan@example.com" 
              className="inline-block bg-white text-slate-950 font-semibold px-6 py-2.5 rounded-xl hover:bg-slate-200 transition-colors text-sm shadow-md"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}