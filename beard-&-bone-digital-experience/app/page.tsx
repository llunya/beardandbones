import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { TestimonialSlider } from '@/components/ui/TestimonialSlider';

const services = [
  { name: 'Gentleman\'s Haircut', price: '£22', description: 'Consultation, tailored precision cut, and styling using premium products.' },
  { name: 'Beard Shape-up', price: '£15', description: 'Sculpting, straight razor finish, and hot towel treatment.' },
  { name: 'Gold Tooth Package', price: '£32', description: 'The ultimate combo: Precision haircut, beard line-up, and premium styling.' },
  { name: 'Hair & Beard Re-style', price: '£37', description: 'Complete transformation. Extended time for a totally new look.' },
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Precision cut' },
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', alt: 'Premium tools' },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=988&q=80', alt: 'Straight razor shave' },
  { src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80', alt: 'Shop interior' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">
        <HeroBackground />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-24">
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-bone font-medium leading-[0.9] mb-6 tracking-tight text-balance uppercase">
              Precision Grooming.<br />
              <span className="italic font-light text-amber/90 tracking-normal capitalize text-4xl md:text-6xl lg:text-7xl">Modern Brotherhood.</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-bone/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
              More than a barbershop. A premium grooming experience built on craftsmanship, culture, and consistency.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/book" 
                className="bg-amber text-matte-black px-10 py-4 text-sm uppercase tracking-[0.15em] font-bold hover:bg-bone transition-colors w-full sm:w-auto text-center"
              >
                Book Appointment
              </Link>
              <Link 
                href="/bartley-green" 
                className="border border-bone/30 text-bone px-10 py-4 text-sm uppercase tracking-[0.15em] font-medium hover:border-amber hover:text-amber transition-colors w-full sm:w-auto text-center"
              >
                Explore The Shop
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust & Heritage Section */}
      <section className="py-24 bg-matte-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <FadeIn>
                <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Heritage</span>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                  Established 2016.<br />
                  <span className="italic text-bone/60">Rooted in Craft.</span>
                </h2>
                <div className="h-px w-24 bg-amber/30 mb-8" />
                <p className="text-bone/70 leading-relaxed max-w-lg mb-8 text-lg">
                  We built Beard &amp; Bone on the simple idea that a barbershop should be a sanctuary. Not just a place to get a haircut, but an experience defined by precision, attention to detail, and a welcoming atmosphere.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                  <div>
                    <h4 className="font-serif text-4xl text-amber italic mb-1">Thousands</h4>
                    <span className="text-xs uppercase tracking-widest text-bone/50">Of cuts delivered</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-4xl text-amber italic mb-1">Premium</h4>
                    <span className="text-xs uppercase tracking-widest text-bone/50">Grooming Specialists</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="relative h-[600px] w-full rounded-tr-[100px] rounded-bl-[100px] overflow-hidden hidden md:block">
              <FadeIn direction="left" delay={0.2} fullWidth>
                <div className="relative h-[600px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    fill
                    alt="Barber craftsmanship"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 mix-blend-multiply" />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <FadeIn>
              <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-4 block">The Menu</span>
              <h2 className="font-serif text-4xl md:text-5xl">Featured Services</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/bartley-green" className="text-bone/60 hover:text-amber text-sm uppercase tracking-widest transition-colors flex items-center gap-4">
                View Full Menu <span className="w-12 h-px bg-current" />
              </Link>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.name} delay={0.1 * index}>
                <Link href="/book" className="block group border border-white/5 bg-matte-black/60 p-8 hover:bg-charcoal transition-all duration-500 relative overflow-hidden hover:border-white/10 hover:shadow-2xl hover:shadow-amber/5 focus:outline-none focus:ring-1 focus:ring-amber">
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/[0.03] to-transparent z-0" />
                  
                  {/* Subtle background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  <div className="relative z-10 flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl text-bone group-hover:text-amber transition-colors duration-300 flex items-center gap-3">
                      {service.name}
                      <svg className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </h3>
                    <span className="font-mono text-xl text-bone border-b border-amber/30 group-hover:border-amber transition-colors duration-300">{service.price}</span>
                  </div>
                  <p className="relative z-10 text-bone/50 text-sm leading-relaxed max-w-md group-hover:text-bone/70 transition-colors duration-300 font-light">
                    {service.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at center, #c48c31 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold block">The Standard</span>
            </div>
            <TestimonialSlider />
          </FadeIn>
        </div>
      </section>

      {/* Cinematic Gallery */}
      <section className="py-24 bg-matte-black">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Atmosphere</span>
              <h2 className="font-serif text-4xl md:text-5xl">The Shop Experience</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="relative aspect-[3/4] group overflow-hidden bg-charcoal">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-charcoal z-0" />
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #c48c31 0%, transparent 60%)', filter: 'blur(60px)' }} />
        
        <div className="relative z-10 max-w-3xl px-6">
          <FadeIn>
            <h2 className="font-serif text-5xl md:text-7xl mb-6 italic text-bone">Stay Sharp.</h2>
            <p className="text-bone/70 text-lg mb-12">
              Book your next appointment and experience modern barbering done properly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                href="/book" 
                className="bg-amber text-matte-black px-12 py-5 text-sm uppercase tracking-[0.15em] font-bold hover:bg-bone transition-transform hover:-translate-y-1 w-full sm:w-auto"
              >
                Book Appointment
              </Link>
              <Link 
                href="/contact" 
                className="border border-bone/30 text-bone px-12 py-5 text-sm uppercase tracking-[0.15em] font-medium hover:border-amber hover:text-amber transition-colors w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
