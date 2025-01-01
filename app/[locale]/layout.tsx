import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { PlayerControls } from '@/components/player/player-controls';
import { MusicProvider } from '@/components/providers/music-provider';
import { AuthProvider } from '@/components/providers/auth-provider';

const inter = Inter({ subsets: ['latin'] });

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages} locale={locale}>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}