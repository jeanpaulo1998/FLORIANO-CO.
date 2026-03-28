'use client'

import { MessageCircle } from 'lucide-react'

export function FloatingWhatsApp() {
  const whatsappUrl = 'https://wa.me/554796357925?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20consultoria%20da%20Floriano%20%26%20Co.'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full shadow-xl hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 cursor-pointer"
      aria-label="Abrir WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle className="w-6 h-6 relative z-10" fill="currentColor" />
    </a>
  )
}
