/*
  # Initial Schema Setup for Tutumuzik

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key) - matches auth.users id
      - `username` (text, unique)
      - `avatar_url` (text)
      - `subscription_tier` (text) - free/premium
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `tracks`
      - `id` (uuid, primary key)
      - `title` (text)
      - `artist` (text)
      - `album` (text)
      - `duration` (integer) - in seconds
      - `artwork_url` (text)
      - `audio_url` (text)
      - `created_at` (timestamp)
      - `premium_only` (boolean)

    - `playlists`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `cover_url` (text)
      - `user_id` (uuid) - references profiles
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

    - `playlist_tracks`
      - `playlist_id` (uuid) - references playlists
      - `track_id` (uuid) - references tracks
      - `position` (integer)
      - `added_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create profiles table
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  username text UNIQUE NOT NULL,
  avatar_url text,
  subscription_tier text NOT NULL DEFAULT 'free',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are viewable by everyone"
  ON profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Create tracks table
CREATE TABLE tracks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  artist text NOT NULL,
  album text,
  duration integer NOT NULL,
  artwork_url text,
  audio_url text NOT NULL,
  created_at timestamptz DEFAULT now(),
  premium_only boolean DEFAULT false
);

ALTER TABLE tracks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Tracks are viewable by everyone"
  ON tracks FOR SELECT
  USING (
    CASE 
      WHEN premium_only = true THEN
        EXISTS (
          SELECT 1 FROM profiles
          WHERE id = auth.uid()
          AND subscription_tier = 'premium'
        )
      ELSE true
    END
  );

-- Create playlists table
CREATE TABLE playlists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  cover_url text,
  user_id uuid REFERENCES profiles(id) NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE playlists ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Playlists are viewable by everyone"
  ON playlists FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own playlists"
  ON playlists FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own playlists"
  ON playlists FOR UPDATE
  USING (auth.uid() = user_id);

-- Create playlist_tracks table
CREATE TABLE playlist_tracks (
  playlist_id uuid REFERENCES playlists(id) ON DELETE CASCADE,
  track_id uuid REFERENCES tracks(id) ON DELETE CASCADE,
  position integer NOT NULL,
  added_at timestamptz DEFAULT now(),
  PRIMARY KEY (playlist_id, track_id)
);

ALTER TABLE playlist_tracks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Playlist tracks are viewable by everyone"
  ON playlist_tracks FOR SELECT
  USING (true);

CREATE POLICY "Users can modify tracks in their playlists"
  ON playlist_tracks FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM playlists
      WHERE id = playlist_id
      AND user_id = auth.uid()
    )
  );