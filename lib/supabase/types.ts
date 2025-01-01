export type Profile = {
  id: string;
  username: string;
  avatar_url: string | null;
  subscription_tier: 'free' | 'premium';
  created_at: string;
  updated_at: string;
};

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string | null;
  duration: number;
  artwork_url: string | null;
  audio_url: string;
  created_at: string;
  premium_only: boolean;
};

export type Playlist = {
  id: string;
  title: string;
  description: string | null;
  cover_url: string | null;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type PlaylistTrack = {
  playlist_id: string;
  track_id: string;
  position: number;
  added_at: string;
};