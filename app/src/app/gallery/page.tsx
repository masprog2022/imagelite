"use client";
import { ImageCard, Template } from "@/components";
import { Image } from "@/resources/image/image.resource";
import { useImageService } from "@/resources/image/image.service";
import { useState } from "react";

export default function GalleryPage() {
  const userService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function searchImages() {
    setLoading(true);

    const result = await userService.find(query, extension);
    setImages(result);
    setLoading(false);
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard
        key={image.url}
        name={image.name}
        src={image.url}
        size={image.size}
        extension={image.extension}
        dataUpload={image.uploadData}
      />
    );
  }

  function renderImageCards() {
    return images.map(renderImageCard);
  }

  return (
    <Template loading={loading}>
      <section className="flex flex-col items-center justify-center my-5">
        <div className="flex space-x-4">
          <input
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="px-3 py-2 text-gray-900 border rounded-lg"
          />
          <select
            onChange={(event) => setExtension(event.target.value)}
            className="px-4 py-2 text-gray-900 border rounded-lg"
          >
            <option value="">All formats</option>
            <option value="PNG">PNG</option>
            <option value="GIF">GIF</option>
            <option value="JPEG">JPEG</option>
          </select>
          <button
            onClick={searchImages}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-300"
          >
            Search
          </button>
          <button className="px-4 py-2 text-white bg-yellow-500 rounded-lg hover:bg-yellow-300">
            Add New
          </button>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-8">{renderImageCards()}</section>
    </Template>
  );
}
