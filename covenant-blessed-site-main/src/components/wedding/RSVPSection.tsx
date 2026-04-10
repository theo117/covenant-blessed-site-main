import { useState, FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const RSVPSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const errs: Record<string, string> = {};
    if (!form.get('name')?.toString().trim()) errs.name = 'Please enter your name.';
    if (!form.get('attendance')) errs.attendance = 'Please select your attendance.';
    const guests = parseInt(form.get('guests')?.toString() || '0');
    if (isNaN(guests) || guests < 0 || guests > 10) errs.guests = 'Enter a valid guest count (0-10).';
    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="rsvp" className="py-24 md:py-32 bg-section-blush">
      <div ref={ref} className="max-w-2xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-script text-gold text-3xl mb-2">Join Our Celebration</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light tracking-wide">
            Kindly Respond
          </h2>
          <div className="section-divider mt-6" />
          <p className="font-body text-muted-foreground mt-4 text-sm">
            Please let us know if you'll be joining us on our special day by September 1, 2026.
          </p>
        </div>

        {submitted ? (
          <div className={`text-center bg-card border border-border rounded-sm p-12 gold-glow transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="text-gold text-3xl mb-4">✝</div>
            <p className="font-script text-gold text-4xl mb-3">Thank You!</p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Your response has been received. We are so grateful and excited to celebrate this
              blessed day with you. May God bless you abundantly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className={`bg-card border border-border rounded-sm p-8 md:p-12 gold-glow transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-serif text-foreground text-sm tracking-wider uppercase mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border border-border bg-background rounded-sm px-4 py-3 font-body text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                />
                {errors.name && <p className="text-destructive text-xs mt-1 font-body">{errors.name}</p>}
              </div>

              {/* Attendance */}
              <div>
                <label className="block font-serif text-foreground text-sm tracking-wider uppercase mb-2">
                  Will You Attend?
                </label>
                <div className="flex gap-4">
                  {['Joyfully Accept', 'Regretfully Decline'].map((option) => (
                    <label key={option} className="flex items-center gap-2 font-body text-sm text-muted-foreground cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value={option}
                        className="accent-gold"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                {errors.attendance && <p className="text-destructive text-xs mt-1 font-body">{errors.attendance}</p>}
              </div>

              {/* Guest count */}
              <div>
                <label className="block font-serif text-foreground text-sm tracking-wider uppercase mb-2">
                  Number of Guests
                </label>
                <input
                  name="guests"
                  type="number"
                  min={0}
                  max={10}
                  defaultValue={1}
                  className="w-24 border border-border bg-background rounded-sm px-4 py-3 font-body text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                />
                {errors.guests && <p className="text-destructive text-xs mt-1 font-body">{errors.guests}</p>}
              </div>

              {/* Dietary */}
              <div>
                <label className="block font-serif text-foreground text-sm tracking-wider uppercase mb-2">
                  Dietary Notes
                </label>
                <input
                  name="dietary"
                  type="text"
                  placeholder="Any allergies or preferences"
                  className="w-full border border-border bg-background rounded-sm px-4 py-3 font-body text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block font-serif text-foreground text-sm tracking-wider uppercase mb-2">
                  A Message for the Couple
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Share your blessings or well-wishes..."
                  className="w-full border border-border bg-background rounded-sm px-4 py-3 font-body text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-gold/50 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gold text-primary-foreground font-serif text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded-sm"
              >
                Send RSVP
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
