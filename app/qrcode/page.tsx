import { Metadata } from "next";
import QrCodeGenerator from "../components/codeqr/QrCode";

export const metadata: Metadata = {
  title: "Mon Qr Code Generator",
  description:
    "Générez facilement des codes QR personnalisés en ligne avec notre outil convivial. Parfait pour partager des liens, des informations de contact et plus encore.",
};

const Page = () => {
  return (
    <div>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <QrCodeGenerator />
      </main>
    </div>
  );
};

export default Page;
