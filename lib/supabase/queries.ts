import { supabase } from './client';
import { Track, Playlist, Profile } from './types';

export async function getFeaturedTracks() {
  const { data, error } = await supabase
    .from('tracks')
    .select('*')
    .limit(10);

  if (error) throw error;
  return data as Track[];
}

export async function getUserPlaylists(userId: string) {
  const { data, error } = await supabase
    .from('playlists')
    .select(`
      *,
      playlist_tracks (
        track_id,
        position
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data as (Playlist & { playlist_tracks: { track_id: string; position: number }[] })[];
}

export async function getPlaylistTracks(playlistId: string) {
  const { data, error } = await supabase
    .from('playlist_tracks')
    .select(`
      position,
      tracks (*)
    `)
    .eq('playlist_id', playlistId)
    .order('position');

  if (error) throw error;
  return data.map(item => item.tracks) as Track[];
}

export async function getUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) throw error;
  return data as Profile;
}

export async function updateUserProfile(userId: string, updates: Partial<Profile>) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
    .single();

  if (error) throw error;
  return data as Profile;
}