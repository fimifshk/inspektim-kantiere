import "./globals.css";

export const metadata = {
  title: "Inspektim Kantiere",
  description: "Sistemi GIS për Inspektimet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}