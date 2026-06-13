import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Hardcoded verified local data stream to completely prevent file import mismatches
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

export default function ProjectDetails() {
  const { projectId } = useParams();
  
  // Enforces string matching against the local clean array
  const project = localProjectsArchive.find(p => String(p.id) === String(projectId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#070b19] text-white flex flex-col items-center justify-center font-mono p-4">
        <p className="text-rose-500 font-bold tracking-widest animate-pulse">⚠️ ERROR: SUBSYSTEM_NOT_FOUND</p>
        <div className="text-xs text-slate-500 mt-2">REQUESTED_ID: {projectId}</div>
        <Link to="/" className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors border border-blue-500/30 bg-blue-500/5 px-4 py-2 rounded-lg">
          ← Return to Core Console
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-300 pb-24 font-sans selection:bg-blue-500 selection:text-white">
      {/* Sticky Top Breadcrumb */}
      <div className="border-b border-slate-800/60 bg-[#070b19]/80 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-2 group tracking-wider">
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span> ESCAPE_TO_DASHBOARD
          </Link>
          <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">ID_REF // 00{project.id}</span>
        </div>
      </div>

      {/* High-Impact Hero Header */}
      <header className="max-w-6xl mx-auto px-4 mt-12 mb-16">
        <div className="space-y-4 max-w-3xl">
          <span className="inline-block text-[10px] font-mono font-bold text-blue-400 tracking-widest uppercase border border-blue-500/30 bg-blue-500/5 px-3 py-1 rounded-md shadow-sm shadow-blue-500/10">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-none pt-2">
            {project.title}
          </h1>
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed font-light pt-2">
            {project.description}
          </p>
        </div>

        {/* Tech Badges Horizontal Row */}
        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-800/40">
          {project.tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-900/80 border border-slate-800 text-slate-400 font-mono text-xs px-3 py-1.5 rounded-lg shadow-inner">
              {tag}
            </span>
          ))}
        </div>
      </header>

      {/* Main Structural Layout Frame (Sticky Split-Screen) */}
      <main className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Narrative Details Content */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* =============== PROJECT 1: ENTERPRISE ARCHITECTURE =============== */}
            {String(project.id) === "1" && (
              <>
                <section className="space-y-4 group">
                  <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block animate-pulse"></span> 01_CONTEXT_&_BACKGROUND
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    This structural enterprise deployment establishes a highly secure, high-availability multi-branch structural network layout engineered to connect critical regional operations across <strong>Mukono, Kampala, Jinja, and Mbale</strong>. Designed to support a distributed 16-PC framework, the layout forms the data backbone for cross-regional synchronization.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span> 02_PROBLEM_STATEMENT
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    Unsegmented multi-branch architectures suffer heavily from massive broadcast loops, lack of security boundaries, and high network congestion. Without explicit physical mapping and routing rules, cross-country branch data can easily leak across departmental infrastructure.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span> 03_DESIGN_PROCESS_&_DECISIONS
                  </h2>
                  <div className="p-6 bg-slate-900/30 border border-slate-800/80 rounded-xl space-y-4 backdrop-blur-sm">
                    <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">Logical Layer-3 Segmentation</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Integrated custom internal VLAN configurations to cleanly isolate corporate administrative traffic pipelines from public access points. Routed traffic endpoints across Layer-3 switches to ensure high-performance inter-VLAN routing speeds.
                    </p>
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block"></span> 04_QUANTIFIABLE_RESULTS
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    Executed full physical deployment loops in real server labs. Successfully mounted Layer-3 core infrastructure hardware switches into standard racks, terminated lines cleanly via structural patch panel punch-downs, and verified 100% data transmission loops across all subnets using physical testing routines and rigorous T568B structured termination validation protocols.
                  </p>
                </section>
              </>
            )}

            {/* =============== PROJECT 2: FULL-STACK APPLICATION (BIG SISTER) =============== */}
            {String(project.id) === "2" && (
              <>
                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block animate-pulse"></span> 01_CONTEXT_&_BACKGROUND
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    The <strong>Big Sister Web Platform</strong> is an impact-driven social innovation platform architected to build scalable, production-ready support frameworks tailored explicitly for youth empowerment groups. The system architecture leverages a strictly decoupled React front-end communicating with a high-throughput Node.js execution layer.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span> 02_PROBLEM_STATEMENT
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    Youth support ecosystems suffer due to insecure messaging configurations, structural layout clutter, and bad real-world requirements analysis. Platforms regularly lack proper security protocols, leaving sensitive interaction logs vulnerable to external data scrapers.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span> 03_RESEARCH_&_DATA_NORMALIZATION
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    Conducted exhaustive field research sessions and interactive interviews with real-world community stakeholders to completely map out explicit core functional requirements. Transformed collected user needs into highly optimized, strict Third Normal Form ($3\text{NF}$) relational database logic blocks to prevent structural data redundancy.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block"></span> 04_SECURITY_DECISIONS
                  </h2>
                  <div className="p-6 bg-slate-900/30 border border-slate-800/80 rounded-xl space-y-3 backdrop-blur-sm">
                    <h4 className="text-sm font-mono font-bold text-white uppercase tracking-wider">JSON Web Token Authorization</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Engineered robust, secure custom JSON Web Token ($\text{JWT}$) authorization middleware interceptors. Session routing state transitions are fully evaluated at the back-end access thresholds to protect cross-account privacy strings.
                    </p>
                  </div>
                </section>
              </>
            )}

            {/* =============== PROJECT 3: 3D CAD MODELING =============== */}
            {String(project.id) === "3" && (
              <>
                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block animate-pulse"></span> 01_CONTEXT_&_DESIGN_INTENT
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    This engineering project addresses complex multi-body mechanical assemblies and geometric part files modeled utilizing <strong>SolidWorks</strong>. Built using exact structural parameters to translate functional mechanical needs into high-fidelity digital twins.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block"></span> 02_PARAMETRIC_LOGIC
                  </h2>
                  <p className="text-slate-300 leading-relaxed text-base">
                    To preserve strict design intent during structural engineering refactors, all geometries utilize parametric global relation limits. Modifying primary structural boundaries automatically updates related components without breaking sub-assembly constraints.
                  </p>
                </section>
              </>
            )}

          </div>

          {/* RIGHT COLUMN: Sticky Visual Mockups & Interactive Terminal Display */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
            
            {/* Interactive Dynamic Tech Blueprint Terminal Box */}
            <div className="bg-slate-950/90 border-2 border-slate-800 rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
              <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">SYS_DIAGNOSTICS</span>
              </div>
              
              <div className="p-5 space-y-3 text-slate-400">
                <div className="text-slate-500">// ACTIVE COMPONENT BLUEPRINT INDEX</div>
                <div><span className="text-blue-400">root@CONSOLE:~#</span> compile --target=subsystem_specs</div>
                <div className="text-emerald-400 font-bold">✓ PIPELINE_VERIFIED_SUCCESSFULLY</div>
                
                <div className="bg-slate-900/50 p-3 rounded border border-slate-800/80 text-[11px] space-y-1 text-slate-300">
                  <div><strong className="text-white">PROJECT_ID:</strong> 00{project.id}</div>
                  <div><strong className="text-white">DEPLOY_ENV:</strong> Production Node Vercel</div>
                  <div><strong className="text-white">SYS_STATUS:</strong> Stable (Operational)</div>
                </div>

                <div className="pt-2 text-[10px] text-slate-600 flex items-center justify-between">
                  <span>REF: KAMPALA_ENG_2026</span>
                  <span className="animate-pulse">● LIVE_STREAM</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}