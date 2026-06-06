import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MotionWrapper from './motion-wrapper';
import MainLayoutWrapper from '@/components/layout-wrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sistem Pembayaran Tagihan",
  description: "Platform pembayaran Tagihan Mahasiswa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionWrapper>
          <MainLayoutWrapper>
            {children}
          </MainLayoutWrapper>
        </MotionWrapper>
      </body>
    </html>
  );
}