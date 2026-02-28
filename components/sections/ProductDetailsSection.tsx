'use client';

import { Ruler, Weight, Package, Users, BookOpen, Activity } from 'lucide-react';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const specs = [
  { icon: Ruler, label: 'Dimensoes', value: '60 x 20 x 2 cm' },
  { icon: Weight, label: 'Peso', value: '300 gramas' },
  { icon: Package, label: 'Conteudo', value: '1 unidade por pack' },
  { icon: Users, label: 'Indicado para', value: 'Medicina e Enfermagem' },
  { icon: BookOpen, label: 'Uso', value: 'Guia rapido de pediatria' },
  { icon: Activity, label: 'Ambiente', value: 'UTI e Pronto-Socorro' },
];

const images = [
  {
    src: 'https://raw.githubusercontent.com/Bigfootage/fita-de-broselow-dark/acf67fe0dcf1e6a6fef9de1a240617691bea0d72/D_NQ_NP_2X_807999-MLB101173343067_122025-F.webp',
    fallback: '/product-1.svg',
    alt: 'Fita de Broselow — vista frontal completa com tabela de cores e dosagens',
  },
  {
    src: 'https://raw.githubusercontent.com/Bigfootage/fita-de-broselow-dark/acf67fe0dcf1e6a6fef9de1a240617691bea0d72/D_NQ_NP_2X_881695-MLB101173928369_122025-F.webp',
    fallback: '/product-2.svg',
    alt: 'Fita de Broselow — detalhe das cores e faixas de peso pediatrico',
  },
];

export function ProductDetailsSection() {
  const ref = useScrollAnimation();

  return (
    <section id="detalhes" ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14 scroll-reveal">
          <p className="text-teal text-sm font-semibold tracking-wider uppercase mb-3">
            Produto
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            Especificacoes e Fotos
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Clique nas imagens para ampliar e ver todos os detalhes da fita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="scroll-reveal">
            <ImageLightbox images={images} />
          </div>

          <div className="scroll-reveal scroll-reveal-delay-1">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Ficha Tecnica
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="glass rounded-xl p-4 flex items-start gap-3 border border-white/8 hover:border-teal/25 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal/12 border border-teal/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-teal" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-foreground mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 glass rounded-xl p-5 border border-teal/20">
              <p className="text-sm font-semibold text-teal mb-2">Caracteristicas Principais</p>
              <ul className="space-y-2">
                {[
                  'Tabela pediátrica com faixas coloridas por peso',
                  'Dosagens de emergência para os principais fármacos',
                  'Guia visual para intubação e equipamentos',
                  'Consulta rápida para enfermagem e medicina',
                  'Ideal como guia de estudo para estudantes',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
