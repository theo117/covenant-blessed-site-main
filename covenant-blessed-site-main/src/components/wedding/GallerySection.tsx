import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';

const images = [
  { src: gallery1, alt: 'Walking in the garden', span: 'md:col-span-1 md:row-span-2' },
  { src: gallery2, alt: 'The ring', span: 'md:col-span-1' },
  { src: gallery3, alt: 'Laughing together', span: 'md:col-span-1' },
  { src: gallery4, alt: 'The chapel', span: 'md:col-span-1 md:row-span-2' },
];

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-script text-gold text-3xl mb-2">Precious Moments</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground font-light tracking-wide">
            Our Gallery
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={img.alt}
              className={`overflow-hidden rounded-sm ${img.span} transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${200 + i * 150}ms` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
