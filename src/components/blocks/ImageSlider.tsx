import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export type ImageSliderProps = {
  slider: {
    image: {
      alt: string;
      url: string;
    };
  }[];
};

export default function ImageSlider({ slider }: ImageSliderProps) {
  return (
    <section className="section-padding">
      <Carousel className="w-full mx-auto">
        <div className="w-full flex justify-center">
          <CarouselContent className="flex flex-row gap-4 mx-auto">
            {slider.map((slide) => (
              <CarouselItem
                key={slide.image.alt}
                className="relative w-[300px] h-[300px] max-w-[300px] max-h-[200px] basis-2/3 md:basis-1/3"
              >
                <Image
                  src={
                    process.env.NEXT_PUBLIC_PAYLOAD_BASEURL + slide.image.url
                  }
                  alt={slide.image.alt}
                  fill
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <div></div>
    </section>
  );
}
