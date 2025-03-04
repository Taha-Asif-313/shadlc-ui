"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { AudioGallery, Flexbox } from "shadlc";

const AudioGalleryComponentDocs = () => {
  const tracks = [
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Track 1 - Relaxing Tune",
    },
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      title: "Track 2 - Chill Vibes",
    },
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      title: "Track 3 - Smooth Jazz",
    },
  ];

  return (
    <Flexbox
      height={{ sm: "auto", md: "auto", lg: "auto" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "80%" }}
      padding={{ sm: "100px 30px", md: "100px 20px", lg: "40px" }}
      backgroundColor="black"
      direction={{ sm: "column", md: "column", lg: "column" }}
      align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      gap={{ sm: "5px", md: "10px", lg: "10px" }}
      justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      className="overflow-y-auto"
    >
      <UIComponentDisplay
        title="Audio Gallery Component"
        ImportComponent="import { AudioGallery } from 'shadlc'"
        description=" The <AudioGallery /> component is a sleek and interactive React UI component for managing and playing multiple audio tracks. It features a built-in player, playlist support, volume control, and a progress bar, making it perfect for showcasing audio collections."
        code={`
  // Define audios you want to add in gallery like this.
  const tracks = [
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Track 1 - Relaxing Tune",
    },
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      title: "Track 2 - Chill Vibes",
    },
    {
      src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      title: "Track 3 - Smooth Jazz",
    },
  ];
  
  // Usage of component.
  <AudioGallery
    tracks={tracks}
    className="border border-gray-300 mx-auto"
    theme={{
      bg: "bg-gray-900",
      text: "text-white",
      primary: "bg-transparent text-sm hover:bg-red-600",
      secondary: "bg-gray-800",
    }}
    autoplay
    loop
  />
        `}
      >
        <AudioGallery
          tracks={tracks}
          className="border border-gray-300 mx-auto"
          theme={{
            bg: "bg-gray-900",
            text: "text-white",
            primary: "bg-transparent text-sm hover:bg-red-600",
            secondary: "bg-gray-800",
          }}
          autoplay
          loop
        />
      </UIComponentDisplay>
    </Flexbox>
  );
};

export default AudioGalleryComponentDocs;
