export const projectsData = {
  "beverage-mes": {
    title: "음료 제조 공정 MES 시스템",
    period: "2025.10.02 ~ 2025.10.28 (4주)",
    stack: ["Spring MVC", "MyBatis", "Oracle 10g", "JSP", "Chart.js"],
    role: "DB 설계(ERD), 생산/불량 프로세스 로직 구현, AES256 암호화 모듈 개발",
    coreTech: "Spring MVC + Oracle + MyBatis",
    
    overview: `
      중소 제조 현장의 디지털 전환을 위해 설계된 생산 관리 시스템입니다. 
      기존의 수기 관리 방식에서 발생하는 데이터 누락과 정합성 문제를 해결하기 위해 관계형 데이터베이스(RDBMS)를 구축하고,
      생산 계획부터 실적 집계까지의 데이터를 하나의 파이프라인으로 연결했습니다.
    `,

    // [수정] UseCase 사진이 확실히 나오도록 배열 구성
    architecture: {
      title: "System Architecture & Design",
      description: "Oracle 10g를 기반으로 제3정규화까지 적용된 ERD 설계를 통해 데이터 중복을 최소화했습니다. Use Case 설계를 통해 관리자(Admin)와 작업자(Worker)의 권한을 분리하여 보안성을 강화했습니다.",
      images: [
        "/images/mes_erd.png",    // ERD
        "/images/mes_usecase.png"  // Use Case (파일명 확인 필수!)
      ] 
    },

    // [수정] 이미지 + 설명(Caption) 구조로 변경
    mainImages: [
      {
        src: "/images/beverage_mes_1.jpeg",
        caption: "실시간 통합 대시보드: Chart.js를 활용하여 당일 생산량(1,613건)과 불량률(3.2%)을 실시간으로 집계하고 시각화했습니다."
      },
      {
        src: "/images/beverage_mes_2.png",
        caption: "생산 및 재고 현황: 라인 차트와 파이 차트를 통해 주간 생산 추이와 불량 유형 분포를 한눈에 파악할 수 있습니다."
      }
    ],
    processImages: [
      {
        src: "/images/beverage_mes_4.png",
        caption: "불량 승인 프로세스: 작업자가 등록한 불량 내역을 관리자가 검토 후 승인(APPROVED) 처리하는 트랜잭션 로직을 구현했습니다."
      },
      {
        src: "/images/beverage_mes_5.png",
        caption: "사용자 권한 관리: AES256 암호화를 적용하여 개인정보를 보호하고, 관리자/작업자 권한에 따라 메뉴 접근을 제어합니다."
      }
    ],
    
    troubleshooting: {
      problem: "공정별 데이터(생산, 불량, 재고)가 개별적으로 관리되어 실시간 재고 집계 시 쿼리 성능 저하 및 정합성 불일치 발생.",
      solution: "트랜잭션(Transaction) 관리를 서비스 계층에 적용하여 입출고 데이터의 원자성(Atomicity)을 보장하고, DTO를 활용해 계층 간 데이터 전송 효율을 최적화했습니다."
    },
  },

  "carwhy": {
    title: "Carwhy - AI 차량 사고 진단 서비스",
    period: "2026.01.11 ~ 2026.01.31 (3주)",
    stack: ["FastAPI", "YOLOv8", "Azure VM", "Docker", "React"],
    role: "Azure 클라우드 인프라 구축, YOLOv8 모델 서빙 API 개발, 데이터 파이프라인 설계",
    coreTech: "FastAPI + YOLOv8 + Azure",

    overview: `
      사고 현장 이미지를 실시간으로 분석하여 파손 부위와 대응 가이드를 제공하는 AI 서비스입니다.
      모바일 환경에서의 빠른 응답 속도를 보장하기 위해 경량화된 모델과 비동기 처리가 가능한 FastAPI 서버를 구축했습니다.
    `,

    architecture: {
      title: "AI Pipeline & Cloud Architecture",
      description: "Azure VM 상에 Docker 컨테이너를 배포하여 환경 일관성을 확보했습니다. Client가 이미지를 전송하면 FastAPI가 이를 수신하여 전처리 후 YOLOv8 모델로 추론(Inference)하고, 결과를 JSON 형태로 반환하는 구조입니다.",
      images: [
        "/images/carwhy_architecture.png"
      ] 
    },

    // [수정] 이미지 + 설명(Caption) 구조로 변경
    mainImages: [
      {
        src: "/images/carwhy_2.png",
        caption: "AI 사고 분석 결과: YOLOv8 모델이 차량 이미지를 분석하여 사고 확률(CONFIRMED ACCIDENT)과 충돌 유형(전방 충돌 36%)을 도출합니다."
      },
      {
        src: "/images/carwhy_3png.png",
        caption: "파손 부위 정밀 탐지: Bounding Box를 통해 펜더(Fender), 범퍼(Bumper) 등 주요 파손 부위를 시각적으로 표시하고 손상 정도를 수치화합니다."
      }
    ],
    logicImages: [
      {
        src: "/images/carwhy_4.png",
        caption: "주행 가능 여부 판단: 파손 부위와 심각도를 종합 분석하여 '주행 불가' 판정을 내리고, 2차 사고 예방을 위한 견인 조치를 제안합니다."
      },
      {
        src: "/images/carwhy_5.png",
        caption: "종합 대응 가이드: 분석 결과를 바탕으로 보험 접수 요령, 수리 필요 항목 등 운전자가 취해야 할 구체적인 행동 지침을 제공합니다."
      }
    ],
    
    troubleshooting: {
      problem: "특정 파손 유형(범퍼, 램프)에 대한 데이터 불균형(Class Imbalance)으로 인해 모델의 예측 정확도가 편향되는 현상 발생.",
      solution: "Mosaic, Flip 등의 Data Augmentation 기법을 학습 파이프라인에 통합하고, Early Stopping을 적용하여 과적합을 방지하면서 mAP 성능을 개선했습니다."
    },
  },

  "royalty": {
    title: "Royalty - 상표권 침해 모니터링 AI (진행 중)",
    period: "2026.01.12 - 현재",
    stack: ["Spring Boot", "Python", "PostgreSQL", "Pgvector", "KIPRIS API", "Docker"],
    role: "이미지 벡터 임베딩 파이프라인 구축, PostgreSQL 벡터 검색 최적화, 대용량 데이터 배치 처리",
    coreTech: "Vector Search + Hybrid System",
    
    overview: `
      매일 수만 건씩 쏟아지는 상표 출원 속에서 내 브랜드와 '모양이 비슷한' 상표를 자동으로 찾아내는 AI 모니터링 서비스입니다.
      기존의 키워드 검색으로는 탐지할 수 없는 교묘한 이미지 도용을 막기 위해, 딥러닝 기반의 벡터 유사도 검색 기술을 도입했습니다.
    `,

    architecture: {
      title: "System Architecture & ERD",
      description: "데이터 수집(Python)과 서비스 운영(Spring Boot)을 분리한 MSA 지향 구조입니다. PostgreSQL의 pgvector 확장을 도입하여 별도의 벡터 DB 없이도 관계형 데이터와 벡터 데이터를 통합 관리할 수 있도록 설계했습니다.",
      images: [
        "/images/royalty_arch.png", // 아키텍처 사진
        "/images/royalty_erd.png"   // ERD 사진
      ] 
    },

    mainImages: [
      {
        src: "/images/royalty_api.png", // Postman 캡처
        caption: "백엔드 핵심 로직 검증 (Postman): 사용자가 업로드한 로고 이미지를 512차원 벡터로 변환 후, DB 내 수만 건의 상표 중 유사도(Distance)가 가장 가까운 Top-5를 0.2초 내에 리턴하는 API 테스트 결과입니다."
      }
    ],
    
    // 진행 중이라도 트러블슈팅은 기술적 깊이를 보여주기에 좋습니다.
    troubleshooting: {
      problem: "이미지 데이터가 늘어날수록 1:1 비교 연산(Full Scan) 속도가 기하급수적으로 느려져 실시간 검색이 불가능한 문제.",
      solution: "PostgreSQL에 IVFFlat(Inverted File Flat) 인덱싱을 적용하여 검색 공간을 클러스터링함으로써, 정확도를 유지하면서 검색 속도를 약 100배 이상 단축시킬 예정입니다."
    },
  }
};