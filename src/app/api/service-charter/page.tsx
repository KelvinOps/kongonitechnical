// app/service-charter/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Charter | Kongoni Technical Vocational Training College",
  description: "Our official service charter in English and Kiswahili - outlining our commitment to quality service delivery and stakeholder satisfaction.",
  keywords: "service charter, mithaq wa huduma, quality service, stakeholder commitment, TVET standards",
  alternates: {
    canonical: "/service-charter",
  },
  openGraph: {
    title: "Service Charter - Kongoni TVTC",
    description: "Official service charter in English and Kiswahili",
    type: "website",
    url: "/service-charter",
  }
};

export default function ServiceCharterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}