import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | New Bridge Homes",
  description:
    "Contact New Bridge Homes and Dr. Jan Duffy for Las Vegas real estate support.",
  alternates: { canonical: "/contact" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Las Vegas, Henderson, North Las Vegas, and Summerlin.",
      },
    },
    {
      "@type": "Question",
      name: "How can I schedule a showing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call (702) 500-1955 or use our contact form to request a showing.",
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="page-header">
        <div className="container">
          <h1>Contact New Bridge Homes</h1>
          <p>Call, email, or message us to start your Las Vegas home search.</p>
        </div>
      </section>
      <section className="page-section container">
        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <ContactForm />
          <div className="card card-body">
            <h2>Contact Details</h2>
            <p>New Bridge Homes</p>
            <p>9193 Nicole Paige Ct, Las Vegas, NV 89139</p>
            <p>
              Phone: <a href="tel:+17025001955">(702) 500-1955</a>
            </p>
            <p>
              Email: <a href="mailto:drjanduffy@bhhsnv.com">drjanduffy@bhhsnv.com</a>
            </p>
            <p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=9193+Nicole+Paige+Ct+Las+Vegas+NV+89139"
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
