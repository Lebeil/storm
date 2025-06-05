import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "STORM 2025 - Basketball Event | Tournoi Gratuit 14 Juin",
  description: "Événement basketball gratuit exceptionnel ! Pros vs streetballers, shows, dotations Adidas, musique live. Réserve ta place gratuite pour le 14 juin 2025 à Levallois.",
  keywords: ["basketball", "storm", "tournoi", "gratuit", "streetball", "paris", "levallois", "2025", "adidas", "instadrink"],
  authors: [{ name: "INSTADRINK" }],
  creator: "INSTADRINK",
  publisher: "STORM 2025",

  // Open Graph (Facebook, WhatsApp, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://storm2025.com',
    siteName: 'STORM 2025',
    title: 'STORM 2025 - Tournoi Basketball Gratuit | 14 Juin 2025',
    description: 'Événement basketball gratuit exceptionnel ! Pros vs streetballers, shows, dotations Adidas, musique live. Réserve ta place gratuite.',
    images: [
      {
        url: '/images/stormf.jpg',
        width: 1200,
        height: 800,
        alt: 'STORM 2025 - Événement Basketball',
        type: 'image/jpeg',
      },
      {
        url: '/images/lp.jpeg',
        width: 1200,
        height: 800,
        alt: 'STORM 2025 - Tournoi Basketball',
        type: 'image/jpeg',
      }
    ],
  },

  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@storm2025',
    creator: '@instadrink',
    title: 'STORM 2025 - Tournoi Basketball Gratuit | 14 Juin 2025',
    description: 'Événement basketball gratuit exceptionnel ! Pros vs streetballers, shows, dotations Adidas, musique live. Réserve ta place gratuite.',
    images: ['/images/stormf.jpg'],
  },

  // Meta tags génériques
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Géolocalisation
  other: {
    'geo.region': 'FR-IDF',
    'geo.placename': 'Levallois-Perret',
    'geo.position': '48.8867;2.2773',
    'ICBM': '48.8867, 2.2773',

    // WhatsApp spécifique
    'whatsapp:image': '/images/stormf.jpg',
    'whatsapp:title': 'STORM 2025 - Tournoi Basketball Gratuit',
    'whatsapp:description': 'Événement basketball gratuit exceptionnel ! 14 juin 2025 à Levallois.',

    // Slack/Discord
    'slack:image': '/images/stormf.jpg',
    'discord:image': '/images/stormf.jpg',

    // Article tags
    'article:author': 'INSTADRINK',
    'article:publisher': 'STORM 2025',
    'article:section': 'Sports',
    'article:tag': 'basketball,tournoi,gratuit,streetball,paris',

    // Event specific
    'event:date': '2025-06-14',
    'event:location': 'Palais des Sports Marcel Cerdan, Levallois-Perret',
    'event:price': 'Gratuit',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
