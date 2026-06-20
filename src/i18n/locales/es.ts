export default {
  description:
    "Nuestros crêpes dulces y salados son completamente caseros, desde la masa hasta los rellenos, elaborados con ingredientes frescos seleccionados en Bretaña para una autenticidad sin concesiones.",

  menu: {
    title: "Nuestro Menú",
    sweet: "Dulces",
    savory: "Salados",
  },

  crepes: {
    sucre: [
      {
        id: 0,
        name: "Mantequilla y azúcar",
        description: "Mantequilla con sal de Bretaña y azúcar en polvo.",
        price: 5,
      },
      {
        id: 1,
        name: "Limón, mantequilla y azúcar",
        description:
          "Zumo de limón exprimido, azúcar en polvo y mantequilla con sal.",
        price: 5.5,
      },
      {
        id: 2,
        name: "Caramelo a la mantequilla salada",
        description: "Caramelo casero a la mantequilla salada.",
        price: 6.5,
      },
      {
        id: 3,
        name: "Miel y nueces",
        description: "Miel y nueces.",
        price: 5.5,
      },
      {
        id: 4,
        name: "Mermelada de fresa o arándano",
        description: "Mermelada de fresa o de arándano según su preferencia.",
        price: 5,
      },
      {
        id: 5,
        name: "Nutella",
        description: "Nutella y mantequilla con sal.",
        price: 6,
      },
      {
        id: 6,
        name: "Nutella y plátano",
        description: "Nutella, mantequilla con sal y fruta de temporada.",
        price: 7,
      },
      {
        id: 7,
        name: "Nutella y coco",
        description: "Nutella, mantequilla con sal y coco rallado.",
        price: 6.5,
      },
    ],

    sale: [
      {
        id: 0,
        name: "L'HENRIETTE",
        description: "Jamón york, queso emmental rallado y huevo.",
        price: 9,
      },
      {
        id: 1,
        name: "LA MICHELINE",
        description: "Espinacas, cebollas, champiñones y salsa de tomate.",
        price: 9.5,
      },
      {
        id: 2,
        name: "LA JACOTTE",
        description: "Queso emmental, huevo, panceta y cebollas.",
        price: 10,
      },
      {
        id: 3,
        name: "LA MARTINE",
        description: "Queso Reblochon, panceta, patata y crema fresca.",
        price: 11,
      },
      {
        id: 4,
        name: "LA PASCALE",
        description:
          "Queso emmental, chorizo, queso de cabra y salsa de tomate.",
        price: 10,
      },
      {
        id: 5,
        name: "LA JEANNETTE",
        description: "Queso emmental, salmón, espinacas y crema fresca.",
        price: 12,
      },
      {
        id: 6,
        name: "L'HENRIETTE TOMATÉE",
        description: "Queso emmental, jamón york, huevo y salsa de tomate.",
        price: 10,
      },
      {
        id: 7,
        name: "LA MADELEINE",
        description: "Queso emmental, huevo, champiñones y crema fresca.",
        price: 10,
      },
      {
        id: 8,
        name: "LA LUCETTE",
        description: "Queso emmental, jamón serrano y huevo.",
        price: 9,
      },
      {
        id: 9,
        name: "LA TIPONETTE",
        description:
          "Queso emmental, crema de puerros, panceta y crema fresca.",
        price: 10,
      },
      {
        id: 10,
        name: "LA KRISTINETTE",
        description:
          "Queso emmental, crema de puerros, champiñones y crema fresca.",
        price: 10,
      },
      {
        id: 11,
        name: "LA PIERRETTE",
        description: "Queso emmental, queso de cabra, miel y nueces.",
        price: 10,
      },
      {
        id: 12,
        name: "LA NICOLE",
        description:
          "Queso emmental, andouille de Guémené (embutido tradicional de cerdo), champiñones y crema fresca.",
        price: 10,
      },
    ],
  },

  boissons: {
    soda: [
      { id: 0, name: "Zumo de manzana Kerné", price: 4 },
      { id: 1, name: "Zumo de manzana con gas ecológico", price: 4.5 },
      { id: 2, name: "Breizh Cola 33cl", price: 4.5 },
      { id: 3, name: "Breizh Cola Zero 33cl", price: 4.5 },
      { id: 4, name: "Breizh Tea 33cl", price: 4.5 },
      { id: 5, name: "Breizh Agrumes (Cítricos) 33cl", price: 4.5 },
    ],

    digestif: [
      {
        id: 0,
        name: "Chouchen d'Armor",
        desc: "Para disfrutar como aperitivo o digestivo.",
        price: 5,
      },
      {
        id: 1,
        name: "Pommeau de Bretagne AOC",
        desc: "Como aperitivo o para acompañar un crêpe dulce.",
        price: 5.5,
      },
      {
        id: 2,
        name: "Ty Jaune",
        desc: "El pastís bretón.",
        price: 4.5,
      },
      {
        id: 3,
        name: "Lambig de Bretagne AOC",
        desc: "Aguardiente de sidra.",
        price: 6,
      },
    ],

    bieres: [
      {
        id: 0,
        name: "Dremmwel, cerveza ecológica de trigo sarraceno",
        price: 6.5,
      },
      {
        id: 1,
        name: "Sant Erwann IPA",
        price: 6.5,
      },
      {
        id: 2,
        name: "Britt blonde melen (Cerveza rubia)",
        price: 6,
      },
      {
        id: 3,
        name: "Britt blanche (Cerveza blanca)",
        price: 6,
      },
      { id: 4, name: "Sidra seca Kerné 25cl", price: 4.5 },
      { id: 5, name: "Sidra dulce Kerné 75cl", price: 13 },
      { id: 6, name: "Sidra seca Kerné 75cl", price: 13 },
    ],

    eau: [
      { id: 0, name: "Plancoët agua sin gas 50cl", price: 4 },
      { id: 1, name: "Plancoët agua sin gas 1L", price: 5 },
      { id: 2, name: "Plancoët agua con gas suave 50cl", price: 4 },
      { id: 3, name: "Plancoët agua con gas suave 1L", price: 5 },
    ],

    boissons_chaudes: [
      { id: 0, name: "Café Coïc, tostado en Bretaña", price: 3 },
      { id: 1, name: "Café descafeinado Coïc, tostado en Bretaña", price: 3 },
      { id: 2, name: "Té Dammann", price: 3.5 },
      { id: 3, name: "Suplemento de leche caliente", price: 1.5 },
    ],
  },

  hours: {
    title: "Abierto 7 días a la semana",
    weekdays: "De lunes a sábado",
    weekdays_hours: "De 11h a 22h00",
    sunday: "Los domingos",
    sunday_hours: "De 11h a 17h00",
  },

  contact: {
    title: "Contáctenos",
    description:
      "Para cualquier reserva o solicitud de información, no dude en ponerse en contacto con nosotros.",
    phone: "Teléfono",
    reservation: "Reservar en TheFork",
    address: "Dirección",
    closing:
      "¡Estamos deseando recibirle en nuestra crepería y mostrarle nuestros deliciosos crêpes!",
  },
};
