export default {
  description:
    "Nuestros crepes dulces y salados están completamente hechos en casa — de la masa a los rellenos — con ingredientes frescos seleccionados en Bretaña, para una autenticidad sin compromiso.",
  menu: {
    title: "Nuestro Menú",
    sweet: "Dulces",
    savory: "Salados",
  },
  crepes: {
    sucre: [
      {
        id: 0,
        name: "Mantequilla, Azúcar",
        description: "Mantequilla semisalada con azúcar en polvo.",
        price: 5,
      },
      {
        id: 1,
        name: "Limón – Azúcar",
        description:
          "Zumo de limón exprimido + azúcar en polvo + mantequilla semisalada.",
        price: 4,
      },
      {
        id: 2,
        name: "Caramelo de Mantequilla Salada",
        description: "Caramelo de mantequilla salada.",
        price: 6,
      },
      { id: 3, name: "Miel, Nueces", description: "Miel y nueces.", price: 5 },
      {
        id: 4,
        name: "Mermelada de Fresa o Arándano",
        description: "Mermelada de fresa o arándano, según sus preferencias.",
        price: 5,
      },
      {
        id: 5,
        name: "Nutella",
        description: "Nutella + mantequilla semisalada.",
        price: 5,
      },
      {
        id: 6,
        name: "Nutella, fruta de temporada",
        description: "Nutella + mantequilla semisalada + fruta de temporada.",
        price: 5,
      },
    ],
    sale: [
      {
        id: 0,
        name: "L'HENRIETTE",
        description: "Jamón + emmental rallado + huevo.",
        price: 10,
      },
      {
        id: 1,
        name: "LA MICHELINE",
        description: "Emmental, champiñones, salsa de tomate.",
        price: 9,
      },
      {
        id: 2,
        name: "LA JACOTTE",
        description: "Emmental, huevo, taquitos de bacon, cebolla.",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE",
        description: "Reblochon, taquitos de bacon, patata, crème fraîche.",
        price: 9,
      },
      {
        id: 4,
        name: "LA PASCALE",
        description: "Emmental, chorizo, cebolla, salsa de tomate.",
        price: 12,
      },
      {
        id: 5,
        name: "LA JEANNETTE",
        description: "Emmental, atún, cebolla, salsa de tomate.",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE",
        description: "Emmental, jamón cocido, huevo, salsa de tomate.",
        price: 12,
      },
      {
        id: 7,
        name: "LA MADELEINE",
        description: "Emmental, huevo, champiñones, crème fraîche.",
        price: 12,
      },
      {
        id: 8,
        name: "LA LUCETTE",
        description: "Emmental, jamón curado, huevo.",
        price: 12,
      },
      {
        id: 9,
        name: "LA TIPONETTE",
        description: "Emmental, puerros estofados, taquitos de bacon.",
        price: 12,
      },
      {
        id: 10,
        name: "LA KRISTINETTE",
        description: "Emmental, puerros estofados, champiñones.",
        price: 12,
      },
      {
        id: 11,
        name: "LA PILOUTE",
        description: "Emmental, espinacas, nata.",
        price: 12,
      },
    ],
  },
  boissons: {
    soda: [
      { id: 0, name: "Zumo de manzana Kerné", price: 4 },
      { id: 1, name: "Zumo de manzana con gas ecológico", price: 4.5 },
      { id: 2, name: "Breizh cola 33cl", price: 4.5 },
      { id: 3, name: "Breizh cola zero 33cl", price: 4.5 },
      { id: 4, name: "Breizh tea 33cl", price: 4.5 },
      { id: 5, name: "Breizh cítricos 33cl", price: 4.5 },
      { id: 6, name: "Sidra brut Kerné 25cl", price: 4.5 },
      { id: 7, name: "Sidra dulce Kerné 75cl", price: 13 },
      { id: 8, name: "Sidra brut Kerné 75cl", price: 13 },
    ],
    digestif: [
      {
        id: 0,
        name: "Chouchen d'Armor",
        desc: "para degustar como aperitivo o digestivo",
        price: 5,
      },
      {
        id: 1,
        name: "Pommeau de Bretagne AOC",
        desc: "como aperitivo o para degustar con un crepe dulce",
        price: 5.5,
      },
      { id: 2, name: "Ty Jaune", desc: "el pastis bretón", price: 4.5 },
      {
        id: 3,
        name: "Lambig de Bretagne AOC",
        desc: "aguardiente de sidra",
        price: 6,
      },
    ],
    bieres: [
      {
        id: 0,
        name: "Dremmwel, cerveza de trigo sarraceno ecológico",
        price: 6.5,
      },
      { id: 1, name: "Sant Erwann IPA", price: 6.5 },
      { id: 2, name: "Britt rubia melen", price: 6 },
      { id: 3, name: "Britt blanca", price: 6 },
    ],
    eau: [
      { id: 0, name: "Plancoët sin gas 50cl", price: 4 },
      { id: 1, name: "Plancoët sin gas 1L", price: 5 },
      { id: 2, name: "Plancoët con gas 50cl", price: 4 },
      { id: 3, name: "Plancoët con gas 1L", price: 5 },
    ],
    boissons_chaudes: [
      { id: 0, name: "Café Coïc, tostado en Bretaña", price: 3 },
      { id: 1, name: "Descafeinado Coïc, tostado en Bretaña", price: 3 },
      { id: 2, name: "Té Dammann", price: 3.5 },
      { id: 3, name: "Suplemento leche caliente", price: 1.5 },
    ],
  },
  hours: {
    title: "Abierto 7 días / 7",
    weekdays: "De lunes a sábado",
    weekdays_hours: "De 11:45 a 22h",
    sunday: "El domingo",
    sunday_hours: "De 11:45 a 17h",
  },
  contact: {
    title: "Contáctenos",
    description:
      "Para cualquier reserva o consulta, no dude en ponerse en contacto con nosotros",
    phone: "Teléfono",
    address: "Dirección",
    closing:
      "¡Estamos deseando recibirle en nuestra crêperie y hacerle descubrir nuestros deliciosos crepes!",
  },
};
