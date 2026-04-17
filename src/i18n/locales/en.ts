export default {
  description:
    "Our sweet and savoury crêpes are entirely homemade — from the batter to the fillings — using fresh ingredients sourced in Brittany, for uncompromising authenticity.",
  menu: {
    title: "Our Menu",
    sweet: "Sweet",
    savory: "Savoury",
  },
  crepes: {
    sucre: [
      {
        id: 0,
        name: "Butter, Sugar",
        description: "Semi-salted butter with powdered sugar.",
        price: 5,
      },
      {
        id: 1,
        name: "Lemon – Sugar",
        description:
          "Freshly squeezed lemon juice + powdered sugar + semi-salted butter.",
        price: 4,
      },
      {
        id: 2,
        name: "Salted Caramel Butter",
        description: "Salted butter caramel.",
        price: 6,
      },
      {
        id: 3,
        name: "Honey, Walnut",
        description: "Honey and walnuts.",
        price: 5,
      },
      {
        id: 4,
        name: "Strawberry or Blueberry Jam",
        description: "Strawberry or blueberry jam, your choice.",
        price: 5,
      },
      {
        id: 5,
        name: "Nutella",
        description: "Nutella + semi-salted butter.",
        price: 5,
      },
      {
        id: 6,
        name: "Nutella, seasonal fruit",
        description: "Nutella + semi-salted butter + seasonal fruit.",
        price: 5,
      },
    ],
    sale: [
      {
        id: 0,
        name: "L'HENRIETTE",
        description: "Ham + grated emmental + egg.",
        price: 10,
      },
      {
        id: 1,
        name: "LA MICHELINE",
        description: "Emmental, mushrooms, tomato sauce.",
        price: 9,
      },
      {
        id: 2,
        name: "LA JACOTTE",
        description: "Emmental, egg, bacon bits, onions.",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE",
        description: "Reblochon, bacon bits, potato, crème fraîche.",
        price: 9,
      },
      {
        id: 4,
        name: "LA PASCALE",
        description: "Emmental, chorizo, onion, tomato sauce.",
        price: 12,
      },
      {
        id: 5,
        name: "LA JEANNETTE",
        description: "Emmental, tuna, onions, tomato sauce.",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE",
        description: "Emmental, cooked ham, egg, tomato sauce.",
        price: 12,
      },
      {
        id: 7,
        name: "LA MADELEINE",
        description: "Emmental, egg, mushrooms, crème fraîche.",
        price: 12,
      },
      {
        id: 8,
        name: "LA LUCETTE",
        description: "Emmental, cured ham, egg.",
        price: 12,
      },
      {
        id: 9,
        name: "LA TIPONETTE",
        description: "Emmental, braised leeks, bacon bits.",
        price: 12,
      },
      {
        id: 10,
        name: "LA KRISTINETTE",
        description: "Emmental, braised leeks, mushrooms.",
        price: 12,
      },
      {
        id: 11,
        name: "LA PIERRETTE",
        description: "Emmental, goat cheese, honey, walnuts.",
        price: 12,
      },
      {
        id: 12,
        name: "LA NICOLE",
        description: "Emmental, spinach, cream.",
        price: 12,
      },
    ],
  },
  boissons: {
    soda: [
      { id: 0, name: "Kerné apple juice", price: 4 },
      { id: 1, name: "Organic sparkling apple juice", price: 4.5 },
      { id: 2, name: "Breizh cola 33cl", price: 4.5 },
      { id: 3, name: "Breizh cola zero 33cl", price: 4.5 },
      { id: 4, name: "Breizh tea 33cl", price: 4.5 },
      { id: 5, name: "Breizh citrus 33cl", price: 4.5 },
      { id: 6, name: "Kerné dry cider 25cl", price: 4.5 },
      { id: 7, name: "Kerné sweet cider 75cl", price: 13 },
      { id: 8, name: "Kerné dry cider 75cl", price: 13 },
    ],
    digestif: [
      {
        id: 0,
        name: "Chouchen d'Armor",
        desc: "to enjoy as an aperitif or digestif",
        price: 5,
      },
      {
        id: 1,
        name: "Pommeau de Bretagne AOC",
        desc: "as an aperitif or with a sweet crêpe",
        price: 5.5,
      },
      { id: 2, name: "Ty Jaune", desc: "the Breton pastis", price: 4.5 },
      { id: 3, name: "Lambig de Bretagne AOC", desc: "cider brandy", price: 6 },
    ],
    bieres: [
      { id: 0, name: "Dremmwel, organic buckwheat beer", price: 6.5 },
      { id: 1, name: "Sant Erwann IPA", price: 6.5 },
      { id: 2, name: "Britt blonde melen", price: 6 },
      { id: 3, name: "Britt white", price: 6 },
    ],
    eau: [
      { id: 0, name: "Plancoët still 50cl", price: 4 },
      { id: 1, name: "Plancoët still 1L", price: 5 },
      { id: 2, name: "Plancoët sparkling 50cl", price: 4 },
      { id: 3, name: "Plancoët sparkling 1L", price: 5 },
    ],
    boissons_chaudes: [
      { id: 0, name: "Coïc coffee, roasted in Brittany", price: 3 },
      { id: 1, name: "Coïc decaf, roasted in Brittany", price: 3 },
      { id: 2, name: "Dammann tea", price: 3.5 },
      { id: 3, name: "Hot milk supplement", price: 1.5 },
    ],
  },
  hours: {
    title: "Open 7 days / 7",
    weekdays: "Monday to Saturday",
    weekdays_hours: "From 11:45am to 10pm",
    sunday: "Sunday",
    sunday_hours: "From 11:45am to 5pm",
  },
  contact: {
    title: "Contact Us",
    description:
      "For any reservation or inquiry, feel free to get in touch with us",
    phone: "Phone",
    reservation: "Book on TheFork",
    address: "Address",
    closing:
      "We look forward to welcoming you to our crêperie and sharing our delicious crêpes with you!",
  },
};
