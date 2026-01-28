"use client";

import { useState } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import {
  Github,
  Mail,
  Code2,
  Database,
  Cpu,
  Server,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

// 스킬셋 정의
const skills = [
  { name: "Backend (Java/Spring)", icon: Server },
  { name: "AI Engineering (Python)", icon: Cpu },
  { name: "Data Pipeline", icon: Database },
  { name: "Problem Solving", icon: Code2 },
];

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-white">
            WOOYOUNG<span className="text-emerald-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-sm text-zinc-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 bg-zinc-950">
            <div className="px-6 py-4 flex flex-col gap-4">
              <Link href="#about" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#projects" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="#contact" className="text-sm text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            {/* [수정] 조금 더 직관적인 인사말 */}
            <p className="text-emerald-400 font-medium mb-4">System & Data Engineer</p> 
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Backend & AI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Solution Provider
              </span>
            </h1>
            {/* [수정] '운영/유지보수' 역량과 '문제해결' 능력을 강조하는 문구로 변경 */}
            <p className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed">
              보이지 않는 곳에서 시스템의 안정성을 책임집니다.
              <br className="hidden md:block" />
              현장의 데이터를 정확하게 처리하는 견고한 백엔드 시스템과, 
              문제를 논리적으로 해결하는 AI 모델링 역량을 갖춘 엔지니어 김우영입니다.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors"
              >
                View Projects
                <ChevronRight size={18} />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-white font-medium rounded-lg transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Technical Mindset</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* [수정] '비전공자'라는 약점 대신 '현장 경험'과 '성장'을 강조 */}
              <p className="text-zinc-400 leading-relaxed mb-6">
                물류 현장에서 데이터 하나가 업무 흐름에 미치는 영향을 몸소 체험하며, 
                <strong>'신뢰할 수 있는 시스템'</strong>의 중요성을 배웠습니다. 
                이후 9개월간의 집중적인 개발 과정을 통해 현장의 문제를 기술로 해결할 수 있는 역량을 길렀습니다.
              </p>
              {/* [수정] 유지보수/엔지니어링 마인드 강조 */}
              <p className="text-zinc-400 leading-relaxed">
                단순히 코드를 작성하는 것을 넘어, 발생 가능한 오류를 사전에 예측하고 
                <strong>"왜 이렇게 설계해야 안전한가?"</strong>를 끊임없이 고민하며 
                시스템의 안정성과 확장성을 만들어갑니다.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-4 bg-zinc-800/40 rounded-lg border border-zinc-700/50 hover:border-emerald-500/50 transition-colors"
                >
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
          {/* [수정] 트러블슈팅과 문제 해결을 강조 */}
          <p className="text-zinc-400 mb-12 max-w-2xl">
            현장의 불편함을 기술로 개선한 기록들입니다. 
            단순 구현을 넘어, 성능 최적화와 트러블슈팅 과정을 중점적으로 담았습니다.
            각 카드를 클릭하면 상세한 해결 과정을 확인하실 수 있습니다.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(projectsData).map(([id, project]) => (
              <Link 
                href={`/projects/${id}`} 
                key={id}
                className="group relative bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                {/* Project Image Area */}
                <div className="aspect-video bg-zinc-800 relative overflow-hidden">
                  {project.mainImages && project.mainImages.length > 0 ? (
                    <img 
                      // @ts-ignore
                      src={typeof project.mainImages[0] === 'string' ? project.mainImages[0] : project.mainImages[0].src} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                      <span className="text-zinc-700 font-bold text-2xl">{project.title}</span>
                    </div>
                  )}
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium flex items-center gap-2">
                      상세 보기 <ExternalLink size={16} />
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.overview}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                        {project.period}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-emerald-900/30 text-emerald-300 rounded-full border border-emerald-900/50">
                        {/* @ts-ignore */}
                        {project.coreTech || "Tech Stack"}
                      </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Serve</h2>
          {/* [수정] 든든하고 신뢰감 있는 마무리 */}
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            데이터의 가치를 지키고 시스템의 안정을 책임지겠습니다. <br/>
            귀사의 가장 든든한 엔지니어가 될 준비가 되었습니다.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="mailto:ywk5974@gmail.com"
              className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-300 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/wo2young"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-zinc-300 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 Woo Young. All rights reserved.
          </p>
          <p className="text-sm text-zinc-500">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}