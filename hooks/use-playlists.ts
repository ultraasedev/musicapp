'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserPlaylists, getPlaylistTracks } from '@/lib/supabase/queries';

export function useUserPlaylists(userId: string) {
  return useQuery({
    queryKey: ['playlists', userId],
    queryFn: () => getUserPlaylists(userId),
    enabled: !!userId,
  });
}

export function usePlaylistTracks(playlistId: string) {
  return useQuery({
    queryKey: ['playlist-tracks', playlistId],
    queryFn: () => getPlaylistTracks(playlistId),
    enabled: !!playlistId,
  });
}