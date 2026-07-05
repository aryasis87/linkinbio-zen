import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600"], style: ["normal", "italic"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Sena","jobTitle":"Guru Mindfulness","url":"https://zen.pintuweb.com","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://zen.pintuweb.com"),
  title: "Sena — Ruang Teduh",
  description: "Link in bio guru mindfulness & teh, Sena: kelas, retret, dan tulisan dalam satu ruang yang tenang.",
  applicationName: "Sena",
  keywords: ["link in bio", "mindfulness", "meditasi", "kelas", "wellness"],
  authors: [{ name: "Sena" }],
  creator: "Sena",
  publisher: "Sena",
  alternates: { canonical: "https://zen.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://zen.pintuweb.com",
    siteName: "Sena",
    title: "Sena — Ruang Teduh",
    description: "Link in bio guru mindfulness & teh, Sena: kelas, retret, dan tulisan dalam satu ruang yang tenang.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Sena — Ruang Teduh" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sena — Ruang Teduh",
    description: "Link in bio guru mindfulness & teh, Sena: kelas, retret, dan tulisan dalam satu ruang yang tenang.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  );
}
