"use client";

import { useState, use } from "react"; // [수정] use 추가
import { projectsData } from "@/data/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, Calendar, Code2, User, AlertTriangle, CheckCircle2, Layers, 
  Network, X, ZoomIn 
} from "lucide-react";

// 타입 정의
type ProjectType = {
  title: string;
  period: string;
  overview: string;
  role?: string;
  stack?: string[];
  coreTech?: string;
  architecture?: {
    title: string;
    description: string;
    images: string[];
  };
  mainImages?: { src: string; caption: string }[];
  processImages?: { src: string; caption: string }[];
  logicImages?: { src: string; caption: string }[]; 
  troubleshooting?: {
    problem: string;
    solution: string;
  };
};

// [수정] params의 타입은 이제 Promise입니다.
export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  // [수정] Next.js 15에서는 use() 훅으로 params를 풀어야 id를 꺼낼 수 있습니다.
  const { id } = use(params);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // @ts-ignore
  const project = projectsData[id as keyof typeof projectsData] as ProjectType;

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      
      {/* 이미지 확대 모달 (Lightbox) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header */}
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-zinc-400 text-sm">
            <div className="flex items-center gap-2"><Calendar size={18} className="text-emerald-500" /><span>{project.period}</span></div>
            <div className="flex items-center gap-2"><Code2 size={18} className="text-emerald-500" /><span>{project.coreTech || project.stack?.join(", ")}</span></div>
            <div className="flex items-center gap-2"><User size={18} className="text-emerald-500" /><span>{project.role}</span></div>
          </div>
        </header>

        {/* Overview */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2"><Layers size={20} /> Overview</h2>
              <p className="text-zinc-400 leading-relaxed whitespace-pre-line">{project.overview}</p>
            </section>
            <div className="flex flex-wrap gap-2">
              {project.stack?.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300">{tech}</span>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            {project.troubleshooting && (
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-6">Technical Challenge & Solution</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1"><div className="p-2 bg-red-500/10 rounded-lg"><AlertTriangle size={20} className="text-red-400" /></div></div>
                    <div><h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-1">Problem</h4><p className="text-zinc-300 leading-relaxed">{project.troubleshooting.problem}</p></div>
                  </div>
                  <div className="w-full h-px bg-zinc-800" />
                  <div className="flex gap-4">
                    <div className="mt-1"><div className="p-2 bg-emerald-500/10 rounded-lg"><CheckCircle2 size={20} className="text-emerald-400" /></div></div>
                    <div><h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider mb-1">Solution</h4><p className="text-zinc-300 leading-relaxed">{project.troubleshooting.solution}</p></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Architecture Section */}
        {project.architecture && (
          <section className="mb-20">
             <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4 flex items-center gap-2">
               <Network size={24} className="text-blue-500" />
               {project.architecture.title}
             </h2>
             <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8">
               <p className="text-zinc-300 leading-relaxed mb-8 text-lg">
                 {project.architecture.description}
               </p>
               <div className={`grid gap-6 ${project.architecture.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                 {project.architecture.images.map((img, idx) => (
                   <div 
                     key={idx} 
                     className="group relative rounded-lg overflow-hidden border border-zinc-700/50 shadow-2xl bg-white/5 cursor-zoom-in"
                     onClick={() => setSelectedImage(img)}
                   >
                     <img src={img} alt="System Architecture" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <ZoomIn className="text-white w-10 h-10" />
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </section>
        )}

        {/* Key Features */}
        {project.mainImages && project.mainImages.length > 0 && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-emerald-500 pl-4">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {project.mainImages.map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div 
                    className="group relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video shadow-lg cursor-zoom-in"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <img src={item.src} alt={`Main feature ${idx + 1}`} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <ZoomIn className="text-white w-10 h-10" />
                     </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-700 pl-3">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process & Logic Images */}
        {(project.processImages || project.logicImages) && (
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 border-l-4 border-purple-500 pl-4">Process & Logic</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {(project.processImages || project.logicImages)?.map((item, idx) => (
                <div key={idx} className="space-y-4">
                  <div 
                    className="group relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-video shadow-lg cursor-zoom-in"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <img src={item.src} alt={`Process logic ${idx + 1}`} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <ZoomIn className="text-white w-10 h-10" />
                     </div>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-700 pl-3">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}