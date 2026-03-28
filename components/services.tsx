import { CheckCircle2, User, Briefcase, TrendingUp, Home } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: User,
    title: 'Declaração Simples',
    subtitle: 'Assalariados e aposentados',
    description: 'Para quem recebe salário, aposentadoria ou pensão e precisa declarar o IR sem complicação.',
    benefits: [
      'Rápido e sem burocracia',
      'Entrega dentro do prazo',
      'Evite cair na malha fina',
      'Maximize sua restituição'
    ]
  },
  {
    id: 2,
    icon: Briefcase,
    title: 'Autônomo e MEI',
    subtitle: 'Profissionais liberais e MEI',
    description: 'Declaração para autônomos, freelancers e MEI com rendimentos variáveis ou múltiplas fontes.',
    benefits: [
      'Controle de rendimentos variáveis',
      'Deduções de despesas profissionais',
      'Livro caixa quando necessário',
      'Orientação sobre pró-labore'
    ]
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Com Investimentos',
    subtitle: 'Bolsa, fundos e renda fixa',
    description: 'Para quem tem investimentos em renda variável, fundos imobiliários, criptomoedas ou renda fixa.',
    benefits: [
      'Cálculo correto do DARF',
      'Apuração de ganhos e perdas',
      'Isenções sobre day trade',
      'Declaração de criptomoedas'
    ]
  },
  {
    id: 4,
    icon: Home,
    title: 'Com Imóveis',
    subtitle: 'Compra, venda e aluguel',
    description: 'Declaração para quem comprou, vendeu ou aluga imóveis, com apuração correta do ganho de capital.',
    benefits: [
      'Ganho de capital na venda',
      'Rendimentos de aluguel',
      'Atualização do valor do imóvel',
      'Isenções por tempo de posse'
    ]
  }
]

const styles = [
  {
    gradient: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-500/10 text-blue-600',
    check: 'text-blue-500',
    border: 'hover:border-blue-200'
  },
  {
    gradient: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10 text-emerald-600',
    check: 'text-emerald-500',
    border: 'hover:border-emerald-200'
  },
  {
    gradient: 'from-purple-500 to-violet-500',
    iconBg: 'bg-purple-500/10 text-purple-600',
    check: 'text-purple-500',
    border: 'hover:border-purple-200'
  },
  {
    gradient: 'from-orange-500 to-amber-500',
    iconBg: 'bg-orange-500/10 text-orange-600',
    check: 'text-orange-500',
    border: 'hover:border-orange-200'
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-36 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-4 py-1.5 rounded-full mb-5">
            Para cada perfil
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Qual é o seu caso?
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Declaração de IR feita do jeito certo para cada situação — sem erro, sem malha fina
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            const s = styles[idx]
            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-default ${s.border}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${s.gradient}`} />

                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${s.iconBg}`}>
                      <Icon className="w-7 h-7" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 leading-tight">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${s.gradient} mt-1`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed text-[15px]">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${s.check}`} />
                        <span className="text-sm text-slate-600 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
