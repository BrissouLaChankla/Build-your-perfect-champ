import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import Head from "next/head";
export const metadata = {
  title: "Legends' Fusion - Build your Lol Champ",
  description: "Randomly select skills from League of legends champions and combine them to create a unique legend",
};

export default function RootLayout({ children }) {
  return (

    <html lang="fr" data-theme="dark">
      <Head>
        <title>Legends' Fusion - Build your Lol Champ</title>
        <meta name="description" content="Randomly select skills from League of legends champions and combine them to create a unique legend" />

        <meta property="og:url" content="https://legends-fusion.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Legends' Fusion - Build your Lol Champ" />
        <meta property="og:description" content="Randomly select skills from League of legends champions and combine them to create a unique legend" />
        <meta property="og:image" content="https://legends-fusion.com/meta.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="legends-fusion.com" />
        <meta property="twitter:url" content="https://legends-fusion.com/" />
        <meta name="twitter:title" content="Legends' Fusion - Build your Lol Champ" />
        <meta name="twitter:description" content="Randomly select skills from League of legends champions and combine them to create a unique legend" />
        <meta name="twitter:image" content="https://legends-fusion.com/meta.png" />

      </Head>
      <body className={inter.className} style={{ overflowX: "hidden" }} >{children}</body>
    </html >
  );
}
