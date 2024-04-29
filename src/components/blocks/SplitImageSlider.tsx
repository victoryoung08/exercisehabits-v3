import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";

export type ImageProps = {
  url: string;
  alt: string;
};

export type SliderProps = {
  sliders: SlideProps[];
};

export type SlideProps = {
  content: string;
  subText: string;
  image: ImageProps;
};

export default function SplitImageSlider({ sliders }: SliderProps) {
  return (
    <section className="section-padding">
      <Carousel className="lg:hidden">
        <CarouselContent className="flex -ml-2 ">
          {/* <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2"> */}
          {sliders.map((slide) => (
            <CarouselItem
              className="pl-2 basis-2/3 md:basis-1/2 lg:basis:3/4"
              key={slide.content}
            >
              <div className="mx-auto h-full max-w-sm border-muted-foreground border-[1px] rounded-3xl overflow-hidden">
                <div className="mx-auto w-full h-[240px] lg:h-[360px] relative">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_PAYLOAD_BASEURL + slide.image.url
                    }
                    alt={slide.image.alt}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="p-8">
                  <p className="text-black">{slide.content}</p>
                  <p>{slide.subText}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
          {/* </div> */}
        </CarouselContent>
      </Carousel>
      <div className="hidden lg:block">
        <div className="flex gap-4 justify-center">
          {sliders.map((slide) => (
            <div className="" key={slide.image.alt}>
              <div className="mx-auto h-full max-w-sm border-muted-foreground border-[1px] rounded-3xl overflow-hidden">
                <div className="mx-auto w-full h-[240px] lg:h-[360px] relative">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_PAYLOAD_BASEURL + slide.image.url
                    }
                    alt={slide.image.alt}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="p-8">
                  <p className="text-black">{slide.content}</p>
                  <p>{slide.subText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
