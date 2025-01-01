import { Button } from '@/components/ui/button';
import { Music4, Headphones, Smartphone } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 -z-10" />
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center gap-2">
            <Music4 className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Tutumuzik</h1>
          </div>
          <p className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            Your Music, Your Way, <span className="text-primary">Anywhere</span>
          </p>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Stream millions of songs, create playlists, and discover new music. Available on web and mobile.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button size="lg" variant="outline">View Plans</Button>
          </div>
          <div className="flex gap-8 pt-8">
            <div className="flex items-center gap-2">
              <Headphones className="h-5 w-5" />
              <span>HD Audio</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              <span>Mobile App</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}