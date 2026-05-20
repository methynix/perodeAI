import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Perode | AI Predictive Models',
  description: 'Data scientist specializing in predictive AI for e-commerce. Explore machine learningmodels that drive sales, optimize inventory, and personalize customer experiences',
};

export const icons = {
  icon: '/logo.jpg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="pt-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}