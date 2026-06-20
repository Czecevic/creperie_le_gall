export default {
  description:
    "Our sweet and savory crêpes are entirely homemade, from the batter to the fillings, using fresh ingredients selected directly from Brittany for an uncompromising authenticity.",

  menu: {
    title: "Our Menu",
    sweet: "Sweet",
    savory: "Savory",
  },

  crepes: {
    sucre: [
      {
        id: 0,
        name: "Butter & Sugar",
        description: "Semi-salted butter with granulated sugar.",
        price: 5,
      },
      {
        id: 1,
        name: "Lemon, Butter & Sugar",
        description:
          "Freshly squeezed lemon juice, granulated sugar, and semi-salted butter.",
        price: 5.5,
      },
      {
        id: 2,
        name: "Salted Butter Caramel",
        description: "Salted butter caramel.",
        price: 6.5,
      },
      {
        id: 3,
        name: "Honey & Walnuts",
        description: "Honey and walnuts.",
        price: 5.5,
      },
      {
        id: 4,
        name: "Strawberry or Blueberry Jam",
        description:
          "Strawberry or blueberry jam, according to your preference.",
        price: 5,
      },
      {
        id: 5,
        name: "Nutella",
        description: "Nutella and semi-salted butter.",
        price: 6,
      },
      {
        id: 6,
        name: "Nutella & Banana",
        description: "Nutella, semi-salted butter, and seasonal fruit.",
        price: 7,
      },
      {
        id: 7,
        name: "Nutella & Coconut",
        description: "Nutella, semi-salted butter, and shredded coconut.",
        price: 6.5,
      },
    ],

    sale: [
      {
        id: 0,
        name: "L'HENRIETTE",
        description: "Ham, shredded Emmental cheese, and egg.",
        price: 9,
      },
      {
        id: 1,
        name: "LA MICHELINE",
        description: "Spinach, onions, mushrooms, and tomato sauce.",
        price: 9.5,
      },
      {
        id: 2,
        name: "LA JACOTTE",
        description: "Emmental cheese, egg, bacon bits, and onions.",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE",
        description: "Reblochon cheese, bacon bits, potato, and crème fraîche.",
        price: 11,
      },
      {
        id: 4,
        name: "LA PASCALE",
        description: "Emmental cheese, chorizo, goat cheese, and tomato sauce.",
        price: 10,
      },
      {
        id: 5,
        name: "LA JEANNETTE",
        description: "Emmental cheese, salmon, spinach, and crème fraîche.",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE",
        description: "Emmental cheese, white ham, egg, and tomato sauce.",
        price: 10,
      },
      {
        id: 7,
        name: "LA MADELEINE",
        description: "Emmental cheese, egg, mushrooms, and crème fraîche.",
        price: 10,
      },
      {
        id: 8,
        name: "LA LUCETTE",
        description: "Emmental cheese, cured ham, and egg.",
        price: 9,
      },
      {
        id: 9,
        name: "LA TIPONETTE",
        description:
          "Emmental cheese, creamed leeks, bacon bits, and crème fraîche.",
        price: 10,
      },
      {
        id: 10,
        name: "LA KRISTINETTE",
        description:
          "Emmental cheese, creamed leeks, mushrooms, and crème fraîche.",
        price: 10,
      },
      {
        id: 11,
        name: "LA PIERRETTE",
        description: "Emmental cheese, goat cheese, honey, and walnuts.",
        price: 10,
      },
      {
        id: 12,
        name: "LA NICOLE",
        description:
          "Emmental cheese, Guémené andouille (traditional pork chitterling sausage), mushroom, and crème fraîche.",
        price: 10,
      },
    ],
  },

  boissons: {
    soda: [
      { id: 0, name: "Kerné Apple Juice", price: 4 },
      { id: 1, name: "Organic Sparkling Apple Juice", price: 4.5 },
      { id: 2, name: "Breizh Cola 33cl", price: 4.5 },
      { id: 3, name: "Breizh Cola Zero 33cl", price: 4.5 },
      { id: 4, name: "Breizh Tea 33cl", price: 4.5 },
      { id: 5, name: "Breizh Citrus 33cl", price: 4.5 },
    ],

    digestif: [
      {
        id: 0,
        name: "Chouchen d'Armor",
        desc: "To enjoy as an aperitif or digestif.",
        price: 5,
      },
      {
        id: 1,
        name: "Pommeau de Bretagne AOC",
        desc: "As an aperitif or paired with a sweet crêpe.",
        price: 5.5,
      },
      {
        id: 2,
        name: "Ty Jaune",
        desc: "The Breton pastis.",
        price: 4.5,
      },
      {
        id: 3,
        name: "Lambig de Bretagne AOC",
        desc: "Cider brandy.",
        price: 6,
      },
    ],

    bieres: [
      {
        id: 0,
        name: "Dremmwel, organic buckwheat beer",
        price: 6.5,
      },
      {
        id: 1,
        name: "Sant Erwann IPA",
        price: 6.5,
      },
      {
        id: 2,
        name: "Britt blonde melen (Blonde beer)",
        price: 6,
      },
      {
        id: 3,
        name: "Britt blanche (White beer)",
        price: 6,
      },
      { id: 4, name: "Kerné dry cider 25cl", price: 4.5 },
      { id: 5, name: "Kerné sweet cider 75cl", price: 13 },
      { id: 6, name: "Kerné dry cider 75cl", price: 13 },
    ],

    eau: [
      { id: 0, name: "Plancoët still water 50cl", price: 4 },
      { id: 1, name: "Plancoët still water 1L", price: 5 },
      { id: 2, name: "Plancoët gently sparkling water 50cl", price: 4 },
      { id: 3, name: "Plancoët gently sparkling water 1L", price: 5 },
    ],

    boissons_chaudes: [
      { id: 0, name: "Coïc Coffee, roasted in Brittany", price: 3 },
      { id: 1, name: "Coïc Decaf, roasted in Brittany", price: 3 },
      { id: 2, name: "Dammann Tea", price: 3.5 },
      { id: 3, name: "Extra hot milk", price: 1.5 },
    ],
  },

  hours: {
    title: "Open 7 days a week",
    weekdays: "Monday to Saturday",
    weekdays_hours: "From 11:00 AM to 10:00 PM",
    sunday: "Sunday",
    sunday_hours: "From 11:00 AM to 5:00 PM",
  },

  contact: {
    title: "Contact Us",
    description:
      "For any reservation or inquiry, please do not hesitate to contact us.",
    phone: "Phone",
    reservation: "Book on TheFork",
    address: "Address",
    closing:
      "We look forward to welcoming you to our crêperie and introducing you to our delicious crêpes!",
  },
};
