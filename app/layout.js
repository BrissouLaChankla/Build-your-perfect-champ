import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legends' Fusion - Build your Lol Champ",
  description: "Randomly select skills from League of legends champions and combine them to create a unique legend",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Analytics />
      <html lang="fr" data-theme="dark">

        <body className={inter.className} style={{ overflowX: "hidden" }} >{children}</body>
      </html >
    </>
  );
}
