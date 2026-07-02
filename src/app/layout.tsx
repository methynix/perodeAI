import './globals.css';
import type {Metadata} from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--ff-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--ff-body',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--ff-mono',
  display: 'swap',
});

export const metadata :Metadata= {
  title: 'Perode | AI Predictive Models',
  description: 'Data scientist in Dar es Salaam building predictive AI for e-commerce — customer churn, pricing, and demand forecasting models that protect your revenue.Predictive models for e-commerce brands: catch churn 60 days early, cut dead stock, and forecast demand. See real case studies from data scientist Francis Mwaseba.',
  verification:{
    google:"f1QithqTVKQkNfiz7R9XvvDF_H0_UTofImZtH-fUWl0" 
  }
};

export const icons = {
  icon: '/logo.jpg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
