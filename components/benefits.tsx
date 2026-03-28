import { Banknote, Clock, Smile } from 'lucide-react'

const benefits = [
  {
    icon: Banknote,
    title: 'Maximize sua restituição',
    description: 'Aproveitamos todas as deduções legais — saúde, educação, dependentes — para você receber o máximo de volta.',
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-600'
  },
  {
    icon: Clock,
    title: 'Rápido e dentro do prazo',
    description: 'Você envia os documentos, a gente entrega a declaração pronta. Sem atraso, sem multa por entrega fora do prazo.',
    gradient: 'from-purple-500 to-violet-500',
    iconBg: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600'
  },
  {
    icon: Smile,
    title: 'Tudo pelo WhatsApp',
    description: 'Sem precisar sair de casa ou enfrentar fila. Atendimento 100% online, simples e descomplicado.',
    gradient: 'from-orange-500 to-amber-500',
    iconBg: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600'
  }
]

export function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-36 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 border border-purple-200 px-4 py-1.5 rounded-full mb-5">
            Por que nos escolher
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Vantagens de declarar com a gente
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Tranquilidade, agilidade e o máximo de retorno no seu bolso
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl`} />

                <div className="relative flex gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl border flex items-center justify-center ${benefit.iconBg} group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-7 h-7 ${benefit.iconColor}`} strokeWidth={1.75} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-black text-slate-900 text-lg leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
