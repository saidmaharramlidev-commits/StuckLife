'use client'

import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import '@/css/categories.css'
import '@/css/homePage.css'
import '@/css/howItWorks.css'
import '@/css/ideaCard.css'
import '@/css/navbar.css'

const metadata: Metadata = {
  title: "StuckLife",
  description: "Website that generates ideas to solve your problems. Get unstuck with StuckLife!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <Provider store={store}>
            {children}
          </Provider>
        </ClerkProvider>
      </body>
    </html>
  );
}
