export default {
  description:
    "当店のクレープとガレット（お食事クレープ）は、生地から具材に至るまで全て自家製です。妥協のない本物の味をお届けするため、ブルターニュ地方から厳選された新鮮な食材のみを使用しています。",

  menu: {
    title: "メニュー",
    sweet: "スイーツ・クレープ",
    savory: "ガレット（お食事系）",
  },

  crepes: {
    sucre: [
      {
        id: 0,
        name: "エシレ風有塩バター＆シュガー",
        description: "有塩バターとグラニュー糖のクラシッククレープ。",
        price: 5,
      },
      {
        id: 1,
        name: "レモン、バター＆シュガー",
        description: "絞りたてレモン果汁、グラニュー糖、有塩バター。",
        price: 5.5,
      },
      {
        id: 2,
        name: "塩バターキャラメル",
        description: "自家製の塩バターキャラメルソース。",
        price: 6.5,
      },
      {
        id: 3,
        name: "蜂蜜＆くるみ",
        description: "厳選蜂蜜と香ばしいくるみ。",
        price: 5.5,
      },
      {
        id: 4,
        name: "ストロベリーまたはブルーベリージャム",
        description:
          "お好みに合わせて、イチゴかブルーベリーのジャムをお選びいただけます。",
        price: 5,
      },
      {
        id: 5,
        name: "ヌテラ",
        description: "ヌテラ（チョコレートスプレッド）と有塩バター。",
        price: 6,
      },
      {
        id: 6,
        name: "ヌテラ・バナナ",
        description: "ヌテラ、有塩バター、季節のフルーツ（バナナ）。",
        price: 7,
      },
      {
        id: 7,
        name: "ヌテラ・ココナッツ",
        description: "ヌテラ、有塩バター、ココナッツファイン。",
        price: 6.5,
      },
    ],

    sale: [
      {
        id: 0,
        name: "L'HENRIETTE（アンリエット）",
        description: "ハム、エメンタールチーズ、卵。",
        price: 9,
      },
      {
        id: 1,
        name: "LA MICHELINE（ミシュリーヌ）",
        description: "ほうれん草、玉ねぎ、マッシュルーム、トマトソース。",
        price: 9.5,
      },
      {
        id: 2,
        name: "LA JACOTTE（ジャコット）",
        description: "エメンタールチーズ、卵、ベーコン、玉ねぎ。",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE（マルティーヌ）",
        description:
          "ルブロションチーズ、ベーコン、じゃがいも、クレームフレーシュ（サワークリーム）。",
        price: 11,
      },
      {
        id: 4,
        name: "LA PASCALE（パスカル）",
        description:
          "エメンタールチーズ、チョリソー、ヤギのチーズ、トマトソース。",
        price: 10,
      },
      {
        id: 5,
        name: "LA JEANNETTE（ジャネット）",
        description:
          "エメンタールチーズ、サーモン、ほうれん草、クレームフレーシュ。",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE（アンリエット・トマト）",
        description: "エメンタールチーズ、白ハム、卵、トマトソース。",
        price: 10,
      },
      {
        id: 7,
        name: "LA MADELEINE（マドレーヌ）",
        description:
          "エメンタールチーズ、卵、マッシュルーム、クレームフレーシュ。",
        price: 10,
      },
      {
        id: 8,
        name: "LA LUCETTE（リュセット）",
        description: "エメンタールチーズ、生ハム、卵。",
        price: 9,
      },
      {
        id: 9,
        name: "LA TIPONETTE（ティポネット）",
        description:
          "エメンタールチーズ、ポロネギのフォンデュ、ベーコン、クレームフレーシュ。",
        price: 10,
      },
      {
        id: 10,
        name: "LA KRISTINETTE（クリスチネット）",
        description:
          "エメンタールチーズ、ポロネギのフォンデュ、マッシュルーム、クレームフレーシュ。",
        price: 10,
      },
      {
        id: 11,
        name: "LA PIERRETTE（ピエレット）",
        description: "エメンタールチーズ、ヤギのチーズ、蜂蜜、くるみ。",
        price: 10,
      },
      {
        id: 12,
        name: "LA NICOLE（ニコール）",
        description:
          "エメンタールチーズ、ゲメネの小腸白ソーセージ（アンドゥイユ）、マッシュルーム、クレームフレーシュ。",
        price: 10,
      },
    ],
  },

  boissons: {
    soda: [
      { id: 0, name: "ケルネ アップルジュース", price: 4 },
      { id: 1, name: "有機スパークリングアップルジュース", price: 4.5 },
      { id: 2, name: "ブレッツ・コーラ 33cl", price: 4.5 },
      { id: 3, name: "ブレッツ・コーラ・ゼロ 33cl", price: 4.5 },
      { id: 4, name: "ブレッツ・ティー 33cl", price: 4.5 },
      { id: 5, name: "ブレッツ・シトラス 33cl", price: 4.5 },
    ],

    digestif: [
      {
        id: 0,
        name: "シューシェン・ダルモール",
        desc: "ブルターニュ伝統の蜂蜜酒。アペリティフ（食前酒）またはディジェスティフ（食后酒）として。",
        price: 5,
      },
      {
        id: 1,
        name: "ポモー・ド・ブルターニュ AOC",
        desc: "リンゴのリキュール。食前酒として、またはスイーツ系クレープと一緒に。",
        price: 5.5,
      },
      {
        id: 2,
        name: "ティ・ジョーヌ",
        desc: "ブルターニュ風のパティス（アニス酒）。",
        price: 4.5,
      },
      {
        id: 3,
        name: "ランビグ・ド・ブルターニュ AOC",
        desc: "リンゴのブランデー（カルヴァドス風）。",
        price: 6,
      },
    ],

    bieres: [
      {
        id: 0,
        name: "ドレムウェル（有機そば粉ビール）",
        price: 6.5,
      },
      {
        id: 1,
        name: "サン・エルワン IPA",
        price: 6.5,
      },
      {
        id: 2,
        name: "ブリット・ブロンド・メレン（ブロンドビール）",
        price: 6,
      },
      {
        id: 3,
        name: "ブリット・ブランシュ（白ビール）",
        price: 6,
      },
      { id: 4, name: "シードル・ブリュット（辛口）ケルネ 25cl", price: 4.5 },
      { id: 5, name: "シードル・ドゥー（甘口）ケルネ 75cl", price: 13 },
      { id: 6, name: "シードル・ブリュット（辛口）ケルネ 75cl", price: 13 },
    ],

    eau: [
      { id: 0, name: "プランコエ 水（無炭酸） 50cl", price: 4 },
      { id: 1, name: "プランコエ 水（無炭酸） 1L", price: 5 },
      { id: 2, name: "プランコエ 微炭酸水 50cl", price: 4 },
      { id: 3, name: "プランコエ 微炭酸水 1L", price: 5 },
    ],

    boissons_chaudes: [
      { id: 0, name: "コイック・コーヒー（ブルターニュ自家焙煎）", price: 3 },
      { id: 1, name: "コイック・デカフェ（ブルターニュ自家焙煎）", price: 3 },
      { id: 2, name: "ダマン・フレール紅茶", price: 3.5 },
      { id: 3, name: "追加ホットミルク", price: 1.5 },
    ],
  },

  hours: {
    title: "年中無休（週7日営業）",
    weekdays: "月曜日から土曜日まで",
    weekdays_hours: "11:00 〜 22:00",
    sunday: "日曜日",
    sunday_hours: "11:00 〜 17:00",
  },

  contact: {
    title: "お問い合わせ",
    description:
      "ご予約やお問い合わせがございましたら、お気軽にご連絡ください。",
    phone: "電話番号",
    reservation: "TheForkで予約する",
    address: "住所",
    closing:
      "当クレープリーへ皆様をお迎えし、自慢のクレープやガレットを召し上がっていただけることを心より楽しみにしています！",
  },
};
