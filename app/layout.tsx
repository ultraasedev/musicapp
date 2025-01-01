import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { PlayerControls } from '@/components/player/player-controls';
import { MusicProvider } from '@/components/providers/music-provider';
import { AuthProvider } from '@/components/providers/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tutumuzik - Stream Music Anywhere',
  description: 'Your favorite music streaming platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <MusicProvider>
              <div className="min-h-screen bg-background pb-24">
                <Header />
                <div className="flex">
                  <Sidebar />
                  <main className="flex-1 p-6">{children}</main>
                </div>
                <PlayerControls />
                <Toaster />
              </div>
            </MusicProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}