import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';

const team = [
  { name: 'Jay', role: 'Founder & Master Barber', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'With over a decade of precision cutting experience, Jay brings authentic Turkish barbering techniques mixed with modern styling.' },
  { name: 'Michaela', role: 'Co-Founder & Operations', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'The backbone of Beard & Bone. Ensures the premium standard and atmosphere are maintained flawlessly.' },
  { name: 'Owen', role: 'Senior Barber', image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'Specialist in modern fading techniques and sharp, structured beard sculpting.' },
  { name: 'Aidan', role: 'Barber', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'Meticulous attention to detail. Known for creating effortless, textured styles.' },
  { name: 'Ron', role: 'Barber', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'Classic barbering meets contemporary trends. A master of the traditional scissor cut.' },
  { name: 'Kyan', role: 'Junior Barber', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', bio: 'The rising star of the shop. Passionate, dedicated, and mastering the craft daily.' },
];

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Editorial Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <FadeIn>
          <div className="flex flex-col md:flex-row gap-12 justify-between items-end border-b border-white/10 pb-12">
            <div>
              <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-6 block">The Story</span>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
                Brotherhood <br /> <span className="italic text-bone/60">&amp; Craft.</span>
              </h1>
            </div>
            <p className="text-bone/70 max-w-sm text-sm leading-relaxed">
              Founded on the principles of authentic barbering, superior atmosphere, and building a community.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Story Content */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <FadeIn>
              <h3 className="font-serif text-3xl md:text-4xl italic text-amber mb-8">Est. 2016</h3>
              <div className="space-y-6 text-bone/80 leading-relaxed font-light">
                <p>
                  Beard &amp; Bone Barbers was founded in 2016 by Jay and Michaela with a clear vision: to elevate the standard of men's grooming by blending the fierce precision of traditional Turkish barbering with a modern, luxury aesthetic.
                </p>
                <p>
                  We didn't just want to open a barbershop; we wanted to build a sanctuary. A place where the atmosphere hits you as soon as you walk through the door, where the standards never slip, and where every client leaves feeling sharper than when they arrived.
                </p>
                <p>
                  Today, that vision remains unchanged. As we expand towards Bromsgrove, our commitment to authenticity, community, and unmatched craftsmanship is stronger than ever.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/3] w-full group">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Barbershop heritage"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-white/10" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5 pt-24">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-6xl mb-6">Meet The Team</h2>
            <p className="text-bone/60 max-w-lg mx-auto">
              A curated team of premium grooming specialists united by their passion for the craft.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-20">
          {team.map((member, i) => (
            <FadeIn key={member.name} delay={0.1 * i} direction="up">
              <div className="group">
                <div className="relative aspect-[3/4] mb-6 overflow-hidden bg-charcoal">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter contrast-125"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-matte-black/60 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="font-serif text-3xl mb-1 text-bone">{member.name}</h3>
                    <span className="text-amber text-[0.65rem] uppercase tracking-widest font-bold">
                      {member.role}
                    </span>
                  </div>
                </div>
                <p className="text-bone/60 text-sm leading-relaxed px-2 border-l border-amber/30">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
