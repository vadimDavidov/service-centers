'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import TopBar from '@/global-components/TopBar';
import Footer from '@/global-components/Footer';
import { citiesData } from '@/data/citiesData';
import { createContext, useState } from 'react';
import Head from 'next/head';

const inter = Inter({ subsets: ['cyrillic', 'latin'] });

export const CitiesDataContext = createContext(citiesData);

function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className} suppressHydrationWarning={true}>
        <CitiesDataContext.Provider value={citiesData}>
          <TopBar />
        </CitiesDataContext.Provider>
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
