import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "LandingPro",
  description:
    "Criação de Landing Pages de alta conversão para negócios. Transforme visitantes em clientes com um site rápido, moderno e focado em resultados. Peça seu orçamento!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <head />
      <link rel="icon" href="/favicon.ico" />
      <body className={`${raleway.className} antialiased`}>{children}</body>
    </html>
  );
}
