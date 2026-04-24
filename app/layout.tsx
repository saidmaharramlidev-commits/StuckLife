'use client';

import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import '@/css/navbar.css';
import '@/css/homePage.css';
import '@/css/ideaCard.css'

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
    <html
      lang="en"
    >
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
