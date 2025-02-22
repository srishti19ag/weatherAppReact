import { useState } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-gray-300">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-amber-400">My Music</h1>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="text-teal-400">
            Home
          </Button>
          <Button variant="ghost" className="text-teal-400">
            Playlists
          </Button>
          <Button variant="ghost" className="text-teal-400">
            Library
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 flex flex-col gap-6">
        <h2 className="text-xl font-semibold">Now Playing</h2>
        <Card className="bg-gray-800 p-4 rounded-lg">
          <CardContent className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-700 rounded-md"></div>
            <div className="flex-1">
              <h3 className="text-lg">Song Title</h3>
              <p className="text-sm text-gray-400">Artist Name</p>
            </div>
          </CardContent>
        </Card>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-auto">
          <Button variant="ghost">
            <SkipBack size={24} className="text-teal-400" />
          </Button>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            size="icon"
            className="bg-teal-600 text-white p-4 rounded-full"
          >
            {isPlaying ? <Pause size={28} /> : <Play size={28} />}
          </Button>
          <Button variant="ghost">
            <SkipForward size={24} className="text-teal-400" />
          </Button>
          <Volume2 size={24} className="text-gray-400" />
        </div>
      </main>
    </div>
  );
}
