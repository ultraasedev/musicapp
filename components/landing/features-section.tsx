import { Card } from '@/components/ui/card';
import { 
  Music, Headphones, Radio, Download, 
  Share2, DeviceMobile 
} from 'lucide-react';

const features = [
  {
    icon: Music,
    title: 'Millions of Songs',
    description: 'Access a vast library of music across all genres'
  },
  {
    icon: Headphones,
    title: 'HD Audio Quality',
    description: 'Experience crystal clear sound with our HD streaming'
  },
  {
    icon: Radio,
    title: 'Personalized Radio',
    description: 'Discover new music based on your taste'
  },
  {
    icon: Download,
    title: 'Offline Mode',
    description: 'Download your favorite tracks for offline listening'
  },
  {
    icon: Share2,
    title: 'Social Features',
    description: 'Share music and collaborate on playlists'
  },
  {
    icon: DeviceMobile,
    title: 'Cross Platform',
    description: 'Available on web, iOS, and Android'
  }
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Everything You Need
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6">
            <feature.icon className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}