import { Phone, FileStack, ClipboardCheck, Send } from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: Phone,
    title: 'Entre em contato',
    description: 'Mande uma mensagem no WhatsApp. Conversamos sobre a sua situação e passamos o valor do serviço.',
    color: 'text-blue-600',
    bg: 'bg-blue-50 border-blue-200',
    numberColor: 'bg-blue-500'
  },
  {
    number: 2,
    icon: FileStack,
    title: 'Envie os documentos',
    description: 'Te passamos uma lista simples com tudo que precisamos. Você envia pelo WhatsApp ou e-mail.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50 border-emerald-200',
    numberColor: 'bg-emerald-500'
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: 'Preparamos sua declaração',
    description: 'Elaboramos a declaração com atenção a cada detalhe para evitar erros e maximizar sua restituição.',
    color: 'text-purple-600',
    bg: 'bg-purple-50 border-purple-200',
    numberColor: 'bg-purple-500'
  },
  {
    number: 4,
    icon: Send,
    title: 'Enviamos e transmitimos',
    description: 'Você revisa, aprova e a gente transmite para a Receita Federal. Simples assim.',
    color: 'text-orange-600',
    bg: 'bg-orange-50 border-orange-200',
    numberColor: 'bg-orange-500'
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-36 px-4 md:px-8 bg-white">
      <div className="container max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded-full mb-5">
            Processo simples
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Como Funciona
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Do primeiro contato à declaração transmitida em 4 passos — tudo pelo WhatsApp
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-300 via-emerald-300 via-purple-300 to-orange-300 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div key={step.number} className="flex flex-col items-center text-center group">
                  <div className="relative mb-8">
                    <div className={`w-[104px] h-[104px] rounded-2xl border-2 flex items-center justify-center ${step.bg} group-hover:scale-105 group-hover:shadow-xl transition-all duration-500`}>
                      <Icon className={`w-10 h-10 ${step.color}`} strokeWidth={1.5} />
                    </div>
                    <div className={`absolute -bottom-3 -right-3 w-7 h-7 ${step.numberColor} text-white rounded-full flex items-center justify-center text-xs font-black shadow-md border-2 border-white`}>
                      {step.number}
                    </div>
                  </div>

                  <h3 className="font-black text-base text-slate-900 mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
