import { FadeIn } from '@/components/ui/FadeIn';

export default function Contact() {
  return (
    <div className="pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <FadeIn>
          <div className="mb-20 text-center md:text-left">
            <h1 className="font-serif text-5xl md:text-7xl leading-none mb-6">
              Get in <span className="italic text-bone/60">Touch.</span>
            </h1>
            <p className="text-bone/60 text-lg leading-relaxed max-w-xl font-light mx-auto md:mx-0">
              Whether you have a question about our services or need help with a booking, drop us a message.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeIn delay={0.2}>
            <div className="bg-charcoal p-8 md:p-12 border border-white/5">
              <h3 className="font-serif text-2xl text-amber italic mb-8">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-widest text-bone/50 mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-matte-black border border-white/10 px-4 py-3 text-bone focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] uppercase tracking-widest text-bone/50 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-matte-black border border-white/10 px-4 py-3 text-bone focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest text-bone/50 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-matte-black border border-white/10 px-4 py-3 text-bone focus:outline-none focus:border-amber transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[0.65rem] uppercase tracking-widest text-bone/50 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-matte-black border border-white/10 px-4 py-3 text-bone focus:outline-none focus:border-amber transition-colors resize-none"
                  ></textarea>
                </div>
                <button 
                  type="button"
                  className="w-full bg-amber text-matte-black px-8 py-4 text-[0.75rem] uppercase tracking-[0.15em] font-bold hover:bg-bone transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-16">
              <div>
                <h3 className="font-serif text-2xl text-amber italic mb-6">Bartley Green</h3>
                <address className="not-italic text-bone/70 leading-relaxed font-light mb-6">
                  123 High Street<br />
                  Bartley Green<br />
                  Birmingham, B32 1AA<br />
                  United Kingdom
                </address>
                <div className="text-bone/70 font-light flex flex-col gap-2">
                  <p><span className="text-bone/40 inline-block w-20">Phone:</span> 0121 123 4567</p>
                  <p><span className="text-bone/40 inline-block w-20">Email:</span> info@beardandbone.com</p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-amber italic mb-6">Opening Hours</h3>
                <ul className="text-bone/70 font-light space-y-3">
                  <li className="flex justify-between max-w-sm"><span className="text-bone/50">Monday</span> Closed</li>
                  <li className="flex justify-between max-w-sm"><span className="text-bone/50">Tuesday</span> 9:00 AM - 6:00 PM</li>
                  <li className="flex justify-between max-w-sm"><span className="text-bone/50">Wednesday</span> 9:00 AM - 6:00 PM</li>
                  <li className="flex justify-between max-w-sm"><span className="text-bone/50">Thursday</span> 9:00 AM - 8:00 PM</li>
                  <li className="flex justify-between max-w-sm"><span className="text-bone/50">Friday</span> 9:00 AM - 7:00 PM</li>
                  <li className="flex justify-between max-w-sm"><span className="text-bone/50">Saturday</span> 8:00 AM - 4:00 PM</li>
                  <li className="flex justify-between max-w-sm"><span className="text-bone/50">Sunday</span> Closed</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
