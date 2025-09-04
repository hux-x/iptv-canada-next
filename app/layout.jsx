// app/layout.js
import "./globals.css";
import ClientProviders from "./provider"; // ✅ use this

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}