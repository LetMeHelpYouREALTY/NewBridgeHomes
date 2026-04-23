import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://newbridgehomesforsale.com"),
  title: "New Bridge Homes For Sale",
  description:
    "Las Vegas real estate listings and home search support from New Bridge Homes and Dr. Jan Duffy.",
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "New Bridge Homes",
  telephone: "+1-702-500-1955",
  email: "drjanduffy@bhhsnv.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9193 Nicole Paige Ct",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89139",
    addressCountry: "US",
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <header>
          <div className="container">
            <Link href="/">New Bridge Homes</Link>
            <nav aria-label="Main navigation">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/listings">Listings</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="container footer-grid">
            <div>
              <h3>New Bridge Homes</h3>
              <p>9193 Nicole Paige Ct, Las Vegas, NV 89139</p>
            </div>
            <div>
              <p>
                Phone: <a href="tel:+17025001955">(702) 500-1955</a>
              </p>
              <p>
                Email: <a href="mailto:drjanduffy@bhhsnv.com">drjanduffy@bhhsnv.com</a>
              </p>
            </div>
            <div>
              <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 10:00 AM - 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
