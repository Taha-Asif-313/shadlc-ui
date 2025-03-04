"use client";
import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { AudioPlayer, Flexbox, Table, VideoPlayer } from "shadlc";

const AudioComponentDocs = () => {
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
      default: "undefined",
      description: "The audio source URL.",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically plays the audio on load.",
    },
    {
      prop: "loop",
      type: "boolean",
      default: "false",
      description: "Loops the audio when it reaches the end.",
    },
    {
      prop: "backgroundColor",
      type: "string",
      default: '"#1e1e1e"',
      description: "Background color of the player.",
    },
    {
      prop: "primaryColor",
      type: "string",
      default: '"#ff4081"',
      description: "Primary color used for buttons and progress bar.",
    },
    {
      prop: "secondaryColor",
      type: "string",
      default: '"#fff"',
      description: "Secondary color for text and icons.",
    },
    {
      prop: "borderRadius",
      type: "string",
      default: '"12px"',
      description: "Defines the border radius of the player.",
    },
    {
      prop: "className",
      type: "string",
      default: "undefined",
      description: "Additional class names for styling.",
    },
    {
      prop: "padding",
      type: "string",
      default: '"15px"',
      description: "Padding around the audio player.",
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
        title="Audio Player Component"
        description="The <AudioPlayer /> component is a customizable React UI component for playing audio files. It includes play/pause controls, a progress bar, volume adjustment, and seamless playback, making it ideal for music streaming, podcasts, and audio-based applications."
        code={`
  // Usage of component
  <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
          `}
      >
        <AudioPlayer src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
      </UIComponentDisplay>
      <h2 className="text-xl font-bold !my-4">Customization Options</h2>
      <Table
        colors={{
          headerBg: "bg-green-900",
          rowBg: "bg-zinc-950",
          borderColor: "border-transparent",
        }}
        columns={columns}
        data={data}
        rowsPerPage={12}
        pagination={false}
      />
    </Flexbox>
  );
};

export default AudioComponentDocs;
