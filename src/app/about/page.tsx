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
          Dr. Jan Duffy, a licensed REALTOR® in real estate since 1983, serves clients across
          the Las Vegas Valley.
        </p>
      </section>
    </main>
  );
}
