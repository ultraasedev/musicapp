'use client';

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useMusic } from "@/components/providers/music-provider";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";

export function PlayerControls() {
  const { isPlaying, volume, play, pause, setVolume, currentTrack } = useMusic();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Track Info */}
          <div className="flex items-center space-x-4 w-1/4">
            {currentTrack && (
              <>
                <img 
                  src={currentTrack.artwork} 
                  alt={currentTrack.title}
                  className="h-12 w-12 rounded-md"
                />
                <div>
                  <p className="font-medium">{currentTrack.title}</p>
                  <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
                </div>
              </>
            )}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full"
              onClick={() => isPlaying ? pause() : play(currentTrack)}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="h-5 w-5" />
            </Button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2 w-1/4">
            <Volume2 className="h-5 w-5" />
            <Slider
              value={[volume * 100]}
              max={100}
              step={1}
              className="w-28"
              onValueChange={(value) => setVolume(value[0] / 100)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}