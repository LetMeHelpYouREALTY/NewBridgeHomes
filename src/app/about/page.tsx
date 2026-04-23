import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | New Bridge Homes",
  description:
    "Learn about New Bridge Homes and Dr. Jan Duffy's real estate services in Las Vegas.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>About New Bridge Homes</h1>
        </div>
      </section>
      <section className="page-section container">
        <h2>Your Trusted Las Vegas Real Estate Partner</h2>
        <p>
          New Bridge Homes helps buyers and sellers across Las Vegas, Henderson, and Summerlin with
          relationship-first real estate service.
        </p>
        <p>
          Dr. Jan Duffy, License S.0197614.LLC, serves clients through Berkshire Hathaway
          HomeServices Nevada Properties.
        </p>
      </section>
    </main>
  );
}
