'use client';

import { useTranslations } from 'next-intl';
import { Home, Library, Plus, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Sidebar() {
  const t = useTranslations('common');

  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Home className="mr-2 h-4 w-4" />
              {t('home')}
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Library className="mr-2 h-4 w-4" />
              {t('library')}
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Heart className="mr-2 h-4 w-4" />
              {t('likedSongs')}
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            {t('playlists')}
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <Plus className="mr-2 h-4 w-4" />
              {t('createPlaylist')}
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            {t('yourPlaylists')}
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {['Favorites', 'Recently Played', 'Top Hits'].map((playlist) => (
                <Button
                  key={playlist}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}