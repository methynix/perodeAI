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
  description: 'Data scientist specializing in predictive AI for e-commerce. Explore machine learningmodels that drive sales, optimize inventory, and personalize customer experiences',
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
