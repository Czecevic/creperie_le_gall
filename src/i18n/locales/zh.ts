export default {
  description:
    "我们的甜味与咸味可丽饼均为纯手工制作，从面糊到内馅，均选用采购自布列塔尼的优质新鲜食材，为您奉上毫不妥协的正宗美味。",

  menu: {
    title: "我们的菜单",
    sweet: "甜味可丽饼",
    savory: "咸味荞麦饼",
  },

  crepes: {
    sucre: [
      {
        id: 0,
        name: "黄油白糖",
        description: "半盐黄油搭配白砂糖。",
        price: 5,
      },
      {
        id: 1,
        name: "柠檬黄油白糖",
        description: "现榨柠檬汁、白砂糖配半盐黄油。",
        price: 5.5,
      },
      {
        id: 2,
        name: "盐花焦糖",
        description: "焦糖配海盐黄油。",
        price: 6.5,
      },
      {
        id: 3,
        name: "蜂蜜核桃",
        description: "蜂蜜与核桃仁。",
        price: 5.5,
      },
      {
        id: 4,
        name: "草莓或蓝莓果酱",
        description: "根据您的喜好，可选草莓或蓝莓果酱。",
        price: 5,
      },
      {
        id: 5,
        name: "能多益巧克力酱",
        description: "Nutella能多益酱配半盐黄油。",
        price: 6,
      },
      {
        id: 6,
        name: "能多益香蕉",
        description: "Nutella能多益酱、半盐黄油和时令水果（香蕉）。",
        price: 7,
      },
      {
        id: 7,
        name: "能多益椰蓉",
        description: "Nutella能多益酱、半盐黄油和椰丝。",
        price: 6.5,
      },
    ],

    sale: [
      {
        id: 0,
        name: "L'HENRIETTE",
        description: "火腿、埃曼塔尔丝和大区鸡蛋。",
        price: 9,
      },
      {
        id: 1,
        name: "LA MICHELINE",
        description: "菠菜、洋葱、蘑菇和番茄酱。",
        price: 9.5,
      },
      {
        id: 2,
        name: "LA JACOTTE",
        description: "埃曼塔尔干酪、鸡蛋、培根碎和洋葱。",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE",
        description: "勒布洛雄干酪、培根碎、土豆和法式酸奶油。",
        price: 11,
      },
      {
        id: 4,
        name: "LA PASCALE",
        description: "埃曼塔尔干酪、乔利佐香肠、山羊奶酪和番茄酱。",
        price: 10,
      },
      {
        id: 5,
        name: "LA JEANNETTE",
        description: "埃曼塔尔干酪、三文鱼、菠菜和法式酸奶油。",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE",
        description: "埃曼塔尔干酪、白火腿、鸡蛋和番茄酱。",
        price: 10,
      },
      {
        id: 7,
        name: "LA MADELEINE",
        description: "埃曼塔尔干酪、鸡蛋、蘑菇和法式酸奶油。",
        price: 10,
      },
      {
        id: 8,
        name: "LA LUCETTE",
        description: "埃曼塔尔干酪、生火腿和鸡蛋。",
        price: 9,
      },
      {
        id: 9,
        name: "LA TIPONETTE",
        description: "埃曼塔尔干酪、奶油焖韭葱、培根碎和法式酸奶油。",
        price: 10,
      },
      {
        id: 10,
        name: "LA KRISTINETTE",
        description: "埃曼塔尔干酪、奶油焖韭葱、蘑菇和法式酸奶油。",
        price: 10,
      },
      {
        id: 11,
        name: "LA PIERRETTE",
        description: "埃曼塔尔干酪、山羊奶酪、蜂蜜和核桃。",
        price: 10,
      },
      {
        id: 12,
        name: "LA NICOLE",
        description: "埃曼塔尔干酪、盖梅内吉姆内熏肠、蘑菇和法式酸奶油。",
        price: 10,
      },
    ],
  },

  boissons: {
    soda: [
      { id: 0, name: "Kerné 苹果汁", price: 4 },
      { id: 1, name: "有机气泡苹果汁", price: 4.5 },
      { id: 2, name: "布列塔尼可乐 33cl", price: 4.5 },
      { id: 3, name: "布列塔尼零度可乐 33cl", price: 4.5 },
      { id: 4, name: "布列塔尼茶饮料 33cl", price: 4.5 },
      { id: 5, name: "布列塔尼柑橘汽水 33cl", price: 4.5 },
    ],

    digestif: [
      {
        id: 0,
        name: "Chouchen d'Armor",
        desc: "布列塔尼传统蜂蜜酒，可作为餐前酒或餐后酒享用。",
        price: 5,
      },
      {
        id: 1,
        name: "Pommeau de Bretagne AOC",
        desc: "苹果利口酒，适合作为餐前酒或搭配甜可丽饼。",
        price: 5.5,
      },
      {
        id: 2,
        name: "Ty Jaune",
        desc: "布列塔尼茴香酒。",
        price: 4.5,
      },
      {
        id: 3,
        name: "Lambig de Bretagne AOC",
        desc: "布列塔尼苹果烧酒（白兰地）。",
        price: 6,
      },
    ],

    bieres: [
      {
        id: 0,
        name: "Dremmwel 有机荞麦啤酒",
        price: 6.5,
      },
      {
        id: 1,
        name: "Sant Erwann IPA 啤酒",
        price: 6.5,
      },
      {
        id: 2,
        name: "Britt 黄色金黄啤酒",
        price: 6,
      },
      {
        id: 3,
        name: "Britt 白啤酒",
        price: 6,
      },
      { id: 4, name: "Kerné 传统干苹果酒 25cl", price: 4.5 },
      { id: 5, name: "Kerné 传统甜苹果酒 75cl", price: 13 },
      { id: 6, name: "Kerné 传统干苹果酒 75cl", price: 13 },
    ],

    eau: [
      { id: 0, name: "Plancoët 纯净矿泉水 50cl", price: 4 },
      { id: 1, name: "Plancoët 纯净矿泉水 1L", price: 5 },
      { id: 2, name: "Plancoët 微气泡矿泉水 50cl", price: 4 },
      { id: 3, name: "Plancoët 微气泡矿泉水 1L", price: 5 },
    ],

    boissons_chaudes: [
      { id: 0, name: "Coïc 咖啡（布列塔尼本地烘焙）", price: 3 },
      { id: 1, name: "Coïc 低因咖啡（布列塔尼本地烘焙）", price: 3 },
      { id: 2, name: "Dammann 达曼茶", price: 3.5 },
      { id: 3, name: "加点热牛奶", price: 1.5 },
    ],
  },

  hours: {
    title: "每周7天营业",
    weekdays: "周一至周六",
    weekdays_hours: "11:00 至 22:00",
    sunday: "周日",
    sunday_hours: "11:00 至 17:00",
  },

  contact: {
    title: "联系我们",
    description: "如有任何订位或信息咨询，请随时与我们联系。",
    phone: "电话",
    reservation: "在 TheFork 上预订",
    address: "地址",
    closing:
      "我们迫不及待地欢迎您光临我们的可丽饼店，并带您探索我们美味的可丽饼！",
  },
};
