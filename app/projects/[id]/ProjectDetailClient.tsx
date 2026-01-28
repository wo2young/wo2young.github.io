"use client";

import { useState } from "react";
import { projectsData } from "@/data/projectsData";
import Link from "next/link";
import { 
  ArrowLeft, Calendar, Code2, User, AlertTriangle, CheckCircle2, Layers, 
  Network, X, ZoomIn 
} from "lucide-react";

// 타입 정의 (기존과 동일)
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

export default function ProjectDetailClient({ id }: { id: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = projectsData[id as keyof typeof projectsData] as ProjectType;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors">
            <X size={40} onClick={() => setSelectedImage(null)} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* 이하 기존 UI 코드와 동일 (내비게이션, 헤더, 섹션들...) */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/#projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{project.title}</h1>
          <div className="flex flex-wrap gap-6 text-zinc-400 text-sm">
            <div className="flex items-center gap-2"><Calendar size={18} className="text-emerald-500" /><span>{project.period}</span></div>
            <div className="flex items-center gap-2"><Code2 size={18} className="text-emerald-500" /><span>{project.coreTech || project.stack?.join(", ")}</span></div>
            <div className="flex items-center gap-2"><User size={18} className="text-emerald-500" /><span>{project.role}</span></div>
          </div>
        </header>

        {/* Architecture Section (기본 구조 유지) */}
        {project.architecture && (
          <section className="mb-20">
             <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4 flex items-center gap-2">
               <Network size={24} className="text-blue-500" />
               {project.architecture.title}
             </h2>
             <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-6 md:p-8">
               <p className="text-zinc-300 leading-relaxed mb-8 text-lg">{project.architecture.description}</p>
               <div className={`grid gap-6 ${project.architecture.images.length > 1 ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                 {project.architecture.images.map((img, idx) => (
                   <div key={idx} className="group relative rounded-lg overflow-hidden border border-zinc-700/50 shadow-2xl cursor-zoom-in" onClick={() => setSelectedImage(img)}>
                     <img src={img} alt="Architecture" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><ZoomIn className="text-white w-10 h-10" /></div>
                   </div>
                 ))}
               </div>
             </div>
          </section>
        )}

        {/* Key Features & Process Logic 섹션들도 동일하게 유지... */}
        {/* (지면 관계상 생략하지만 기존 logic 그대로 복사해서 넣으시면 됩니다) */}
      </main>
    </div>
  );
}