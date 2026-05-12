import type {Metadata} from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Beard & Bone Barbers | Precision Grooming',
  description: 'More than a barbershop. A premium grooming experience built on craftsmanship, culture, and consistency in Bartley Green, Birmingham.',
  keywords: ['Barber', 'Birmingham', 'Bartley Green', 'Premium Barbershop', 'Mens Grooming', 'Beard Trim', 'Haircut', 'Skin Fade'],
  openGraph: {
    title: 'Beard & Bone Barbers | Precision Grooming',
    description: 'A premium grooming experience built on craftsmanship, culture, and consistency in Bartley Green.',
    url: 'https://beardandbone.com',
    siteName: 'Beard & Bone Barbers',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Beard & Bone Barbershop Interior',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beard & Bone Barbers',
    description: 'Precision Grooming. Modern Brotherhood.',
    images: ['https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans bg-matte-black text-bone overflow-x-hidden w-full flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
