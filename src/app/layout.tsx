import type { Metadata } from "next";
import { Geist, Geist_Mono, Jost } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Jost({
  variable: "--font-nunito-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Wonderground Company",
  description: "Roser Tutusaus and Tom Weksler began collaborating in 2018. Together, they formed in Barcelona the performing arts company WONDERGROUND.\n" +
    "\n" +
    "WONDERGROUND’s works are focused on finding stories that are hidden within the body. Through them, they ask universal questions about humanity and its nature. They explore themes such as love, community, companionship, ecology, wilderness, death and revelation. They aim to create ‘Kinetic Poems’ and ‘Meditative Spectacles’. To make this happen, they use an original interdisciplinary language that is bridging together Contemporary Dance, Acrobatics, Butoh, partnering, text and ephemeral architectures.\n" +
    "\n" +
    "Their approach to their movement language is articulated through MOVEMENT ARCHERY, which develops the practice and the technical skills that nurture both the pedagogical side and the creative side of the duet.\n" +
    "\n" +
    "In November of 2022, they opened THE ISLAND, the creative house for their practice and artistic work, located in the forest in the outskirts of Barcelona.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
