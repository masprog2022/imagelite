"use client";
import {
  AuthenticatedPage,
  Button,
  ImageCard,
  InputText,
  Template,
  useNotification,
} from "@/components";
import { useImageService } from "@/resources";
import { Image } from "@/resources/image/image.resource";
import Link from "next/link";
import { useState } from "react";

export default function GalleryPage() {
  const userService = useImageService();
  const notification = useNotification();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  async function searchImages() {
    setLoading(true);

    const result = await userService.find(query, extension);
    setImages(result);
    setLoading(false);

    if (!result.length) {
      notification.notify("No result found!", "warning");
    }
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
    <AuthenticatedPage>
      <Template loading={loading}>
        <section className="flex flex-col items-center justify-center my-5">
          <div className="flex space-x-4">
            <InputText
              placeholder="Type Name or Tags"
              onChange={(event) => setQuery(event.target.value)}
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
            <Button
              style="bg-blue-500 hover:bg-blue-300"
              label="Search"
              onClick={searchImages}
            />

            <Link href="/form">
              <Button
                style="bg-yellow-500 hover:bg-yellow-300"
                label="Add New"
              />
            </Link>
          </div>
        </section>
        <section className="grid grid-cols-4 gap-8">
          {renderImageCards()}
        </section>
      </Template>
    </AuthenticatedPage>
  );
}
