import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../ui/input";
import { FormBlock } from "./FormBlock";
import AnchorButton from "../ui/anchorButton";

export type HeroBlockProps = {
  badgeText?: string;
  heading: string;
  headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  body: string;
  heroImage?: {
    alt: string;
    url: string;
  };
  secondaryImage?: {
    alt: string;
    url: string;
  };
  form?: boolean;
  primaryButtonText?: string;
  primaryButtonURL?: string;
};

export const HeroBlock = ({
  badgeText,
  heading,
  headingType,
  body,
  heroImage,
  secondaryImage,
  primaryButtonText,
  primaryButtonURL,
  form,
}: HeroBlockProps) => (
  <div className="w-full section-padding">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 lg:pb-20">
        <div className="flex gap-4 flex-col items-center lg:items-start">
          <div>
            {badgeText && (
              <Badge variant="default">
                <h1 className="text-sm font-normal">{badgeText}</h1>
              </Badge>
            )}
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-center text-balance lg:text-left">{heading}</h1>
            <p className="text-center lg:text-left">{body}</p>
          </div>
          <div className="hidden lg:flex lg:gap-4">
            <AnchorButton text="Enquire Now" />
          </div>
        </div>
        <div className="mx-auto lg:hidden">
          <AnchorButton text="Enquire Now" />
        </div>
        <div className="w-fit mx-auto relative">
          {heroImage && (
            <div className="w-[200px] h-[300px] relative mx-auto overflow-hidden border-stone-600 border-[1px] rounded-tl-[64px] rounded-tr-[12px] rounded-br-[36px] lg:w-[280px] lg:h-[420px] lg:mt-0">
              <Image
                src={process.env.NEXT_PUBLIC_PAYLOAD_BASEURL + heroImage.url}
                alt={heroImage.alt}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          {secondaryImage && (
            <div className="absolute w-[124px] h-[124px] translate-y-[-64%] translate-x-[-50%] overflow-hidden rounded-xl border-stone-800 border-[1px]">
              <Image
                src={
                  process.env.NEXT_PUBLIC_PAYLOAD_BASEURL + secondaryImage.url
                }
                alt={secondaryImage.alt}
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          )}
        </div>
      </div>
      {form && (
        <div className="hidden lg:block">
          <FormBlock />
        </div>
      )}
    </div>
  </div>
);
