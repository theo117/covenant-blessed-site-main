import floralTop from '@/assets/floral-top.png';

const FooterSection = () => {
  return (
    <footer className="relative py-20 text-center overflow-hidden">
      <img
        src={floralTop}
        alt=""
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 opacity-30 pointer-events-none rotate-180"
        loading="lazy"
        width={1024}
        height={512}
      />

      <div className="relative z-10 px-6 max-w-xl mx-auto">
        <div className="text-gold text-lg mb-4 opacity-40">✝</div>
        <p className="font-script text-gold text-4xl mb-4">Mr T & Miss M</p>
        <p className="font-serif text-muted-foreground italic text-sm leading-relaxed mb-6">
          "And now these three remain: faith, hope, and love.
          But the greatest of these is love."
          <br />
          <span className="not-italic tracking-widest text-xs uppercase mt-2 block">— 1 Corinthians 13:13</span>
        </p>
        <div className="section-divider mb-6" />
        <p className="font-body text-muted-foreground/60 text-xs tracking-wider">
          October 18, 2026 · Johannesburg, Gauteng
        </p>
        <p className="font-body text-muted-foreground/40 text-xs mt-2">
          Made with love and faith
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
