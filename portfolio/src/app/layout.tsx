"use client"
import '@/app/globals.css';
import '@/app/themes.css';
import { inter } from '@/lib/fonts';
// import { AuthProvider } from "@/context/AuthContext";
import Navbar from '@/components/navbar';
import { Suspense, useState } from 'react';
import ScrollDots from './test/ScrollDots';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ScrollDots />
        <div className="flex flex-col min-h-screen overflow-y-hidden">
          <Suspense>
            <div className="flex-grow">{children}</div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
