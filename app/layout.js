import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Arshdeepweb",
  description: "Arshdeepweb is a portfolio to showcase a services to around web and technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/A.png" sizes="50" />
      </head>
      <body className={` antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
