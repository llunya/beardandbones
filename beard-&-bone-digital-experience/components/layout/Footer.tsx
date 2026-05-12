import Link from 'next/link';

const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Twitter', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-charcoal pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/" className="flex flex-col group mb-6 inline-flex">
              <span className="font-serif text-3xl uppercase tracking-[0.15em] font-medium leading-none">
                Beard <span className="text-amber italic">&amp;</span> Bone
              </span>
              <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] mt-2 text-bone/50 group-hover:text-bone transition-colors">
                Premium Barbers
              </span>
            </Link>
            <p className="text-bone/60 text-sm max-w-sm leading-relaxed mt-6">
              More than a barbershop. A premium grooming experience built on craftsmanship, culture, and consistency since 2016.
            </p>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-serif text-lg italic text-bone mb-6">Locations</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/bartley-green" className="text-sm text-bone/60 hover:text-amber transition-colors">
                  Bartley Green
                </Link>
              </li>
              <li>
                <span className="text-sm text-bone/40 cursor-not-allowed">
                  Bromsgrove (Coming Soon)
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="font-serif text-lg italic text-bone mb-6">Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/about" className="text-sm text-bone/60 hover:text-amber transition-colors">
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link href="/booking-policy" className="text-sm text-bone/60 hover:text-amber transition-colors">
                  Booking Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-bone/60 hover:text-amber transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="font-serif text-lg italic text-bone mb-6">Connect</h4>
            <ul className="flex gap-6">
              {socialLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-bone/60 hover:text-amber transition-colors uppercase tracking-widest text-[0.65rem]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/5">
              <Link 
                href="/book"
                className="inline-flex items-center text-amber text-sm font-semibold tracking-wider hover:opacity-80 transition-opacity uppercase"
              >
                Book Appointment <span className="ml-2 font-serif text-xl italic leading-none whitespace-nowrap">&rarr;</span>
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-bone/40 text-xs tracking-wider">
            &copy; {new Date().getFullYear()} Beard &amp; Bone Barbers. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-bone/40 hover:text-bone text-xs tracking-wider transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-bone/40 hover:text-bone text-xs tracking-wider transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
