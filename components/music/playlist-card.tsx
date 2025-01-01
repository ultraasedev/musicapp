'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart } from "lucide-react";
import { useMusic } from "@/components/providers/music-provider";

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
  tracks: any[];
}

export function PlaylistCard({ title, description, image, tracks }: PlaylistCardProps) {
  const { play } = useMusic();

  return (
    <Card className="overflow-hidden">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            size="icon" 
            className="rounded-full"
            onClick={() => tracks.length && play(tracks[0])}
          >
            <Play className="h-6 w-6" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => tracks.length && play(tracks[0])}
          >
            Play Now
          </Button>
          <Button variant="ghost" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}