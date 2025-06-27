import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'TechFlow Solutions - AI-Powered Digital Innovation',
  description: 'Empowering Digital Growth with Scalable Tech Solutions. Expert UI/UX Design, Web Development, Mobile Apps, Digital Marketing & More.',
  keywords: 'AI, Tech Solutions, Web Development, Mobile Apps, Digital Marketing, UI/UX Design',
  authors: [{ name: 'TechFlow Solutions' }],
  creator: 'TechFlow Solutions',
  publisher: 'TechFlow Solutions',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techflow-solutions.com',
    title: 'TechFlow Solutions - AI-Powered Digital Innovation',
    description: 'Empowering Digital Growth with Scalable Tech Solutions',
    siteName: 'TechFlow Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechFlow Solutions - AI-Powered Digital Innovation',
    description: 'Empowering Digital Growth with Scalable Tech Solutions',
    creator: '@techflow_solutions',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}