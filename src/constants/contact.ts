export const CONTACT = {
  whatsapp: {
    number: "5561999999999",
    message: "Olá, Maíra! Gostaria de saber mais sobre seus atendimentos.",
  },
};

export const WHATSAPP_URL = `https://wa.me/${CONTACT.whatsapp.number}?text=${encodeURIComponent(
  CONTACT.whatsapp.message,
)}`;
