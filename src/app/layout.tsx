import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ReduxProvider } from "@/redux/porvider";
import { PortfolioProvider } from "@/context/PortfolioContext";
import Footer from "@/components/Footer/Footer";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "RM-Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={` ${inter.className}`}>
        <ReduxProvider>
          <PortfolioProvider>
            <div className="min-h-screen">
              <Header />
              {children}
              <Footer />
            </div>
          </PortfolioProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
