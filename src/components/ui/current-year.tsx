'use client';

import { useSyncExternalStore } from 'react';

// Inscreve o componente nas mudanças de foco da janela.
function subscribe(callback: () => void) {
  window.addEventListener('focus', callback);

  return () => {
    window.removeEventListener('focus', callback);
  };
}

// Obtém o ano atual no navegador.
function getSnapshot() {
  return new Date().getFullYear();
}

// Valor utilizado durante a renderização no servidor.
function getServerSnapshot() {
  return null;
}

export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return <>{year}</>;
}