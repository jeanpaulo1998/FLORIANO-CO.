import { Button } from '@/components/ui/button'
import { MessageCircle, CheckCircle2 } from 'lucide-react'

export function FinalCTA() {
  const whatsappUrl = 'https://wa.me/554796357925?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20consultoria%20da%20Floriano%20%26%20Co.'

  return (
    <section className="relative py-24 md:py-36 px-4 md:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      {/* Blobs */}
      <div className="absolute top-10 right-16 w-80 h-80 bg-emerald-500 rounded-full opacity-10 blur-[100px] animate-pulse" />
      <div className="absolute -bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-[120px] animate-pulse" style={{animationDelay: '1.5s'}} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 container max-w-3xl mx-auto text-center space-y-8">
        {/* Label */}
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
          Não deixe para última hora
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-white text-balance leading-[1.05] tracking-tight">
          Declare seu IR{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
            sem estresse
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-lg text-slate-400 text-balance max-w-xl mx-auto leading-relaxed">
          Manda uma mensagem agora e a gente resolve tudo pelo WhatsApp.
          Rápido, seguro e sem precisar sair de casa.
        </p>

        {/* Checks */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400">
          {['Sem burocracia', 'Prazo garantido', 'Tudo pelo WhatsApp'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-4">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300 scale-95" />
              <Button
                size="lg"
                className="relative bg-emerald-500 hover:bg-emerald-600 text-white gap-3 px-10 h-14 text-base font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.04] group-hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                Quero declarar meu IR
              </Button>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
