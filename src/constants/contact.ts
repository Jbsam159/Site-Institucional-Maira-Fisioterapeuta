export const CONTACT = {
  whatsapp: {
    number: "5561999999999",
    message: "Olá, Maíra! Gostaria de saber mais sobre seus atendimentos.",
  },
  instagram: {
    username: "fisiomaira",
    url: "https://www.instagram.com/fisiomaira/",
  },
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
  CONTACT.whatsapp.message,
)}`;

export const INSTAGRAM_URL = CONTACT.instagram.url;
