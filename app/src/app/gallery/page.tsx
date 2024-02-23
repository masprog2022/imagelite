import { ImageCard, Template } from "@/components";

export default function GalleryPage() {
  return (
    <Template>
      <section className="grid grid-cols-4 gap-8">
        <ImageCard
          name="Montanha"
          size="10MB"
          dataUpload="23/02/2024"
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
        />
        <ImageCard
          name="Montanha"
          size="10MB"
          dataUpload="23/02/2024"
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
        />
        <ImageCard
          name="Montanha"
          size="10MB"
          dataUpload="23/02/2024"
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
        />
        <ImageCard
          name="Montanha"
          size="10MB"
          dataUpload="23/02/2024"
          src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
        />
      </section>
    </Template>
  );
}
