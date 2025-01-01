'use client';

import { useQuery } from '@tanstack/react-query';
import { getFeaturedTracks } from '@/lib/supabase/queries';

export function useFeaturedTracks() {
  return useQuery({
    queryKey: ['featured-tracks'],
    queryFn: getFeaturedTracks,
  });
}