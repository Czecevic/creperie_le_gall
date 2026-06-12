export default {
  description:
    "저희의 달콤한 크레페와 짭조름한 갈레트는 반죽부터 속재료까지 100% 수제로 만들어집니다. 타협 없는 정통의 맛을 위해 브르타뉴에서 엄선한 신선한 재료만을 사용합니다.",

  menu: {
    title: "메뉴",
    sweet: "달콤한 크레페",
    savory: "식사용 갈레트",
  },

  crepes: {
    sucre: [
      {
        id: 0,
        name: "버터 & 설탕",
        description: "가 가미된 가당 가염 버터와 설탕 가루.",
        price: 5,
      },
      {
        id: 1,
        name: "레몬, 버터 & 설탕",
        description: "생 레몬즙, 설탕 가루 그리고 가염 버터.",
        price: 5.5,
      },
      {
        id: 2,
        name: "솔티드 버터 카라멜",
        description: "수제 솔티드 버터 카라멜 소스.",
        price: 6.5,
      },
      {
        id: 3,
        name: "꿀 & 호두",
        description: "달콤한 꿀과 고소한 호두.",
        price: 5.5,
      },
      {
        id: 4,
        name: "딸기 또는 블루베리 잼",
        description: "취향에 따라 선택하는 딸기 또는 블루베리 잼.",
        price: 5,
      },
      {
        id: 5,
        name: "누텔라",
        description: "누텔라 초코잼과 가염 버터.",
        price: 6,
      },
      {
        id: 6,
        name: "누텔라 바나나",
        description: "누텔라, 가염 버터와 제철 과일(바나나).",
        price: 7,
      },
      {
        id: 7,
        name: "누텔라 코코넛",
        description: "누텔라, 가염 버터와 코코넛 가루.",
        price: 6.5,
      },
    ],

    sale: [
      {
        id: 0,
        name: "L'HENRIETTE (앙리에트)",
        description: "햄, 다진 에멘탈 치즈, 달걀.",
        price: 9,
      },
      {
        id: 1,
        name: "LA MICHELINE (미슐린)",
        description: "시금치, 양파, 양송이버섯, 토마토 소스.",
        price: 9.5,
      },
      {
        id: 2,
        name: "LA JACOTTE (자코트)",
        description: "에멘탈 치즈, 달걀, 베이컨, 양파.",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE (마르틴)",
        description:
          "르블로숑 치즈, 베이컨, 감자, 크렘 프레슈(프랑스식 생크림).",
        price: 11,
      },
      {
        id: 4,
        name: "LA PASCALE (파스칼)",
        description: "에멘탈 치즈, 초리조, 염소 치즈, 토마토 소스.",
        price: 10,
      },
      {
        id: 5,
        name: "LA JEANNETTE (자네트)",
        description: "에멘탈 치즈, 연어, 시금치, 크렘 프레슈.",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE (앙리에트 토마토)",
        description: "에멘탈 치즈, 화이트 햄, 달걀, 토마토 소스.",
        price: 10,
      },
      {
        id: 7,
        name: "LA MADELEINE (마들렌)",
        description: "에멘탈 치즈, 달걀, 양송이버섯, 크렘 프레슈.",
        price: 10,
      },
      {
        id: 8,
        name: "LA LUCETTE (류세트)",
        description: "에멘탈 치즈, 하몬(생햄), 달걀.",
        price: 9,
      },
      {
        id: 9,
        name: "LA TIPONETTE (티포네트)",
        description: "에멘탈 치즈, 퐁듀식으로 졸인 대파, 베이컨, 크렘 프레슈.",
        price: 10,
      },
      {
        id: 10,
        name: "LA KRISTINETTE (크리스티네트)",
        description:
          "에멘탈 치즈, 퐁듀식으로 졸인 대파, 양송이버섯, 크렘 프레슈.",
        price: 10,
      },
      {
        id: 11,
        name: "LA PIERRETTE (피에레트)",
        description: "에멘탈 치즈, 염소 치즈, 꿀, 호두.",
        price: 10,
      },
      {
        id: 12,
        name: "LA NICOLE (니콜)",
        description:
          "에멘탈 치즈, 브르타뉴 전통 게메네 순대(안두이), 양송이버섯, 크렘 프레슈.",
        price: 10,
      },
    ],
  },

  boissons: {
    soda: [
      { id: 0, name: "Kerné 사과 주스", price: 4 },
      { id: 1, name: "유기농 스파클링 사과 주스", price: 4.5 },
      { id: 2, name: "브레이즈 콜라 33cl", price: 4.5 },
      { id: 3, name: "브레이즈 콜라 제로 33cl", price: 4.5 },
      { id: 4, name: "브레이즈 티 33cl", price: 4.5 },
      { id: 5, name: "브레이즈 시트러스 33cl", price: 4.5 },
    ],

    digestif: [
      {
        id: 0,
        name: "Chouchen d'Armor",
        desc: "브르타뉴 전통 미드(꿀술). 식전주 또는 식후경으로 즐기기 좋습니다.",
        price: 5,
      },
      {
        id: 1,
        name: "Pommeau de Bretagne AOC",
        desc: "사과 리큐르. 식전주로 마시거나 달콤한 크레페와 잘 어울립니다.",
        price: 5.5,
      },
      {
        id: 2,
        name: "Ty Jaune",
        desc: "브르타뉴식 파스티스(아니스 향술).",
        price: 4.5,
      },
      {
        id: 3,
        name: "Lambig de Bretagne AOC",
        desc: "사과 브랜디(증류주).",
        price: 6,
      },
    ],

    bieres: [
      {
        id: 0,
        name: "Dremmwel, 유기농 메밀 맥주",
        price: 6.5,
      },
      {
        id: 1,
        name: "Sant Erwann IPA",
        price: 6.5,
      },
      {
        id: 2,
        name: "Britt 블론드 멜렌 (에일 맥주)",
        price: 6,
      },
      {
        id: 3,
        name: "Britt 블랑쉬 (밀맥주)",
        price: 6,
      },
      { id: 4, name: "Kerné 드라이 시드르(사과주) 25cl", price: 4.5 },
      { id: 5, name: "Kerné 스위트 시드르(사과주) 75cl", price: 13 },
      { id: 6, name: "Kerné 드라이 시드르(사과주) 75cl", price: 13 },
    ],

    eau: [
      { id: 0, name: "Plancoët 일반 생수 50cl", price: 4 },
      { id: 1, name: "Plancoët 일반 생수 1L", price: 5 },
      { id: 2, name: "Plancoët 미세 탄산수 50cl", price: 4 },
      { id: 3, name: "Plancoët 미세 탄산수 1L", price: 5 },
    ],

    boissons_chaudes: [
      { id: 0, name: "Coïc 커피 (브르타뉴 현지 로스팅)", price: 3 },
      { id: 1, name: "Coïc 디카페인 커피 (브르타뉴 현지 로스팅)", price: 3 },
      { id: 2, name: "Dammann 다만 티", price: 3.5 },
      { id: 3, name: "따뜻한 우유 추가", price: 1.5 },
    ],
  },

  hours: {
    title: "연중무휴 (주 7일 영업)",
    weekdays: "월요일부터 토요일까지",
    weekdays_hours: "11:45 ~ 22:00",
    sunday: "일요일",
    sunday_hours: "11:45 ~ 17:00",
  },

  contact: {
    title: "문의하기",
    description: "예약이나 문의 사항이 있으시면 언제든지 연락해 주세요.",
    phone: "전화번호",
    reservation: "TheFork에서 예약하기",
    address: "주소",
    closing:
      "저희 크레페 전문점에 방문해 주셔서 맛있는 크레페와 갈레트를 맛보시기를 기대하고 있겠습니다!",
  },
};
