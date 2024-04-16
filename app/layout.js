import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="dark">
      <body className={inter.className} style={{
        backgroundColor: "#111111",
        backgroundImage: "linear-gradient(32deg, rgba(8, 8, 8, 0.74) 30px,transparent)",
        backgroundSize: "60px 60px",
        backgroundPosition: "-5px -5px"
      }}>{children}</body>
    </html >
  );
}
