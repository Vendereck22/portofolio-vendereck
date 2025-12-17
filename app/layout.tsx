import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div data-theme={"light"} className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
