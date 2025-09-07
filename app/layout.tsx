import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { CartProvider } from '@/components/providers/cart-provider';
import { AuthProvider } from '@/components/providers/auth-provider';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Royalwood - Handcrafted Wood Furniture',
  description: 'Premium handcrafted wooden furniture made with 40 years of expertise. Discover our collection of sustainable, custom-made furniture pieces.',
  keywords: 'wooden furniture, handcrafted, custom furniture, sustainable wood, premium furniture',
  authors: [{ name: 'Royalwood Furniture' }],
  creator: 'Royalwood',
  publisher: 'Royalwood',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://royalwood.com',
    siteName: 'Royalwood',
    title: 'Royalwood - Handcrafted Wood Furniture',
    description: 'Premium handcrafted wooden furniture made with 40 years of expertise.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Royalwood - Premium Handcrafted Furniture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royalwood - Handcrafted Wood Furniture',
    description: 'Premium handcrafted wooden furniture made with 40 years of expertise.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AuthProvider>
            <CartProvider>
              <div className="relative min-h-screen bg-background">
                {children}
              </div>
              <Toaster />
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}