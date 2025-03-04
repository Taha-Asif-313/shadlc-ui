"use client";

import UIComponentDisplay from "@/app/components/UiComponentDisplay";
import React from "react";
import { FaCheck, FaLock, FaUser } from "react-icons/fa";
import { Flexbox, ImageGallery, Input, Table } from "shadlc";

const ImageGalleryComponentDocs = () => {
  const images = [
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 1",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 2",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 3",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 4",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 5",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 6",
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
        title="Image Gallery Component"
        description="The <ImageGallery /> component is a flexible and responsive React UI component for displaying images in a grid or masonry layout. It supports lightbox previews, custom columns, spacing, and lazy loading for an optimized user experience."
        code={`
  // Define images you want to add in gallery like this.
  const images = [
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 1",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 2",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 3",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 4",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 5",
    },
    {
      src: "https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg",
      alt: "Image 6",
    },
  ];

  // Usage of component.
  <ImageGallery
    images={images}
    columns={3}
    gap="15px"
    layout="grid"
    lightbox={true}
    className="rounded-lg shadow-lg"
  />
        `}
      >
        <ImageGallery
          images={images}
          columns={3}
          gap="15px"
          layout="grid"
          lightbox={true}
          className="rounded-lg shadow-lg"
        />
      </UIComponentDisplay>
    </Flexbox>
  );
};

export default ImageGalleryComponentDocs;
