import { PhotoProps } from "@/types/types";
import "../styles/ImageCarousel.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ImageCarouselProps {
  photos: PhotoProps[];
  setApi: React.Dispatch<any>;
}

const ImageCarousel = ({ photos, setApi }: ImageCarouselProps) => {
  console.log(photos);
  return (
    <Carousel setApi={setApi} className="h-full">
      <CarouselContent className="h-full">
        {photos.map((photo: PhotoProps) => (
          <CarouselItem key={photo._id} className="h-full">
            <img src={photo.url} className="w-full h-full" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="carousel-btn" />
      <CarouselNext className="carousel-btn" />
    </Carousel>
  );
};

export default ImageCarousel;
