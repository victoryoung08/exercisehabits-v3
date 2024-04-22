import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ReactElement } from "react";
import Image from "next/image";

export type ImageWithTextProps = {
  badgeText?: string;
  heading: string;
  description?: string;
  buttonText?: string;
  buttonIcon?: ReactElement;
  secondaryButtonText?: string;
  secondaryButtonIcon?: ReactElement;
  image?: ImageProps;
};

export type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export const ImageWithText = ({
  badgeText,
  heading,
  description,
  buttonText,
  buttonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
  image,
}: ImageWithTextProps) => (
  <>
    {heading && (
      <div className="w-full  py-20 lg:py-40">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">{badgeText}</Badge>
              </div>
              <div className="flex gap-4 flex-col">
                <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
                  {heading}
                </h1>
                <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                  {description}
                </p>
              </div>
              <div className="flex flex-row gap-4">
                <Button size="lg" className="gap-4" variant="outline">
                  {buttonText} <div className="w-4 h-4">{buttonIcon}</div>
                </Button>
                <Button size="lg" className="gap-4">
                  {secondaryButtonText}{" "}
                  <div className="w-4 h-4">{secondaryButtonIcon}</div>
                </Button>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square relative">
              {image && <Image src={image.src} alt={image.alt} fill />}
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
