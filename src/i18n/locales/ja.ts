export default {
  description:
    "甘いクレープも塩味のクレープも、生地からフィリングまですべて手作り。ブルターニュ産の新鮮な食材にこだわり、本物の味をお届けします。",
  menu: {
    title: "メニュー",
    sweet: "スイート",
    savory: "セイボリー",
  },
  crepes: {
    sucre: [
      {
        id: 0,
        name: "バター、砂糖",
        description: "半塩バターと粉砂糖。",
        price: 5,
      },
      {
        id: 1,
        name: "レモン – 砂糖",
        description: "搾りたてレモン汁 + 粉砂糖 + 半塩バター。",
        price: 4,
      },
      {
        id: 2,
        name: "塩キャラメルバター",
        description: "塩バターキャラメル。",
        price: 6,
      },
      {
        id: 3,
        name: "はちみつ、くるみ",
        description: "はちみつとくるみ。",
        price: 5,
      },
      {
        id: 4,
        name: "いちごまたはブルーベリージャム",
        description: "いちごジャムまたはブルーベリージャム、お好みで。",
        price: 5,
      },
      { id: 5, name: "ヌテラ", description: "ヌテラ + 半塩バター。", price: 5 },
      {
        id: 6,
        name: "ヌテラ、旬のフルーツ",
        description: "ヌテラ + 半塩バター + 旬のフルーツ。",
        price: 5,
      },
    ],
    sale: [
      {
        id: 0,
        name: "L'HENRIETTE",
        description: "ハム + すりおろしエメンタールチーズ + 卵。",
        price: 10,
      },
      {
        id: 1,
        name: "LA MICHELINE",
        description: "エメンタールチーズ、マッシュルーム、トマトソース。",
        price: 9,
      },
      {
        id: 2,
        name: "LA JACOTTE",
        description: "エメンタールチーズ、卵、ベーコン、玉ねぎ。",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE",
        description:
          "ルブロションチーズ、ベーコン、じゃがいも、クレームフレッシュ。",
        price: 9,
      },
      {
        id: 4,
        name: "LA PASCALE",
        description: "エメンタールチーズ、チョリソー、玉ねぎ、トマトソース。",
        price: 12,
      },
      {
        id: 5,
        name: "LA JEANNETTE",
        description: "エメンタールチーズ、ツナ、玉ねぎ、トマトソース。",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE",
        description: "エメンタールチーズ、ハム、卵、トマトソース。",
        price: 12,
      },
      {
        id: 7,
        name: "LA MADELEINE",
        description:
          "エメンタールチーズ、卵、マッシュルーム、クレームフレッシュ。",
        price: 12,
      },
      {
        id: 8,
        name: "LA LUCETTE",
        description: "エメンタールチーズ、生ハム、卵。",
        price: 12,
      },
      {
        id: 9,
        name: "LA TIPONETTE",
        description: "エメンタールチーズ、ブレゼポワロー、ベーコン。",
        price: 12,
      },
      {
        id: 10,
        name: "LA KRISTINETTE",
        description: "エメンタールチーズ、ブレゼポワロー、マッシュルーム。",
        price: 12,
      },
      {
        id: 11,
        name: "LA PILOUTE",
        description: "エメンタールチーズ、ほうれん草、クリーム。",
        price: 12,
      },
    ],
  },
  boissons: {
    soda: [
      { id: 0, name: "ケルネのアップルジュース", price: 4 },
      { id: 1, name: "オーガニック炭酸アップルジュース", price: 4.5 },
      { id: 2, name: "ブレイズコーラ 33cl", price: 4.5 },
      { id: 3, name: "ブレイズコーラゼロ 33cl", price: 4.5 },
      { id: 4, name: "ブレイズティー 33cl", price: 4.5 },
      { id: 5, name: "ブレイズシトラス 33cl", price: 4.5 },
      { id: 6, name: "ケルネ辛口シードル 25cl", price: 4.5 },
      { id: 7, name: "ケルネ甘口シードル 75cl", price: 13 },
      { id: 8, name: "ケルネ辛口シードル 75cl", price: 13 },
    ],
    digestif: [
      {
        id: 0,
        name: "シュシェン・ダルモール",
        desc: "食前酒または食後酒としてどうぞ",
        price: 5,
      },
      {
        id: 1,
        name: "ポモー・ド・ブルターニュ AOC",
        desc: "食前酒として、または甘いクレープと一緒に",
        price: 5.5,
      },
      {
        id: 2,
        name: "ティ・ジョーヌ",
        desc: "ブルトンのパスティス",
        price: 4.5,
      },
      {
        id: 3,
        name: "ランビック・ド・ブルターニュ AOC",
        desc: "シードルブランデー",
        price: 6,
      },
    ],
    bieres: [
      { id: 0, name: "ドレムヴェル、オーガニックそばビール", price: 6.5 },
      { id: 1, name: "サン・テルワン IPA", price: 6.5 },
      { id: 2, name: "ブリット・ブロンド・メレン", price: 6 },
      { id: 3, name: "ブリット・ブランシュ", price: 6 },
    ],
    eau: [
      { id: 0, name: "プランクエ 微炭酸なし 50cl", price: 4 },
      { id: 1, name: "プランクエ 微炭酸なし 1L", price: 5 },
      { id: 2, name: "プランクエ 微炭酸あり 50cl", price: 4 },
      { id: 3, name: "プランクエ 微炭酸あり 1L", price: 5 },
    ],
    boissons_chaudes: [
      { id: 0, name: "コイクコーヒー、ブルターニュ焙煎", price: 3 },
      { id: 1, name: "コイクデカフェ、ブルターニュ焙煎", price: 3 },
      { id: 2, name: "ダマンティー", price: 3.5 },
      { id: 3, name: "ホットミルク追加", price: 1.5 },
    ],
  },
  hours: {
    title: "年中無休（週7日営業）",
    weekdays: "月曜日〜土曜日",
    weekdays_hours: "11時45分〜22時",
    sunday: "日曜日",
    sunday_hours: "11時45分〜17時",
  },
  contact: {
    title: "お問い合わせ",
    description: "ご予約やお問い合わせは、お気軽にご連絡ください",
    phone: "電話番号",
    reservation: "TheForkで予約",
    address: "住所",
    closing: "クレープリーでみなさまのご来店を心よりお待ちしております！",
  },
};
