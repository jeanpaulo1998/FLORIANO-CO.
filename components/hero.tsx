import { Button } from '@/components/ui/button'
import { ArrowRight, MessageCircle, Shield, FileText, Star, CheckCircle2, TrendingUp, Clock } from 'lucide-react'

export function Hero() {
  const whatsappComoFunciona = 'https://wa.me/554796357925?text=Olá!%20Gostaria%20de%20entender%20como%20funciona%20a%20declaração%20de%20imposto%20de%20renda%20pela%20Floriano%20%26%20Co.%20Pode%20me%20explicar%3F'
  const whatsappContato = 'https://wa.me/554796357925?text=Olá!%20Gostaria%20de%20declarar%20meu%20imposto%20de%20renda%20com%20a%20Floriano%20%26%20Co.'

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden pt-20 pb-16 px-4 md:px-8">
      {/* Blobs */}
      <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-blue-500 rounded-full opacity-10 blur-[130px] animate-pulse" />
      <div className="absolute -bottom-32 left-10 w-[500px] h-[500px] bg-emerald-500 rounded-full opacity-10 blur-[130px] animate-pulse" style={{animationDelay:'1.5s'}} />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)',backgroundSize:'40px 40px'}} />

      <div className="relative z-10 container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-slate-300 font-medium">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              </span>
              <span className="w-px h-4 bg-white/20" />
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              Declaração de IR rápida e sem complicação
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight">
              <span className="text-white">Seu imposto de</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
                renda resolvido
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-slate-400 leading-relaxed max-w-lg">
              Declaração de IR Pessoa Física feita por quem entende.
              Rápido, seguro e direto no WhatsApp — sem sair de casa.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappComoFunciona} target="_blank" rel="noopener noreferrer" className="group">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white gap-2.5 px-8 h-14 text-base font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.03] w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Como funciona?
                </Button>
              </a>
              <a href={whatsappContato} target="_blank" rel="noopener noreferrer" className="group">
                <Button size="lg" variant="outline" className="border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 px-8 h-14 text-base font-semibold rounded-xl gap-2 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm">
                  Declarar meu IR
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-slate-500 text-sm">
              <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-500" /><span>100% Seguro</span></div>
              <div className="w-px h-4 bg-slate-700" />
              <span>Sem sair de casa</span>
              <div className="w-px h-4 bg-slate-700" />
              <span>Prazo garantido</span>
            </div>
          </div>

          {/* ── RIGHT — 3D card ── */}
          <div className="relative flex items-center justify-center lg:justify-end h-[420px] lg:h-auto">

            {/* Floating badge 1 – restituição */}
            <div className="animate-floatBadge absolute -left-2 top-6 lg:-left-8 lg:top-10 z-20">
              <div className="bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Restituição</p>
                  <p className="text-sm font-black text-emerald-600">R$ 1.847,00</p>
                </div>
              </div>
            </div>

            {/* Floating badge 2 – transmitida */}
            <div className="animate-floatBadge2 absolute -right-2 bottom-10 lg:-right-4 lg:bottom-16 z-20">
              <div className="bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-medium">Status</p>
                  <p className="text-sm font-black text-blue-600">Transmitida ✓</p>
                </div>
              </div>
            </div>

            {/* 3D Document card */}
            <div className="animate-float relative z-10 w-[300px] sm:w-[320px]">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-blue-500/30 rounded-3xl blur-2xl scale-110" />

              <div
                className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10"
                style={{transform:'perspective(1200px) rotateY(-14deg) rotateX(6deg)'}}
              >
                {/* Card header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-sm">Declaração IRPF</p>
                    <p className="text-emerald-200 text-xs">Exercício 2025 · Ano-base 2024</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 space-y-4">
                  {/* Fields */}
                  {[
                    { label: 'Contribuinte', value: 'João da Silva' },
                    { label: 'CPF', value: '•••.•••.•••-••' },
                    { label: 'Rendimentos', value: 'R$ 68.400,00' },
                  ].map((f) => (
                    <div key={f.label} className="space-y-1">
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider font-semibold">{f.label}</p>
                      <div className="bg-slate-700/60 rounded-lg px-3 py-2">
                        <p className="text-slate-200 text-sm font-medium">{f.value}</p>
                      </div>
                    </div>
                  ))}

                  {/* Deductions */}
                  <div className="bg-slate-700/40 rounded-xl p-3 space-y-2">
                    <p className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">Deduções</p>
                    {['Saúde', 'Educação', 'Dependentes'].map((d) => (
                      <div key={d} className="flex items-center justify-between">
                        <span className="text-slate-400 text-xs">{d}</span>
                        <span className="text-emerald-400 text-xs font-semibold">✓ Incluído</span>
                      </div>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-xl p-4 text-center">
                    <p className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">Sua restituição</p>
                    <p className="text-2xl font-black text-white">R$ 1.847,00</p>
                  </div>

                  {/* Timer */}
                  <div className="flex items-center justify-center gap-2 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Pronto em até 48h após os documentos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Social proof — bottom */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/8 transition-all duration-300">
            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400">15+</p>
            <p className="text-slate-400 text-xs mt-1 leading-snug">Declarações feitas</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/8 transition-all duration-300">
            <p className="text-2xl font-black text-amber-400">4.9★</p>
            <p className="text-slate-400 text-xs mt-1 leading-snug">Avaliação média</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/8 transition-all duration-300">
            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-400">1 ano</p>
            <p className="text-slate-400 text-xs mt-1 leading-snug">De experiência</p>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce">
        <div className="w-5 h-8 rounded-full border-2 border-slate-700 flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 bg-slate-600 rounded-full" />
        </div>
      </div>
    </section>
  )
}
