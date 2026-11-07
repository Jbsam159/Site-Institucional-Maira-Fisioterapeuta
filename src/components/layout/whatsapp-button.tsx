import { ButtonLink } from '@/components/ui/button-link';
import { WHATSAPP_URL } from '@/constants/contact';

export function WhatsAppButton() {
  return (
    <ButtonLink
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar com Maira pelo WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        gap-3 shadow-lg shadow-brand-rose/20
        transition-transform hover:-translate-y-1
      "
    >
      {/* Ícone de conversa */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
        <path d="M9 9a1 1 0 0 1 1-1h.5l1 2-1 1a5 5 0 0 0 2.5 2.5l1-1 2 1v.5a1 1 0 0 1-1 1A7 7 0 0 1 9 9Z" />
      </svg>

      <span>Fale pelo WhatsApp</span>
    </ButtonLink>
  );
}