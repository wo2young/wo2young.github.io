/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',      // 정적 리소스 추출 설정
  images: {
    unoptimized: true,   // 정적 배포 시 이미지 최적화 비활성화 필수
  },
  // 만약 저장소 이름이 wo2young.github.io가 아니라 'my-portfolio'라면 아래 주석 해제
  // basePath: '/my-portfolio', 
};

export default nextConfig;