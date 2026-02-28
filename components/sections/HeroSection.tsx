'use client';

import { Zap, Star, Award } from 'lucide-react';
import { CTAButton } from '@/components/ui/CTAButton';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

const PRODUCT_IMAGE = 'https://raw.githubusercontent.com/Bigfootage/fita-de-broselow-dark/acf67fe0dcf1e6a6fef9de1a240617691bea0d72/D_NQ_NP_2X_807999-MLB101173343067_122025-F.webp';
const PRODUCT_IMAGE_FALLBACK = '/product-1.svg';

const badges = [
  { icon: Zap, label: 'Consulta em Segundos' },
  { icon: Award, label: 'Padrao Ouro Global' },
  { icon: Star, label: 'Para UTI e PS' },
];

export function HeroSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[92vh] flex items-center pt-20 pb-16 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-teal/3 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-7">
          <div className="scroll-reveal flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal/15 text-teal border border-teal/25">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              Equipamento Medico Certificado
            </span>
          </div>

          <h1 className="scroll-reveal scroll-reveal-delay-1 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-foreground">
            A Ferramenta{' '}
            <span className="text-teal">Essencial</span> para
            Emergencias Pediatricas
          </h1>

          <p className="scroll-reveal scroll-reveal-delay-2 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
            Fita de Broselow com tabela de dosagens por peso.{' '}
            <strong className="text-foreground/80 font-medium">Precisao em segundos</strong>{' '}
            quando cada segundo conta.
          </p>

          <div className="scroll-reveal scroll-reveal-delay-3 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-sm text-muted-foreground border border-white/8"
              >
                <Icon className="w-3.5 h-3.5 text-teal" strokeWidth={2.5} />
                {label}
              </div>
            ))}
          </div>

          <div className="scroll-reveal flex flex-col sm:flex-row items-start sm:items-center gap-5 pt-2">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground font-medium">Preco</span>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">R$ 159</span>
                <span className="text-2xl font-bold text-foreground">,99</span>
              </div>
              <span className="text-xs text-muted-foreground">1 unidade • Frete calculado no checkout</span>
            </div>
            <CTAButton size="large" className="hidden sm:inline-flex" />
          </div>
          <CTAButton size="large" className="sm:hidden w-full justify-center" />
        </div>

        <div className="order-1 lg:order-2 scroll-reveal flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 rounded-2xl bg-teal/8 blur-2xl scale-105" />
            <div className="relative glass rounded-2xl p-3 border border-white/10 hover:border-teal/30 transition-all duration-500 hover:shadow-2xl">
              <img
                src={PRODUCT_IMAGE}
                alt="Fita de Emergencia Pediatrica de Broselow — vista completa com tabela colorida"
                className="w-full h-auto rounded-xl object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = PRODUCT_IMAGE_FALLBACK; }}
              />
              <div className="absolute -top-3 -right-3 glass border border-teal/30 rounded-xl px-3 py-2 text-center animate-pulse-glow">
                <p className="text-teal font-bold text-lg leading-none">R$&nbsp;159,99</p>
                <p className="text-muted-foreground text-xs mt-0.5">por unidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
