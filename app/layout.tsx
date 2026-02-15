import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "NAMA Med History",
  description: "AI Powered Medicine OPD History + Case Presentation Generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
