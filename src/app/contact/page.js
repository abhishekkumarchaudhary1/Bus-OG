export const metadata = {
  title: "Contact | Bus OG",
  description:
    "Get in touch with Bus OG for bookings, partnerships, or driver onboarding. Call, email, or send a quick query.",
};

const contactDetails = [
  { label: "Phone", value: "+254 700 555 111" },
  { label: "Email", value: "hello@busog.city" },
  { label: "Dispatch desk", value: "+254 733 888 222" },
  { label: "Address", value: "13 Riverside Lane, Nairobi, Kenya" },
];

export default function ContactPage() {
  return (
    <div className="space-y-14">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold text-[#1a1a1a]">Contact us</h1>
        <p className="max-w-3xl text-base leading-relaxed text-[#6b6b6b]">
          Reach out for bookings, partnership inquiries, or to onboard your
          vehicle onto the Bus OG network. Our team responds within business
          hours and monitors urgent requests after hours.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-5 rounded-3xl border border-[#e0e0e2] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1a1a1a]">
            Quick contacts
          </h2>
          <dl className="space-y-3 text-sm text-[#6b6b6b]">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="flex items-start justify-between gap-4">
                <dt className="font-medium text-[#1a1a1a]">{detail.label}</dt>
                <dd className="text-right">{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form className="grid gap-4 rounded-3xl border border-[#e0e0e2] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1a1a1a]">
            Send a quick query
          </h2>
          <Field label="Name">
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="rounded-xl border border-[#dcdce0] bg-white px-4 py-3 text-base text-[#1a1a1a] shadow-sm outline-none transition focus:border-[#8aa6ff] focus:ring-2 focus:ring-[#cfd8ff]"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="rounded-xl border border-[#dcdce0] bg-white px-4 py-3 text-base text-[#1a1a1a] shadow-sm outline-none transition focus:border-[#8aa6ff] focus:ring-2 focus:ring-[#cfd8ff]"
            />
          </Field>
          <Field label="Message">
            <textarea
              name="message"
              rows={4}
              placeholder="Share how we can help."
              className="rounded-xl border border-[#dcdce0] bg-white px-4 py-3 text-base text-[#1a1a1a] shadow-sm outline-none transition focus:border-[#8aa6ff] focus:ring-2 focus:ring-[#cfd8ff]"
            />
          </Field>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#353535]"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[#1a1a1a]">
      <span>{label}</span>
      {children}
    </label>
  );
}

