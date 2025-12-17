"use client";
import { useState } from "react";
import QRCode from "react-qrcode-logo";
import Link from "next/link";
import "./Qrcode.css";

const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState(
    "https://social-links-tau-flax.vercel.app/generate"
  );
  const [qrColor, setQrColor] = useState("");
  const [qrBgColor] = useState("#ffffff");
  const [qrSize, setQrSize] = useState(300);
  const clear = () => {
    setInputValue("");
  };

  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      const image = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const a = document.createElement("a");
      a.href = image;
      a.download = "qrcode.png";
      a.click();
    }
  };
  return (
    <div className="qrcode-wrapper">
      <div className="qrcode-box">
        <header className="qrcode-header">
          <h1 className="qrcode-title">Scan me</h1>
        </header>
        <main className="qrcode-main">
          <div className="qrcode-display" aria-hidden={false}>
            <QRCode
              value={inputValue}
              size={qrSize}
              fgColor={qrColor}
              bgColor={qrBgColor}
            />
          </div>

          <input
            type="text"
            placeholder="Enter text or URL"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="qrcode-input"
          />
          <h2 className="text-lg font-bold">Options de personnalisation :</h2>
          <div className="qrcode-options">
            <label className="flex flex-col qrcode-label">
              <input
                type="color"
                value={qrColor}
                onChange={(e) => setQrColor(e.target.value)}
                className="input"
              />
            </label>

            <label className="qrcode-label">
              <input
                type="number"
                value={qrSize}
                onChange={(e) => setQrSize(Number(e.target.value))}
                className="input"
                min={100}
                max={200}
              />
            </label>
          </div>
        </main>

        <footer className="qrcode-footer">
          <div className="btn-group">
            <button
              onClick={downloadQRCode}
              className="btn btn-primary qrcode-btn"
            >
              Télécharger
            </button>

            <button onClick={clear} className="btn btn-primary qrcode-btn">
              <Link href="/home">Entrer dans le Portfolio</Link>
            </button>
            <button onClick={clear} className="btn btn-primary qrcode-btn">
              Effacer
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
