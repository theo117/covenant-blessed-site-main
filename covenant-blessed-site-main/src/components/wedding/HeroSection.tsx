import coupleHero from '@/assets/couple-hero.jpg';
import floralTop from '@/assets/floral-top.png';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={coupleHero}
          alt="Mr T and Miss M"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </div>

      {/* Floral accent */}
      <img
        src={floralTop}
        alt=""
        className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-80 opacity-60 animate-float pointer-events-none"
        width={1024}
        height={512}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-champagne/90 font-serif text-sm md:text-base tracking-[0.3em] uppercase mb-6 animate-fade-up">
          Together with their families
        </p>

        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-ivory mb-4 animate-fade-up delay-200 leading-tight">
          Mr T & Miss M
        </h1>

        <div className="section-divider !bg-champagne/60 mb-6 animate-fade-up delay-300" />

        <p className="font-serif text-ivory/90 text-lg md:text-xl italic mb-2 animate-fade-up delay-400">
          "A cord of three strands is not quickly broken."
        </p>
        <p className="text-champagne/70 text-sm font-serif mb-8 animate-fade-up delay-400">
          — Ecclesiastes 4:12
        </p>

        <p className="font-serif text-ivory text-xl md:text-2xl tracking-wider mb-2 animate-fade-up delay-500">
          October 18, 2026
        </p>
        <p className="text-champagne/80 font-serif text-sm md:text-base tracking-widest uppercase animate-fade-up delay-500">
          Rosebank Union Church · Johannesburg, Gauteng
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-up delay-600">
          <a
            href="#details"
            className="px-8 py-3 border border-champagne/50 text-ivory font-serif text-sm tracking-widest uppercase hover:bg-champagne/10 transition-all duration-300 rounded-sm"
          >
            View Details
          </a>
          <a
            href="#rsvp"
            className="px-8 py-3 bg-gold/80 text-primary-foreground font-serif text-sm tracking-widest uppercase hover:bg-gold transition-all duration-300 rounded-sm"
          >
            RSVP
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-5 h-8 border border-champagne/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-champagne/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
