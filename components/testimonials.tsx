import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Souza',
    business: 'Assalariado – Blumenau/SC',
    initials: 'CS',
    rating: 5,
    text: 'Super rápido e tranquilo! Mandei os documentos pelo WhatsApp e em dois dias minha declaração já estava transmitida. Recebi a restituição certinha.',
    avatarGradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Ana Paula Lima',
    business: 'Autônoma – Designer',
    initials: 'AL',
    rating: 5,
    text: 'Sempre tive medo de declarar como autônoma. A Floriano & Co. foi super atenciosa, explicou tudo e ainda otimizou minhas deduções. Recomendo muito!',
    avatarGradient: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'Roberto Mendes',
    business: 'Investidor – Renda variável',
    initials: 'RM',
    rating: 5,
    text: 'Tinha muita dificuldade com a parte de ações e fundos imobiliários. Eles resolveram tudo certinho e sem estresse. Já indiquei para vários amigos.',
    avatarGradient: 'from-purple-500 to-violet-500'
  },
  {
    name: 'Fernanda Costa',
    business: 'Aposentada',
    initials: 'FC',
    rating: 5,
    text: 'Atendimento excelente, muito paciente e claro nas explicações. Tudo pelo celular mesmo, sem precisar sair de casa. Perfeito para mim!',
    avatarGradient: 'from-orange-500 to-amber-500'
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 px-4 md:px-8 bg-white">
      <div className="container max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full mb-5">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Quem já declarou com a gente
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
            Clientes reais que deixaram o IR nas nossas mãos e dormiram tranquilos
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 cursor-default"
            >
              <Quote className="w-8 h-8 text-slate-200 group-hover:text-slate-300 transition-colors mb-5 fill-current" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed text-[15px] mb-7">
                {t.text}
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.avatarGradient} flex items-center justify-center text-white font-black text-sm tracking-wide flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-black text-slate-900 text-sm">{t.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{t.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
