"use client";

import { formatBytes } from "../utils/FormatBytes";

interface ImageCardProps {
  name?: string;
  size?: number;
  dataUpload?: string;
  src?: string;
  extension?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  name,
  size,
  dataUpload,
  src,
  extension,
}: ImageCardProps) => {
  function download() {
    window.open(src, "_blank");
  }

  return (
    <div className="relative transition-transform duration-300 ease-in bg-white rounded-md shadow-md hover:shadow-lg hover:-translate-y-2">
      <img
        onClick={download}
        src={src}
        className="object-cover w-full h-56 rounded-t-md"
        alt={name}
      />
      <div className="p-4 card-body">
        <h5 className="mb-2 text-xl font-semibold text-gray-600">{name}</h5>
        <p className="text-grey-600">{extension}</p>
        <p className="text-grey-600">{formatBytes(size)}</p>
        <p className="text-grey-600">{dataUpload}</p>
      </div>
    </div>
  );
};
