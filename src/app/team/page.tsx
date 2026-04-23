import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team | New Bridge Homes",
  description:
    "Meet Dr. Jan Duffy, licensed REALTOR at Berkshire Hathaway HomeServices Nevada Properties.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Meet Dr. Jan Duffy</h1>
        </div>
      </section>
      <section className="page-section container">
        <div className="grid" style={{ gridTemplateColumns: "minmax(280px, 360px) 1fr" }}>
          <Image
            src="/images/team/jan-duffy.jpg"
            alt="Dr. Jan Duffy, Las Vegas REALTOR"
            width={720}
            height={900}
            sizes="(max-width: 768px) 100vw, 360px"
            style={{ width: "100%", height: "auto" }}
          />
          <div>
            <h2>Licensed REALTOR</h2>
            <p>License S.0197614.LLC</p>
            <p>Berkshire Hathaway HomeServices Nevada Properties</p>
            <p>
              Specialties include luxury homes, 55+ communities, relocation support, and
              investment properties throughout Las Vegas.
            </p>
            <p>
              <a href="tel:+17025001955">(702) 500-1955</a> |{" "}
              <a href="mailto:drjanduffy@bhhsnv.com">drjanduffy@bhhsnv.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
