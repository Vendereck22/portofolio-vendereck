import Head from "next/head";
import QrCodeGenerator from "../app/components/qrcode/QrCode";

const Home = () => {
  return (
    <div>
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate your own QR code easily" />
      </Head>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <QrCodeGenerator />
      </main>
    </div>
  );
};

export default Home;
