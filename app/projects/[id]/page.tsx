import { projectsData } from "@/data/projectsData";
import ProjectDetailClient from "./ProjectDetailClient";
import { notFound } from "next/navigation";

// 정적 경로 생성을 위한 함수 (서버 측에서 실행)
export async function generateStaticParams() {
  return Object.keys(projectsData).map((id) => ({
    id: id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // 데이터 존재 여부 확인
  if (!projectsData[id as keyof typeof projectsData]) {
    return notFound();
  }

  // 실제 화면을 그리는 클라이언트 컴포넌트에 id 전달
  return <ProjectDetailClient id={id} />;
}