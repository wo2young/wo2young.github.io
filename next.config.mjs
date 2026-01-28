/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 정적 배포 설정 유지
  images: {
    unoptimized: true, // 이미지 최적화 비활성화 유지
  },
  // basePath와 assetPrefix 항목이 있다면 모두 삭제하거나 주석 처리하세요.
};

export default nextConfig;