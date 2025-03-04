"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { Flexbox, Table, VideoPlayer } from "shadlc";

const VideoComponentDocs = () => {
  const columns = [
    { key: "prop", label: "Prop", sortable: true },
    { key: "type", label: "Type", sortable: true },
    { key: "default", label: "Default", sortable: true },
    { key: "description", label: "Description" },
  ];

  const data = [
    {
      prop: "src",
      type: "string",
      default: "Required",
      description: "The URL of the video file",
    },
    {
      prop: "poster",
      type: "string",
      default: "undefined",
      description: "Poster image before play",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically start playing the video",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "false",
      description: "Repeat video continuously",
    },
    {
      prop: "controls",
      type: "boolean",
      default: "false",
      description: "Show native video controls",
    },
    {
      prop: "width",
      type: "string",
      default: '"100%"',
      description: "Set width of the video player",
    },
    {
      prop: "height",
      type: "string",
      default: '"auto"',
      description: "Set height of the video player",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: '"12px"',
      description: "Rounds the corners of the player",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#1e1e1e"',
      description: "Background color of the player",
    },
    {
      prop: "primaryColor",
      type: "string",
      default: '"#ff4081"',
      description: "Color for buttons & seek bar",
    },
  ];
  return (
    <Flexbox
      height={{ sm: "auto", md: "auto", lg: "100%" }}
      maxWidth={{ sm: "100%", md: "100%", lg: "80%" }}
      padding={{ sm: "100px 30px", md: "100px 20px", lg: "40px" }}
      backgroundColor="black"
      direction={{ sm: "column", md: "column", lg: "column" }}
      align={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      gap={{ sm: "5px", md: "10px", lg: "10px" }}
      justify={{ sm: "flex-start", md: "flex-start", lg: "flex-start" }}
      className="overflow-auto"
    >
      <UIComponentDisplay
        title="VideoPlayer Component"
        ImportComponent="import { VideoPlayer } from 'shadlc'"
        description="The <VideoPlayer /> component is a versatile and customizable React component designed to provide a seamless video playback experience. It supports autoplay, controls, fullscreen mode, and custom styling, making it perfect for modern web applications."
        code={`
  // Usage of component.
  <VideoPlayer 
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    poster="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg"
    backgroundColor="#222"
    primaryColor="#ff5722"
    borderRadius="16px"
    width="100%"
    height="auto"
  />
          `}
      >
        <VideoPlayer
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          poster="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg"
          backgroundColor="#222"
          primaryColor="#ff5722"
          borderRadius="16px"
          width="100%"
          height="auto"
        />
      </UIComponentDisplay>
      <h2 className="text-xl font-bold my-4">Customization Options</h2>
      <Table
        colors={{ headerBg: "bg-[#222222]", rowBg: "bg-[#222222]" }}
        columns={columns}
        data={data}
        rowsPerPage={12}
        pagination={false}
      />
    </Flexbox>
  );
};

export default VideoComponentDocs;
