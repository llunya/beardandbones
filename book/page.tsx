import Link from 'next/link';
import { FadeIn } from '@/components/ui/FadeIn';

export default function Book() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-32 pb-24 px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-matte-black opacity-90" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(140, 103, 51, 0.15) 0%, transparent 60%)' }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <FadeIn>
          <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Ready?</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">
            Choose Your <span className="italic text-bone/60">Location.</span>
          </h1>
          <p className="text-bone/60 text-lg leading-relaxed font-light mb-16">
            Select the shop you'd like to visit to continue to our secure booking portal.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link 
              href="#" 
              className="bg-charcoal border border-white/10 hover:border-amber group p-8 transition-all duration-300"
            >
              <h3 className="font-serif text-3xl mb-2 group-hover:text-amber transition-colors">Bartley Green</h3>
              <p className="text-bone/50 text-sm font-light">The original shop.</p>
              <div className="mt-8 text-xs uppercase tracking-widest text-amber flex items-center justify-center gap-2">
                Book Now <span>&rarr;</span>
              </div>
            </Link>

            <div className="bg-charcoal/50 border border-white/5 p-8 opacity-60 cursor-not-allowed">
              <h3 className="font-serif text-3xl mb-2 text-bone/50">Bromsgrove</h3>
              <p className="text-bone/40 text-sm font-light">Expansion.</p>
              <div className="mt-8 text-xs uppercase tracking-widest text-bone/30">
                Opening Soon
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
