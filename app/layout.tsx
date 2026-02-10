import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CricBook — The Social Network for Cricket',
  description: 'Connect with your club, track your stats, rate the tea, and share your cricket life. For players, clubs, and leagues.',
  openGraph: {
    title: 'CricBook — The Social Network for Cricket',
    description: 'Connect with your club, track your stats, rate the tea, and share your cricket life.',
    type: 'website',
    url: 'https://cricbook.com',
    images: [
      {
        url: '/og-image.jpg', // Replace with actual OG image
        width: 1200,
        height: 630,
        alt: 'CricBook Social Network for Cricket'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CricBook — The Social Network for Cricket',
    description: 'Connect with your club, track your stats, rate the tea, and share your cricket life.',
    images: ['/twitter-image.jpg'] // Replace with actual Twitter card image
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}