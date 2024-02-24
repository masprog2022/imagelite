"use client";
import { ImageCard, Template } from "@/components";
import { Image } from "@/resources/image/image.resource";
import { useImageService } from "@/resources/image/image.service";
import { useState } from "react";

export default function GalleryPage() {
  const userService = useImageService();
  const [images, setImages] = useState<Image[]>([]);

  async function searchImages() {
    const result = await userService.findAll();
    setImages(result);
    console.table(result);
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard
        name={image.name}
        src={image.url}
        size={image.size}
        dataUpload={image.uploadData}
      />
    );
  }

  function renderImageCards() {
    return images.map(renderImageCard);
  }

  return (
    <Template>
      <button className="bg-gray-500" onClick={searchImages}>
        OK
      </button>
      <section className="grid grid-cols-4 gap-8">{renderImageCards()}</section>
    </Template>
  );
}
