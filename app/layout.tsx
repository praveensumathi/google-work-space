import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  weight: "400",
  variable: "--font-poppins-sans",
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth">
      <head>
        <meta
          name="keywords"
          content="Google Workspace, Authorized reseller India"
        />
      </head>
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
