'use client';

import { Slider } from "@/components/ui/slider";
import { formatTime } from "@/lib/utils";

interface ProgressBarProps {
  currentTime: number;
  duration: number;
  onSeek: (value: number) => void;
}

export function ProgressBar({ currentTime, duration, onSeek }: ProgressBarProps) {
  return (
    <div className="flex items-center space-x-2 px-4">
      <span className="text-sm text-muted-foreground w-12 text-right">
        {formatTime(currentTime)}
      </span>
      <Slider
        value={[currentTime]}
        max={duration}
        step={1}
        className="w-full"
        onValueChange={(value) => onSeek(value[0])}
      />
      <span className="text-sm text-muted-foreground w-12">
        {formatTime(duration)}
      </span>
    </div>
  );
}