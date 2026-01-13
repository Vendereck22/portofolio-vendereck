import "./globals.css";
import Footer from "./Components/Common/Footer/Footer";
import NavBar from "./Components/Common/NavBar/NavBar";
import ScrollToTop from "./Components/Common/ScrollToTop/ScrollToTop";
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
