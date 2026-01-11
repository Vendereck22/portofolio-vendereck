"use client";
import "./globals.css";
import Footer from "./components/Common/Footer /Footer";
import NavBar from "./components/Common/NavBar /NavBar";
import ScrollToTop from "./components/Common/ScrollToTop/ScrollToTop";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <div data-theme={"light"} className="relative">
          <NavBar />
          {children}
        </div>
        <div className="bg-[#2A374A]">
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
