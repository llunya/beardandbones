import { FadeIn } from '@/components/ui/FadeIn';

export default function BookingPolicy() {
  return (
    <div className="pt-40 pb-32 max-w-4xl mx-auto px-6 md:px-12">
      <FadeIn>
        <div className="mb-20">
          <span className="text-amber text-xs uppercase tracking-[0.3em] font-bold mb-6 block">Transparent &amp; Fair</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-none mb-8">
            Booking <span className="italic text-bone/60">Policy.</span>
          </h1>
          <p className="text-bone/60 text-lg leading-relaxed max-w-2xl font-light">
            We value your time, and we ask that you value ours. Our policies are designed to ensure every client gets the premium experience they deserve without delays.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-12">
        <FadeIn delay={0.1}>
          <div className="bg-charcoal border border-white/5 p-8 md:p-12">
            <h3 className="font-serif text-3xl text-bone mb-4 flex items-center gap-4">
              <span className="text-amber font-mono text-xl opacity-50">01</span>
              Deposits
            </h3>
            <p className="text-bone/70 leading-relaxed font-light">
              All appointments require a <strong className="text-bone font-medium">50% deposit</strong> at the time of booking. This secures your slot and is deducted from your final bill on the day. No deposit means the slot remains open.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-charcoal border border-white/5 p-8 md:p-12">
            <h3 className="font-serif text-3xl text-bone mb-4 flex items-center gap-4">
              <span className="text-amber font-mono text-xl opacity-50">02</span>
              Cancellations &amp; No Shows
            </h3>
            <p className="text-bone/70 leading-relaxed font-light">
              We require exactly <strong className="text-bone font-medium">24 hours notice</strong> for any cancellations or rescheduling. Failure to provide 24 hours notice will result in the loss of your deposit. No-shows will be required to pay for their missed haircut in full before booking another appointment.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="bg-charcoal border border-white/5 p-8 md:p-12">
            <h3 className="font-serif text-3xl text-bone mb-4 flex items-center gap-4">
              <span className="text-amber font-mono text-xl opacity-50">03</span>
              Same-Day Appointments
            </h3>
            <p className="text-bone/70 leading-relaxed font-light">
              Any appointments booked for the same day must be paid in full upfront. This is non-refundable if you fail to attend.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="bg-charcoal border border-white/5 p-8 md:p-12">
            <h3 className="font-serif text-3xl text-bone mb-4 flex items-center gap-4">
              <span className="text-amber font-mono text-xl opacity-50">04</span>
              Payment Methods
            </h3>
            <p className="text-bone/70 leading-relaxed font-light">
              Please note that the remaining balance on the day is <strong className="text-amber">CASH ONLY</strong>. Please ensure you bring the correct amount to your appointment to avoid delays.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="bg-charcoal border border-white/5 p-8 md:p-12">
            <h3 className="font-serif text-3xl text-bone mb-4 flex items-center gap-4">
              <span className="text-amber font-mono text-xl opacity-50">05</span>
              VIP Membership
            </h3>
            <p className="text-bone/70 leading-relaxed font-light">
              VIP members benefit from wavered deposit requirements after achieving consistent attendance. Abuse of this privilege (late arrivals or no-shows) will result in a return to the standard deposit policy.
            </p>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
