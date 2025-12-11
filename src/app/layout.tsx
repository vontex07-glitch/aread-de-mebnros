
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'crocheminipezinhos',
  description: 'crocheminipezinhos',
  openGraph: {
    siteName: 'crocheminipezinhos',
    title: 'crocheminipezinhos',
    type: 'website',
    description: 'crocheminipezinhos',
    url: 'https://crocheminipezinhos.carrd.co',
    images: [
      {
        url: 'https://crocheminipezinhos.carrd.co/assets/images/card.jpg?v=b72f5091',
        type: 'image/jpeg',
        width: 1280,
        height: 800,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://crocheminipezinhos.carrd.co" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}

    