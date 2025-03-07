import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "A portfolio website created with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
