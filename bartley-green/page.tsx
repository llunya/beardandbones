import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const services = [
  { name: 'Gentleman\'s Haircut', price: '£22', description: 'Consultation, tailored precision cut, and styling using premium products.' },
  { name: 'Beard Shape-up', price: '£15', description: 'Sculpting, straight razor finish, and hot towel treatment.' },
  { name: 'Buzz Cut', price: '£15', description: 'One grade all over, lined up sharp.' },
  { name: 'Scissor Cut', price: '£25', description: 'Classic all-scissor work for longer styles.' },
  { name: 'Hair & Clean Shave', price: '£35', description: 'Precision cut followed by a traditional hot towel clean shave.' },
  { name: 'Head Shave & Beard', price: '£28', description: 'Foil or razor head shave coupled with a structured beard shape-up.' },
  { name: 'The Gold Tooth Package', price: '£32', description: 'The ultimate combo: Precision haircut, beard line-up, and premium styling.' },
  { name: 'Black Mask / Nose Waxing', price: '£10', description: 'Deep pore cleansing mask and precision nose waxing.' },
];

export default function BartleyGreen() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-6 block">The Original</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none uppercase -tracking-wider">
              Bartley <span className="italic text-bone/60 normal-case tracking-normal">Green</span>
            </h1>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="relative aspect-video w-full overflow-hidden border border-white/5">
            <Image
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="Bartley Green Shop"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-10 left-10 pt-4 border-l-2 border-amber pl-6 max-w-sm hidden sm:block">
              <p className="text-bone/80 text-sm leading-relaxed">
                Where it all started. A sanctuary built for the modern gentleman who demands more from his downtime.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* The Experience */}
      <section className="py-24 bg-charcoal border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <FadeIn>
              <h2 className="font-serif text-4xl mb-6">The Welcome Experience</h2>
              <p className="text-bone/70 leading-relaxed font-light text-lg mb-8">
                Step off the street and into a different pace. At Bartley Green, the experience begins before you even hit the chair. We've curated an environment that feels less like a waiting room and more like a private members lounge.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] bg-matte-black overflow-hidden flex items-center justify-center p-8">
                {/* Visual placeholder for lounge atmosphere */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #8c6733 0%, transparent 70%)' }} />
                <h3 className="relative z-10 font-serif text-3xl italic text-bone/60 text-center max-w-xs">
                  "Take a seat, grab a drink, and switch off."
                </h3>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-square group overflow-hidden">
              <FadeIn delay={0.2} fullWidth>
                <Image
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Garden of Eden Treatment"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-charcoal/30 mix-blend-multiply" />
              </FadeIn>
            </div>
            <div className="order-1 lg:order-2">
              <FadeIn>
                <span className="text-amber text-xs uppercase tracking-widest font-bold mb-4 block">Signature Vibe</span>
                <h2 className="font-serif text-4xl mb-6">The Garden of Eden</h2>
                <p className="text-bone/70 leading-relaxed font-light mb-6">
                  Our signature treatment area offers a distinct atmosphere. Surrounded by lush dark foliage against matte black walls with warm ambient lighting, it's designed to be a completely immersive grooming escape.
                </p>
                <div className="flex gap-4 items-center mt-8">
                  <div className="h-px w-12 bg-amber" />
                  <span className="text-xs uppercase tracking-[0.2em] text-bone/50">Exclusive Treatment Area</span>
                </div>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* Services Menu */}
      <section className="py-32 bg-matte-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-5xl md:text-6xl mb-6">Service Menu</h2>
              <div className="w-16 h-px bg-amber mx-auto" />
            </div>
          </FadeIn>

          <div className="space-y-4">
            {services.map((service, i) => (
              <FadeIn key={service.name} delay={i * 0.05} direction="up">
                <div className="group flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-8 border-b border-white/5 pb-6 hover:border-amber/50 transition-colors">
                  <div className="flex-1 max-w-xl">
                    <h4 className="font-serif text-2xl text-bone mb-2 group-hover:text-amber transition-colors">{service.name}</h4>
                    <p className="text-sm text-bone/50 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0 font-mono text-xl text-bone/90 group-hover:text-amber transition-colors">
                    {service.price}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-24 text-center">
              <a 
                href="/book" 
                className="inline-block bg-amber text-matte-black px-12 py-5 text-sm uppercase tracking-[0.15em] font-bold hover:bg-bone transition-transform hover:-translate-y-1"
              >
                Secure Your Spot
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
