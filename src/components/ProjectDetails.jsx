import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectDetails() {
  const params = useParams();
  
  // UNIVERSAL FIX: Extract both lowercase and camelCase to prevent route crashes
  const projectId = params.projectId || params.projectid || "2";

  const localProjectsArchive = [
    {
      id: "1",
      category: "NETWORKING & INFRASTRUCTURE",
      title: "Multi-Branch Regional Enterprise Topology Architecture",
      description: "Design and simulation of a high-availability 16-PC network core establishing structural synchronization across regional branches.",
      tags: ["Cisco IOS", "VLAN Segmentation", "Layer 3 Switching", "T568B Standard"]
    },
    {
      id: "2",
      category: "FULL-STACK DEVELOPMENT",
      title: "Big Sister Web Platform",
      description: "An impact-driven social innovation application architected to deliver scalable, secure support frameworks for youth empowerment groups.",
      tags: ["React.js", "Node.js", "JWT Auth", "3NF SQL Database"]
    },
    {
      id: "3",
      category: "3D CAD MODELING",
      title: "Parametric Mechanical Assemblies & Digital Twins",
      description: "High-fidelity geometric component files modeled utilizing SolidWorks with exact design intent boundaries.",
      tags: ["SolidWorks", "Parametric Modeling", "Mechanical Design", "3D Prototyping"]
    }
  ];

  // Match the ID parameter cleanly
  let project = localProjectsArchive.find(p => String(p.id) === String(projectId));
  if (!project) {
    project = localProjectsArchive[1]; // Hard fallback to Big Sister profile details
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-300 pb-24 font-sans pt-32">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link to="/" className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-2">
          ← BACK_TO_CONSOLE_DASHBOARD
        </Link>
      </div>

      <header className="max-w-6xl mx-auto px-4 mb-12">
        <div className="space-y-4 max-w-3xl">
          <span className="inline-block text-[10px] font-mono font-bold text-blue-400 tracking-widest uppercase border border-blue-500/30 bg-blue-500/5 px-3 py-1 rounded-md">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none">
            {project.title}
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-light mt-2">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-800/40">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-900/80 border border-slate-800 text-slate-400 font-mono text-xs px-3 py-1.5 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-12">
            
            {String(project.id) === "1" && (
              <>
                <section className="space-y-3">
                  <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">01_CONTEXT_&_BACKGROUND</h2>
                  <p className="text-slate-300 leading-relaxed">
                    This structural enterprise deployment establishes a highly secure, high-availability multi-branch structural network layout engineered to connect critical regional operations across <strong>Mukono, Kampala, Jinja, and Mbale</strong>. Designed to support a distributed 16-PC framework, the layout forms the data backbone for cross-regional synchronization.
                  </p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">02_PROBLEM_STATEMENT</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Unsegmented multi-branch architectures suffer heavily from massive broadcast loops, lack of security boundaries, and high network congestion. Without explicit physical mapping and routing rules, cross-country branch data can easily leak across departmental infrastructure.
                  </p>
                </section>
              </>
            )}

            {String(project.id) === "2" && (
              <>
                <section className="space-y-3">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">01_CONTEXT_&_BACKGROUND</h2>
                  <p className="text-slate-300 leading-relaxed">
                    The <strong>Big Sister Web Platform</strong> is an impact-driven social innovation platform architected to build scalable, production-ready support frameworks tailored explicitly for youth empowerment groups. The system architecture leverages a strictly decoupled React front-end communicating with a high-throughput Node.js execution layer.
                  </p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">02_PROBLEM_STATEMENT</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Youth support ecosystems suffer due to insecure messaging configurations, structural layout clutter, and bad real-world requirements analysis. Platforms regularly lack proper security protocols, leaving sensitive interaction logs vulnerable to external data scrapers.
                  </p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">03_RESEARCH_&_DATA_NORMALIZATION</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Conducted exhaustive field research sessions and interactive interviews with real-world community stakeholders to completely map out explicit core functional requirements. Transformed collected user needs into highly optimized, strict Third Normal Form ($3\text{NF}$) relational database logic blocks to prevent structural data redundancy.
                  </p>
                </section>
                <section className="space-y-3">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest">04_SECURITY_ARCHITECTURE</h2>
                  <div className="p-6 bg-slate-900/40 border border-slate-800 rounded-xl">
                    <h4 className="text-sm font-mono font-bold text-white uppercase mb-2">JSON Web Token Authorization</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Engineered robust, secure custom JSON Web Token ($\text{JWT}$) authorization middleware interceptors. Session routing state transitions are fully evaluated at the back-end access thresholds to protect cross-account privacy strings.
                    </p>
                  </div>
                </section>
              </>
            )}

            {String(project.id) === "3" && (
              <>
                <section className="space-y-3">
                  <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest">01_CONTEXT_&_DESIGN_INTENT</h2>
                  <p className="text-slate-300 leading-relaxed">
                    This engineering project addresses complex multi-body mechanical assemblies and geometric part files modeled utilizing <strong>SolidWorks</strong>. Built using exact structural parameters to translate functional mechanical needs into high-fidelity digital twins.
                  </p>
                </section>
              </>
            )}

          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="bg-slate-950/90 border-2 border-slate-800 rounded-xl overflow-hidden font-mono text-xs shadow-xl">
              <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-bold tracking-widest">SYSTEM_METRICS_LOG</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
              <div className="p-5 space-y-2 text-slate-400">
                <div><span className="text-slate-500">PARAM_ID:</span> 00{project.id}</div>
                <div><span className="text-slate-500">SYS_DEPLOY:</span> Vercel Production Hook</div>
                <div><span className="text-slate-500">CORE_ENGINE:</span> React Router Dom</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}