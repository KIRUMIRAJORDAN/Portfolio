import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

export default function ProjectDetails() {
  const { projectId } = useParams();
  
  // Find the specific project matching the URL ID
  const project = projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0b1329] text-white flex flex-col items-center justify-center font-mono">
        <p className="text-rose-400">⚠️ ERROR: SUBSYSTEM_NOT_FOUND</p>
        <Link to="/" className="mt-4 text-blue-400 hover:underline">← Return to Main Console</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1329] text-slate-300 pb-24 font-sans">
      {/* Top Breadcrumb Navigation */}
      <div className="border-b border-slate-800/80 bg-slate-950/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center">
          <Link to="/" className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
            <span>←</span> BACK_TO_CONSOLE
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 mt-12 animate-fadeIn">
        {/* Project Header Meta */}
        <div className="space-y-4">
          <span className="text-xs font-mono font-bold text-blue-400 tracking-widest uppercase border border-blue-500/30 bg-blue-500/5 px-2.5 py-1 rounded">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack Horizontal Badge Bar */}
        <div className="flex flex-wrap gap-2 my-8 pt-4 border-t border-slate-800/40">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-900 border border-slate-800 text-slate-400 font-mono text-xs px-3 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* Dynamic Technical Deep-Dive Reports */}
        <div className="space-y-12 mt-12">
          
          {/* Project 1: Enterprise Network Architecture Deep-Dive */}
          {project.id === 1 && (
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-4">
                <h3 className="text-lg font-mono font-bold text-white border-b border-slate-800 pb-2">📍 Network Architecture Overview</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  This deployment establishes a high-availability, multi-branch structural enterprise network layout connecting critical regional operations across <strong>Mukono, Kampala, Jinja, and Mbale</strong>. The layout handles total domain synchronization across a 16-PC framework using high-speed Layer 3 infrastructure cores.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white tracking-tight">Engineering Specifications</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/20 border border-slate-800/60 rounded-xl">
                    <h4 className="text-xs font-mono text-blue-400 font-bold uppercase">Logical Segmentation (VLANs)</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">Integrated custom internal VLANs to segment corporate broadcast domains, isolating sensitive administration data pipelines from generic public student access traffic.</p>
                  </div>
                  <div className="p-4 bg-slate-900/20 border border-slate-800/60 rounded-xl">
                    <h4 className="text-xs font-mono text-blue-400 font-bold uppercase">Physical Hardware Deployment</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">Executed hands-on hardware lab installation including mounting Layer 3 infrastructure switches into standard server racks and direct punch-downs onto local patch panels using structured T568B standard terminations.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project 2: Full-Stack Web App Deep-Dive */}
          {project.id === 2 && (
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-4">
                <h3 className="text-lg font-mono font-bold text-white border-b border-slate-800 pb-2">📂 Application Ecosystem & Logic</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The <strong>Big Sister Web Platform</strong> is an impact-driven social innovation application architected to deliver scalable support frameworks for young youth groups. Designed with a strictly decoupled React.js front-end structure communicating with a high-throughput Node.js execution engine.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white tracking-tight">Architectural Subsystems</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-900/20 border border-slate-800/60 rounded-xl">
                    <h4 className="text-xs font-mono text-blue-400 font-bold uppercase">Security & Verification</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">Engineered robust custom JSON Web Token (JWT) authorization middleware. User route traffic is strictly verified to safeguard data privacy across user accounts.</p>
                  </div>
                  <div className="p-4 bg-slate-900/20 border border-slate-800/60 rounded-xl">
                    <h4 className="text-xs font-mono text-blue-400 font-bold uppercase">Fieldwork & Schema Normalization</h4>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">Conducted comprehensive field research interviews with real community members to map out system features, transforming real feedback points into third-normal-form (3NF) relational database schemas.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project 3: 3D CAD Modeling Deep-Dive */}
          {project.id === 3 && (
            <div className="space-y-6">
              <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl space-y-4">
                <h3 className="text-lg font-mono font-bold text-white border-b border-slate-800 pb-2">📐 Mechanical Design Intent</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  This subsystem covers complex solid-body parts and multi-component mechanical assemblies modeled using <strong>SolidWorks</strong>. Every digital twin asset is configured with parametric constraint logic to protect strict mechanical design intent when scaling geometry models.
                </p>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}