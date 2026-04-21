import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://lol-tracker.com";
const PAGE_PATH = "/tools/legends-fusion";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Legends' Fusion - Build your LoL champion | LoL-Tracker",
  description:
    "Randomly pick abilities from League of Legends champions and combine them to create your own unique legend. A LoL-Tracker mini-game.",
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    siteName: "LoL-Tracker",
    title: "Legends' Fusion - Build your LoL champion",
    description:
      "Randomly pick abilities from League of Legends champions and combine them to create your own unique legend.",
    images: [`${PAGE_PATH}/meta.png`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Legends' Fusion - Build your LoL champion",
    description:
      "Randomly pick abilities from League of Legends champions and combine them to create your own unique legend.",
    images: [`${PAGE_PATH}/meta.png`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preload" as="image" href={`${PAGE_PATH}/loading/0.gif`} />
        <link rel="preload" as="image" href={`${PAGE_PATH}/loading/1.gif`} />
      </head>
      <body className={inter.className} style={{ overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
