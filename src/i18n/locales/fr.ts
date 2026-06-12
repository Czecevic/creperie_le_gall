export default {
  description:
    "Nos crêpes sucrées et salées sont entièrement faites maison, de la pâte aux garnitures, à partir d’ingrédients frais sélectionnés en Bretagne, pour une authenticité sans compromis.",

  menu: {
    title: "Notre menu",
    sweet: "Sucrées",
    savory: "Salées",
  },

  crepes: {
    sucre: [
      {
        id: 0,
        name: "Beurre, sucre",
        description: "Beurre demi-sel avec sucre en poudre.",
        price: 5,
      },
      {
        id: 1,
        name: "Citron, beurre, sucre",
        description:
          "Jus de citron pressé, sucre en poudre et beurre demi-sel.",
        price: 5.5,
      },
      {
        id: 2,
        name: "Caramel beurre salé",
        description: "Caramel au beurre salé.",
        price: 6.5,
      },
      {
        id: 3,
        name: "Miel, noix",
        description: "Miel et noix.",
        price: 5.5,
      },
      {
        id: 4,
        name: "Confiture fraise ou myrtille",
        description: "Confiture de fraise ou de myrtille selon vos envies.",
        price: 5,
      },
      {
        id: 5,
        name: "Nutella",
        description: "Nutella et beurre demi-sel.",
        price: 6,
      },
      {
        id: 6,
        name: "Nutella, banane",
        description: "Nutella, beurre demi-sel et fruit du moment.",
        price: 7,
      },
      {
        id: 7,
        name: "Nutella, coco",
        description: "Nutella, beurre demi-sel et fruit du moment.",
        price: 6.5,
      },
    ],

    sale: [
      {
        id: 0,
        name: "L'HENRIETTE",
        description: "Jambon, emmental râpé et œuf.",
        price: 9,
      },
      {
        id: 1,
        name: "LA MICHELINE",
        description: "Épinards, oignons, champignons et sauce tomate.",
        price: 9.5,
      },
      {
        id: 2,
        name: "LA JACOTTE",
        description: "Emmental, œuf, lardons et oignons.",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE",
        description: "Reblochon, lardons, pomme de terre et crème fraîche.",
        price: 11,
      },
      {
        id: 4,
        name: "LA PASCALE",
        description: "Emmental, chorizo, chèvre et sauce tomate.",
        price: 10,
      },
      {
        id: 5,
        name: "LA JEANNETTE",
        description: "Emmental, saumon, épinards et crème fraiche.",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE",
        description: "Emmental, jambon blanc, œuf et sauce tomate.",
        price: 10,
      },
      {
        id: 7,
        name: "LA MADELEINE",
        description: "Emmental, œuf, champignons et crème fraîche.",
        price: 10,
      },
      {
        id: 8,
        name: "LA LUCETTE",
        description: "Emmental, jambon cru et œuf.",
        price: 9,
      },
      {
        id: 9,
        name: "LA TIPONETTE",
        description: "Emmental, fondue de poireaux, lardons et crème fraiche.",
        price: 10,
      },
      {
        id: 10,
        name: "LA KRISTINETTE",
        description:
          "Emmental, fondue de poireaux, champignons et crème fraiche.",
        price: 10,
      },
      {
        id: 11,
        name: "LA PIERRETTE",
        description: "Emmental, chèvre, miel et noix.",
        price: 10,
      },
      {
        id: 12,
        name: "LA NICOLE",
        description:
          "Emmental, andouille de Guémené, champignon et crème fraiche.",
        price: 10,
      },
    ],
  },

  boissons: {
    soda: [
      { id: 0, name: "Jus de pomme Kerné", price: 4 },
      { id: 1, name: "Jus de pomme pétillant bio", price: 4.5 },
      { id: 2, name: "Breizh Cola 33cl", price: 4.5 },
      { id: 3, name: "Breizh Cola zéro 33cl", price: 4.5 },
      { id: 4, name: "Breizh Tea 33cl", price: 4.5 },
      { id: 5, name: "Breizh Agrumes 33cl", price: 4.5 },
    ],

    digestif: [
      {
        id: 0,
        name: "Chouchen d'Armor",
        desc: "À déguster en apéritif ou digestif.",
        price: 5,
      },
      {
        id: 1,
        name: "Pommeau de Bretagne AOC",
        desc: "Comme apéritif ou avec une crêpe sucrée.",
        price: 5.5,
      },
      {
        id: 2,
        name: "Ty Jaune",
        desc: "Le pastis breton.",
        price: 4.5,
      },
      {
        id: 3,
        name: "Lambig de Bretagne AOC",
        desc: "Eau-de-vie de cidre.",
        price: 6,
      },
    ],

    bieres: [
      {
        id: 0,
        name: "Dremmwel, bière au blé noir bio",
        price: 6.5,
      },
      {
        id: 1,
        name: "Sant Erwann IPA",
        price: 6.5,
      },
      {
        id: 2,
        name: "Britt blonde melen",
        price: 6,
      },
      {
        id: 3,
        name: "Britt blanche",
        price: 6,
      },
      { id: 4, name: "Cidre brut Kerné 25cl", price: 4.5 },
      { id: 5, name: "Cidre doux Kerné 75cl", price: 13 },
      { id: 6, name: "Cidre brut Kerné 75cl", price: 13 },
    ],

    eau: [
      { id: 0, name: "Plancoët plate 50cl", price: 4 },
      { id: 1, name: "Plancoët plate 1L", price: 5 },
      { id: 2, name: "Plancoët fine bulle 50cl", price: 4 },
      { id: 3, name: "Plancoët fine bulle 1L", price: 5 },
    ],

    boissons_chaudes: [
      { id: 0, name: "Café Coïc, torréfié en Bretagne", price: 3 },
      { id: 1, name: "Décaféiné Coïc, torréfié en Bretagne", price: 3 },
      { id: 2, name: "Thé Dammann", price: 3.5 },
      { id: 3, name: "Supplément lait chaud", price: 1.5 },
    ],
  },

  hours: {
    title: "Ouvert 7 jours / 7",
    weekdays: "Du lundi au samedi",
    weekdays_hours: "De 11h45 à 22h",
    sunday: "Le dimanche",
    sunday_hours: "De 11h45 à 17h",
  },

  contact: {
    title: "Contactez-nous",
    description:
      "Pour toute réservation ou demande d’information, n’hésitez pas à nous contacter.",
    phone: "Téléphone",
    reservation: "Réserver sur TheFork",
    address: "Adresse",
    closing:
      "Nous sommes impatients de vous accueillir dans notre crêperie et de vous faire découvrir nos délicieuses crêpes !",
  },
};
