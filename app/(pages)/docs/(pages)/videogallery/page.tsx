"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Flexbox, VideoGallery } from "shadlc";

const VideoGalleryComponentDocs = () => {
  const videos = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
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
        title="Video Gallery Component"
        ImportComponent="import { VideoGallery } from 'shadlc'"
        description="The <VideoGallery /> component is a responsive and customizable React UI component for displaying video collections in a grid or masonry layout. It supports lightbox previews, autoplay, looping, custom styling, and interactive controls for an enhanced user experience."
        code={`
  // Define videos you want to add in gallery like this.
  const videos = [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
    },
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
    },
    {
      src: "https://www.w3schools.com/html/movie.mp4",
      poster:
        "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
    },
  ];

  // Usage of component
  <VideoGallery
    videos={videos}
    columns={2}
    gap="15px"
    layout="grid"
    lightbox={true}
    autoPlay={false}
    loop={false}
    muted={false}
    controls={true}
    className="rounded-lg shadow-lg max-lg:!grid-cols-1"
  />
        `}
      >
        <VideoGallery
          videos={videos}
          columns={2}
          gap="15px"
          layout="grid"
          lightbox={true}
          autoPlay={false}
          loop={false}
          muted={false}
          controls={true}
          className="rounded-lg shadow-lg max-lg:!grid-cols-1"
        />
      </UIComponentDisplay>
    </Flexbox>
  );
};

export default VideoGalleryComponentDocs;
