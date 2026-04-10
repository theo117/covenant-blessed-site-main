import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import gallery1 from '@/assets/gallery-1.jpg';

const OurStorySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="story" className="py-24 md:py-32 bg-section-alt">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-script text-gold text-3xl mb-2">Our Love Story</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light tracking-wide">
            A Journey Guided by Faith
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <img
              src={gallery1}
              alt="Mr T and Miss M walking together"
              className="rounded-sm shadow-lg gold-glow w-full object-cover aspect-[4/5]"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
              <p>
                Our story began not by chance, but by divine appointment. We first met at a church retreat
                in Pretoria in the autumn of 2022, where a shared love for worship and a quiet conversation
                over rooibos became the first chapter of our love story.
              </p>
              <p>
                From the very beginning, God was at the center of our relationship. Through seasons of
                growth, prayer, and deepening faith, we discovered in each other a love that reflects
                Christ's love for His church — patient, kind, and unfailing.
              </p>
              <p>
                Mr T proposed on a golden sunset evening at the Cradle of Humankind, with the words:
                <em className="text-foreground">"I have found the one whom my soul loves."</em>
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="font-serif text-foreground italic text-lg">
                "He who finds a wife finds a good thing and obtains favor from the Lord."
              </p>
              <p className="text-muted-foreground text-sm mt-1 font-serif">— Proverbs 18:22</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
