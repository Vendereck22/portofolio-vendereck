import Footer from "./components/Common/Footer";
import NavBar from "./components/Common/NavBar";
import ScrollToTop from "./components/Common/ScrollToTop";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
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
