import { MessageCircle } from 'lucide-react'

const links = [
  { label: 'Serviços', href: '#services' },
  { label: 'Como Funciona', href: '#how-it-works' },
  { label: 'Benefícios', href: '#benefits' },
  { label: 'Depoimentos', href: '#testimonials' },
]

const whatsappUrl = 'https://wa.me/554796357925?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20consultoria%20da%20Floriano%20%26%20Co.'

function LogoMark() {
  return (
    <svg
      viewBox="0 0 52 52"
      className="w-11 h-11 flex-shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F0D080" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="arrowGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A6FA5" />
          <stop offset="100%" stopColor="#8AACCE" />
        </linearGradient>
      </defs>

      {/* Outer gold ring */}
      <circle cx="26" cy="26" r="24" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />

      {/* Inner subtle ring */}
      <circle cx="26" cy="26" r="19.5" fill="none" stroke="url(#goldGrad)" strokeWidth="0.5" strokeOpacity="0.4" />

      {/* Bar chart – 3 ascending bars */}
      <rect x="10" y="33" width="6" height="7"  rx="0.8" fill="url(#goldGrad)" />
      <rect x="19" y="26" width="6" height="14" rx="0.8" fill="url(#goldGrad)" />
      <rect x="28" y="19" width="6" height="21" rx="0.8" fill="url(#goldGrad)" />

      {/* Swoosh arrow */}
      <path
        d="M7 38 C16 22 28 16 43 12"
        stroke="url(#arrowGrad)"
        strokeWidth="2.8"
        fill="none"
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <path
        d="M38 8 L44 12 L39 16"
        stroke="url(#arrowGrad)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md border-b border-white/5" />

      <div className="relative container max-w-6xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 flex items-center gap-3">
          <LogoMark />
          <div className="flex flex-col leading-tight">
            <span
              className="font-black tracking-wider text-transparent bg-clip-text"
              style={{
                fontSize: '1.05rem',
                backgroundImage: 'linear-gradient(135deg, #F0D080 0%, #C9A84C 50%, #F0D080 100%)',
              }}
            >
              FLORIANO & CO.
            </span>
            <span className="text-[0.6rem] font-semibold tracking-[0.28em] text-slate-400 uppercase mt-0.5">
              Imposto de Renda
            </span>
          </div>
        </a>

        {/* Nav links – desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-5 h-10 rounded-xl transition-all duration-200 hover:scale-[1.03] shadow-lg shadow-emerald-500/20"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  )
}
