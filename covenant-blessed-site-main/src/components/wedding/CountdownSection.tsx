import { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const WEDDING_DATE = new Date('2026-10-18T15:00:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (): TimeLeft => {
  const diff = Math.max(0, WEDDING_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownSection = () => {
  const [time, setTime] = useState(getTimeLeft);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ];

  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div ref={ref} className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-script text-gold text-3xl mb-2">Counting the Days</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light tracking-wide mb-4">
            Until We Say "I Do"
          </h2>
          <div className="section-divider mb-12" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {units.map((unit, i) => (
            <div
              key={unit.label}
              className={`bg-card border border-border rounded-sm p-6 md:p-8 gold-glow transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <p className="font-serif text-4xl md:text-5xl text-gold font-light">
                {String(unit.value).padStart(2, '0')}
              </p>
              <p className="font-serif text-muted-foreground text-xs tracking-[0.2em] uppercase mt-2">
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
