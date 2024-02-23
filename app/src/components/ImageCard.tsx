interface ImageCardProps {
  name?: string;
  size?: string;
  dataUpload?: string;
  src?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  name,
  size,
  dataUpload,
  src,
}: ImageCardProps) => {
  return (
    <div className="relative transition-transform duration-300 ease-in bg-white rounded-md shadow-md hover:shadow-lg hover:-translate-y-2">
      <img
        src={src}
        className="object-cover w-full h-56 rounded-t-md"
        alt={name}
      />
      <div className="p-4 card-body">
        <h5 className="mb-2 text-xl font-semibold text-gray-600">{name}</h5>
        <p className="text-grey-600">{size}</p>
        <p className="text-grey-600">{dataUpload}</p>
      </div>
    </div>
  );
};
