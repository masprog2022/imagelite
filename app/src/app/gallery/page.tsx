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
      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <input
            type="text"
            className="px-3 py-2 text-gray-900 border rounded-lg"
          />
          <select className="px-4 py-2 text-gray-900 border rounded-lg">
            <option>All formats</option>
          </select>
          <button
            onClick={searchImages}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          >
            Search
          </button>
          <button className="px-4 py-2 text-white bg-yellow-500 rounded-lg">
            Add New
          </button>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-8">{renderImageCards()}</section>
    </Template>
  );
}
