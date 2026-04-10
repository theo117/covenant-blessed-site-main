import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Church, Wine, Clock, MapPin, Shirt } from 'lucide-react';

const events = [
  {
    icon: Church,
    title: 'The Ceremony',
    time: '3:00 PM',
    location: 'Rosebank Union Church',
    address: 'Rosebank, Johannesburg, Gauteng',
    description: 'Join us as we exchange our vows before God and our loved ones.',
  },
  {
    icon: Wine,
    title: 'The Reception',
    time: '5:30 PM',
    location: 'Avianto Wedding Venue',
    address: 'Muldersdrift, Gauteng',
    description: 'Dinner, dancing, and celebration of this blessed union.',
  },
];

const EventDetailsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="details" className="py-24 md:py-32 bg-section-alt">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-script text-gold text-3xl mb-2">Celebrate With Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light tracking-wide">
            Wedding Details
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`bg-card border border-border rounded-sm p-8 text-center gold-glow transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 200}ms` }}
            >
              <event.icon className="w-8 h-8 text-gold mx-auto mb-4" strokeWidth={1.2} />
              <h3 className="font-serif text-2xl text-foreground mb-1">{event.title}</h3>
              <div className="section-divider !w-12 my-4" />

              <div className="space-y-3 text-muted-foreground font-body text-sm">
                <p className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-gold/70" strokeWidth={1.5} />
                  {event.time}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4 text-gold/70" strokeWidth={1.5} />
                  {event.location}
                </p>
                <p className="text-xs text-muted-foreground/70">{event.address}</p>
              </div>

              <p className="font-body text-muted-foreground text-sm mt-4 italic">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dress code */}
        <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-sm px-8 py-4">
            <Shirt className="w-5 h-5 text-gold" strokeWidth={1.2} />
            <div className="text-left">
              <p className="font-serif text-foreground text-sm tracking-wider uppercase">Dress Code</p>
              <p className="font-body text-muted-foreground text-sm">Semi-Formal / Garden Cocktail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsSection;
