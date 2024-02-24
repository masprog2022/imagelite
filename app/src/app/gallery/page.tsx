"use client";
import { ImageCard, Template } from "@/components";
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

  return (
    <Template>
      <button className="bg-gray-500" onClick={searchImages}>
        OK
      </button>
      <section className="grid grid-cols-4 gap-8">
        <ImageCard name="Montanha" size="10MB" dataUpload="23/02/2024" src="" />
      </section>
    </Template>
  );
}
