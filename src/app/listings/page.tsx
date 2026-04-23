import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Listings | New Bridge Homes",
  description: "Browse available homes for sale in Las Vegas and New Bridge areas.",
  alternates: { canonical: "/listings" },
};

export default function ListingsPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Available Listings</h1>
          <p>Search homes currently on the market.</p>
        </div>
      </section>
      <section className="page-section container">
        <div className="grid grid-3">
          {properties.map((property) => (
            <article className="card" key={property.id}>
              <Image
                src={property.image}
                alt={property.title}
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="card-body">
                <h2>{property.title}</h2>
                <p>${property.price.toLocaleString()}</p>
                <p>{property.address}</p>
                <p>
                  {property.beds} beds | {property.baths} baths | {property.sqft.toLocaleString()} sqft
                </p>
                <Link href={`/listings/${property.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
