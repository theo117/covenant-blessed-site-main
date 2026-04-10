import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import floralBottom from '@/assets/floral-bottom.png';

const ScriptureSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-24 md:py-32 bg-section-blush overflow-hidden">
      {/* Decorative floral */}
      <img
        src={floralBottom}
        alt=""
        className="absolute top-0 right-0 w-48 md:w-64 opacity-30 pointer-events-none rotate-180"
        loading="lazy"
        width={1024}
        height={512}
      />
      <img
        src={floralBottom}
        alt=""
        className="absolute bottom-0 left-0 w-48 md:w-64 opacity-30 pointer-events-none"
        loading="lazy"
        width={1024}
        height={512}
      />

      <div ref={ref} className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Cross motif */}
          <div className="text-gold text-2xl mb-6 opacity-50">✝</div>

          <p className="font-script text-gold text-3xl mb-4">A Blessing of Love</p>

          <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed font-light italic">
            "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.
            It does not dishonor others, it is not self-seeking, it is not easily angered,
            it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth.
            It always protects, always trusts, always hopes, always perseveres."
          </blockquote>

          <div className="section-divider mt-8 mb-4" />

          <p className="font-serif text-muted-foreground tracking-widest text-sm uppercase">
            1 Corinthians 13:4–7
          </p>

          <p className="font-body text-muted-foreground mt-8 leading-relaxed max-w-xl mx-auto">
            May the Lord bless this union with His grace and fill their home with His peace.
            May their love be a reflection of Christ's love — steadfast, sacrificial, and eternal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScriptureSection;
