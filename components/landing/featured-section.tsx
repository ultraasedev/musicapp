import { PlaylistCard } from '@/components/music/playlist-card';

const featuredPlaylists = [
  {
    title: 'Top Hits 2024',
    description: 'The hottest tracks right now',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    tracks: [
      {
        id: '1',
        title: 'Sample Track 1',
        artist: 'Artist 1',
        artwork: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
        duration: 180,
      },
    ],
  },
  {
    title: 'Chill Vibes',
    description: 'Relaxing beats for your day',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    tracks: [
      {
        id: '2',
        title: 'Chill Beat',
        artist: 'Artist 2',
        artwork: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
        duration: 240,
      },
    ],
  },
  {
    title: 'Workout Mix',
    description: 'Energy boost for your workout',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80',
    tracks: [
      {
        id: '3',
        title: 'Workout Energy',
        artist: 'Artist 3',
        artwork: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&q=80',
        duration: 200,
      },
    ],
  },
];

export function FeaturedSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8">Featured Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPlaylists.map((playlist) => (
          <PlaylistCard
            key={playlist.title}
            {...playlist}
          />
        ))}
      </div>
    </section>
  );
}