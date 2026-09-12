// 포트폴리오 데이터 — docs/portfolio 원본 문서 기준
const PORTFOLIO = {
  name: "OOO",
  role: "소프트웨어 개발 · 정보시스템 자문/감리 · 정보보안 전문가",
  summary:
    "10년 이상 이커머스/유통 도메인에서 Back-end 시스템 설계부터 클라우드 마이그레이션, NLP 기반 대규모 데이터 처리까지 폭넓게 경험한 IT 전문가입니다. 정보관리기술사, 정보보안기사 등 자격을 보유하고 있습니다.",
  stats: [
    { label: "실무 경력", value: "12+ 년" },
    { label: "주요 프로젝트", value: "10건" },
    { label: "보유 자격증", value: "7개" },
  ],

  career: [
    {
      company: "에스에스지닷컴 (SSG.COM)",
      period: "2019.07 – 현재",
      dept: "D/I본부 Data담당 검색추천팀",
      title: "과장",
      duties: [
        "SSG.COM 검색 시스템 설계(아키텍처, 비즈니스 프로세스) 및 Back-end 개발(Server API, Batch Processing, CI/CD), 운영/모니터링",
        "NLP 기반 대용량/실시간 상품정보 클러스터링(가격비교) 시스템 개발 및 운영",
        "Agile(Scrum) 기반 개발 및 프로젝트 리딩",
      ],
      stack: [
        "Java(Spring Boot/Batch/Data)", "Python", "Kotlin", "JavaScript",
        "Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis",
        "Docker", "Airflow", "Elasticsearch", "Kafka", "Eureka", "Jenkins", "Pinpoint", "Prometheus", "Grafana",
        "GCP", "GCS", "Snowflake", "AWS",
        "FastText", "HNSW", "igraph",
      ],
    },
    {
      company: "현대IT&E",
      period: "2012.07 – 2019.06",
      dept: "IT사업부문 홈쇼핑정보사업부 더현대닷컴팀",
      title: "대리",
      duties: [
        "현대백화점(더현대닷컴) 및 현대홈쇼핑(Hmall) eCommerce 결제/회원 시스템 개발(Back/Front-end)",
        "간편결제, 신용카드 결제 및 PG 연동 등 주문/결제 Back-end API 구축",
        "외부 제휴사 연동 API 구축, IT Compliance(ISMS-P, 보안심사 대응, 기술적 보안성 검토)",
      ],
      stack: [
        "Java(Spring Framework)", "JSP", "JavaScript",
        "Oracle", "MySQL",
        "시큐어 코딩", "Burp Suite", "Wireshark",
        "xPlatform", "Jennifer", "EAI",
      ],
    },
    {
      company: "Samsung SDS China",
      period: "2011.07 – 2011.08",
      dept: "",
      title: "",
      duties: [],
      stack: [],
    },
  ],

  projects: [
    {
      company: "SSG.COM",
      title: "신규 클라우드 도입 및 마이그레이션",
      period: "2025.06 – 2025.08 (약 3개월)",
      role: "팀 내 개발 부문 PL/PM (자체 개발 포함) · 약 10명 내외",
      overview: "Google Cloud → Snowflake/S3 전환 프로젝트",
      work: [
        "BigQuery 기반 시스템의 Snowflake/AWS로의 전환",
        "쿼리(SQL) 마이그레이션",
        "클라우드 구간 공통 모듈 파이프라인 개발",
        "LLM(Bedrock) API 기반 검색 키워드 개선(보정, 분리, 오타 등) 프로세스 구축",
      ],
      result: ["기술부채 제거, 신규 시스템 도입에 따른 노후화 기능 개선"],
    },
    {
      company: "SSG.COM",
      title: "기간계 시스템 클라우드(GCP) 전환",
      period: "2023.12 – 2024.03",
      role: "팀 내 개발 부문 PL/PM (자체 개발 포함) · 약 10명 내외",
      overview: "대내외 고객 서비스 및 배치 시스템 클라우드(GCP/GCS) 파이프라인 구축 프로젝트",
      work: [
        "기존 On-premise 데이터 클라우드 이관",
        "Airflow 연동 데이터 파이프라인 구성 (GCP → GCS → Airflow → 데이터 처리(필터링/병합) → Elasticsearch 색인)",
        "배치 시스템 효율(속도/성능) 개선 및 데이터 표준화",
      ],
      result: ["배치 시스템 공통 파이프라인 구축", "서비스 딜리버리 속도 개선 및 분산 DB 데이터 통일"],
    },
    {
      company: "SSG.COM",
      title: "신규 배치 플랫폼 구축",
      period: "2023.06 – 2023.11 (약 6개월)",
      role: "개발 부문 PL/PM (1인 프로젝트)",
      overview: "신규 배치 플랫폼(Airflow) 도입 및 신규 CI/CD, 파이프라인 구축",
      work: [
        "각 도메인 영역 배치별 파이프라인 구성",
        "Worker Clustering 실행환경 구축(Fail-over 적용)",
        "Dashboard 및 Monitoring 구축",
      ],
      result: ["배치 실행환경 최적화 및 유지보수 효율성 증가", "데이터 파이프라인 및 오케스트레이션 기반 환경 구축"],
    },
    {
      company: "SSG.COM",
      title: "오픈마켓 가격비교 서비스 구축",
      period: "2020.07 – 2021.04 (약 10개월)",
      role: "개발 부문 PL/PM (자체 개발 포함) · 약 5명 내외",
      overview: "NLP 기반 대규모 상품 클러스터링 시스템 구축 — 동일 상품 집합을 생성하여 가격비교 서비스 제공(예: 네이버 가격비교)",
      work: [
        "요구사항 기반 IT 기획, 개발요소 도출 및 프로세스 설계",
        "관리자 화면 제작(데이터 검증 및 수기 관리)",
        "전체/실시간 증분 시스템 개발",
      ],
      result: [
        "SSG.COM 오픈마켓 가격비교 서비스 출시",
        "개발 프레임워크 확립, 기간계 시스템 인터페이스(파이프라인) 구축",
        "서버 인프라 및 CI/CD 체계(Docker, Bitbucket, Airflow, Jenkins) 구축",
        "Agile 문화 도입/정착, 대규모 상품 클러스터링 시스템 구축",
      ],
    },
    {
      company: "SSG.COM",
      title: "SSG 항공, 여행(가이드) 시스템 구축",
      period: "2019.07 – 2020.06",
      role: "",
      overview: "",
      work: [
        "Spring Framework 기반 항공, 여행 서비스(가이드) Front/Back-end 시스템 개발",
        "현업 요구사항 도출/분석/구체화 및 이슈관리",
        "온라인 신용카드 결제시스템 API 개발",
        "테스트(QA), 데이터 검수 등 산출물 품질관리",
      ],
      result: [],
    },
    {
      company: "현대IT&E",
      title: "더현대닷컴 서비스 고도화 시스템 구축",
      period: "2018.12 – 2019.05 (약 6개월)",
      role: "결제 시스템 부문 PL · 약 10명 내외(수행사 포함)",
      overview: "대고객 서비스 개선/고도화 프로젝트 — 주문 최적가 프로세스 담당",
      work: [
        "현업 요구사항 도출/분석/구체화 및 이슈관리",
        "주문서 최적가 자동할인 프로세스 설계",
        "테스트 시나리오·케이스 작성 및 단위/통합 테스트 수행",
      ],
      result: [
        "원클릭 주문 최적가(할인) 서비스 출시",
        "주문/결제 프로세스 재정립(중복 프로세스 통합, 리팩토링 포함)",
        "시스템 성능/안정성 개선, 고객 주문 편의성 증대",
      ],
    },
    {
      company: "현대IT&E",
      title: "더현대닷컴 카드결제 직승인 시스템 구축",
      period: "2018.07 – 2018.11 (약 5개월)",
      role: "결제 시스템 부문 PL · 약 8명 내외(수행사 포함)",
      overview: "더현대닷컴 신용카드 수수료 절감 및 시스템 개선 프로젝트",
      work: [
        "현업 요구사항 도출/분석/구체화 및 이슈/추적 관리",
        "요건 기반 카드승인 프로세스 설계",
        "자체 모의해킹을 통한 취약점 점검",
      ],
      result: [
        "온라인 카드결제 수수료 절감",
        "장애대비(Active-Standby) 이중화/무중단 시스템 구축",
        "결제 프로세스 일원화, 업무 도메인 데이터 속성 통일",
      ],
    },
    {
      company: "현대IT&E",
      title: "더현대닷컴 통합멤버십 시스템 구축",
      period: "2017.07 – 2018.02 (약 8개월)",
      role: "결제/회원 시스템 부문 PL · 약 10명 내외(수행사 포함)",
      overview: "현대백화점그룹 회원통합 및 포인트결제 시스템 구축",
      work: [
        "회원통합 및 포인트결제 프로세스 설계, 기술 정책 결정",
        "QA 포함 산출물 품질 관리, 데이터 유효성 검증, 개인정보보호 대응",
      ],
      result: [
        "그룹사 통합회원 서비스 제공, IT Compliance(ISMS-P) 체계 구축",
        "온라인 회원 인터페이스(EAI, OAuth) 체계 구축, SDLC 통일(V-Model)",
        "그룹사 회원 계정 및 포인트 통합",
      ],
    },
    {
      company: "현대IT&E",
      title: "현대백화점 전자상거래 시스템 구축",
      period: "2014.07 – 2016.03 (약 21개월)",
      role: "결제/회원 시스템 부문 PL · 약 80명 내외(수행사 포함)",
      overview: "현대백화점 신규 온라인관(더현대닷컴) 구축 프로젝트",
      work: [
        "RFP 작성, 개발공수 산정, 제안서/업체 평가 등 TF 기획 활동",
        "담당 영역(회원/결제/주문) 일정·위험·이슈 관리 및 아키텍처/인터페이스 설계",
        "테스트 시나리오 작성 및 단위/통합 테스트, 정보보안 이슈 대응",
      ],
      result: [
        "현대백화점 공식 온라인몰(thehyundai.com) 서비스 출시",
        "결제/회원 인터페이스(API, RESTful) 체계 구축",
        "IT Compliance(ISMS-P) 프로세스 수립, O2O 서비스 전환 발판 마련",
      ],
    },
    {
      company: "현대IT&E",
      title: "현대홈쇼핑 차세대 시스템 구축",
      period: "2013.01 – 2014.03 (약 10개월)",
      role: "Hmall 결제/회원 시스템 부문 QA · 실협력 10명 내외(전체 100명+)",
      overview: "현대홈쇼핑 차세대 시스템 구축 프로젝트",
      work: [
        "산출 프로그램·모듈·데이터 Verification & Validation",
        "테스트 시나리오 작성 및 결함 추적/대응",
        "산출물 관리, 프로그램 배포, 서비스 안정화(VOC 대응)",
      ],
      result: [
        "현대홈쇼핑(Hmall) NEXT 시스템 오픈",
        "S/W 테스트 프로세스 도입(White/Black-box, FIRST 원칙)",
        "자체 데이터 거버넌스 수립, 전산 시스템 개편/최신화",
      ],
    },
  ],

  education: [
    {
      school: "성균관대학교",
      major: "정보통신대학 컴퓨터공학과",
      date: "2012.08 졸업",
      detail: "평점평균 3.57 / 4.5 (전공 3.58 / 4.5, 환산 88.84 / 100) · 취득학점 65 (전공 62, 교양 2, 선택 1)",
    },
  ],

  certs: [
    { name: "정보관리기술사", date: "2021.09 취득", org: "한국산업인력공단", note: "제124회" },
    { name: "정보보안기사", date: "2018.06 취득", org: "한국방송통신전파진흥원", note: "제11회" },
    { name: "SQLD", date: "2016.10 취득", org: "한국데이터진흥원", note: "" },
    { name: "ITIL Foundation", date: "2015.09 취득", org: "AXELOS", note: "" },
    { name: "OCJP", date: "2013.09 취득", org: "Oracle", note: "" },
    { name: "정보처리기사", date: "2012.06 취득", org: "한국산업인력공단", note: "" },
    { name: "한자 2급", date: "2007.10 취득", org: "(사)한자교육진흥회", note: "합격점수 72점" },
    { name: "한자 3급", date: "2007.07 취득", org: "(사)한자교육진흥회", note: "합격점수 88점" },
  ],
};
