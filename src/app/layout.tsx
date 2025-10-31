import type { Metadata } from "next";
import { Ubuntu} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";

const ubuntu = Ubuntu({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "VegasNiteLife - Your Ultimate Vegas Guide",
  description: "Discover the best restaurants, nightlife, hotels, and experiences in Las Vegas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.variable} font-sans antialiased bg-gray-900 text-white min-h-screen`}>
        <div className="flex">
          <NavBar/>
          {/* flex 1 the child so it can take all of the space*/}
          <div className="flex-1 ml-64">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
        </div>
      </body>
    </html>
  );
}