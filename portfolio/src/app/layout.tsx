"use client"
import '@/app/globals.css';
import { inter } from '@/lib/fonts';
// import { AuthProvider } from "@/context/AuthContext";
import Navbar from '@/components/navbar';
import { Suspense, useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en">
    <body className={`${inter.className} antialiased`}>
        <div className="w-full flex-none sticky top-0 z-50">
          <Navbar/>
        </div>
        <div className="flex flex-col min-h-screen bg-gray-300">
          <Suspense>
            <div className="flex-grow">{children}</div>
          </Suspense>
          <footer className="text-center py-6 bg-green-700 text-white">
            <p>&copy; 2025 Tae-Min Kim. All rights reserved.</p>
          </footer>
        </div>
    </body>
  </html>

  );
}
