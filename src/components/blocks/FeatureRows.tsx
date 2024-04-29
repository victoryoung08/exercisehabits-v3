import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";
export type ImageProps = {
  url: string;
  alt: string;
};

export type FeatureRowProps = {
  row: RowProps[];
};
export type RowProps = {
  id: string;
  heading: string;
  description?: string;
  buttonText?: string;
  buttonURL?: string;
  primaryImage: ImageProps;
  secondImage: ImageProps;
  thirdImage: ImageProps;
};
export default function FeatureRows({ row }: FeatureRowProps) {
  return (
    <section className="section-padding flex flex-col gap-12">
      {row &&
        row.map((r: RowProps, i: number) => (
          <div
            key={r.id}
            className="grid grid-cols-1 gap-24 items-center justify-center py-12 max-w-7xl mx-auto lg:grid-cols-2 "
          >
            <div
              className={cn(
                "flex flex-col items-center justify-center w-full gap-4 lg:max-w-[480px] lg:mx-auto"
              )}
            >
              <h3 className="text-balance text-center">{r.heading}</h3>
              <p className="text-balance text-center">{r.description}</p>
              {r.buttonText && r.buttonURL && (
                <Link href={r.buttonURL}>
                  <Button variant="default">{r.buttonText}</Button>
                </Link>
              )}
            </div>
            <div
              className={cn(
                "w-fit h-full min-h-[120px] mx-auto relative",
                i % 2 === 0 ? "lg:order-first" : "lg:order-last"
              )}
            >
              {r.primaryImage && (
                <div className="z-[10] relative w-[200px] h-[300px] rounded-t-[100px] overflow-hidden border-foreground border-[1.8px] ">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_PAYLOAD_BASEURL +
                      r.primaryImage.url
                    }
                    alt={r.primaryImage.alt}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              {r.secondImage && (
                <div className="absolute w-[100px] aspect-square border-foreground border-[1px] left-[-20%] top-[-10%] z-[5] rounded-br-[24px] rounded-tl-[24px] overflow-hidden">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_PAYLOAD_BASEURL +
                      r.secondImage.url
                    }
                    alt={r.secondImage.alt}
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              {r.thirdImage && (
                <div className="z-[15] absolute w-[100px] aspect-square border-foreground border-[1px] right-[-15%] bottom-[-10%] rounded-b-[24px] overflow-hidden">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_PAYLOAD_BASEURL + r.thirdImage.url
                    }
                    alt={r.thirdImage.alt}
                    width={300}
                    height={300}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
    </section>
  );
}
