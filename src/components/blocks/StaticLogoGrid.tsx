import Image from "next/image";

const logos = [
  {
    alt: "ndis alpha omega logo",
    url: "/logos/logos-alpha.webp",
  },
  {
    alt: "ndis countrywide logo",
    url: "/logos/logos-countrywide.png",
  },
  {
    alt: "ndis inmotion logo",
    url: "/logos/logos-inmotion.webp",
  },
  {
    alt: "ndis upa logo",
    url: "/logos/logos-upa.png",
  },
];

export type logoProps = {
  alt: string;
  url: string;
};

export type StaticLogoGridType = {
  heading: string;
  logos: logoProps[];
};
export default function StaticLogoGrid({ heading }: StaticLogoGridType) {
  return (
    <section className="section-padding flex flex-col gap-8">
      <div className="text-center text-lg font-semibold">{heading}</div>
      <div className="grid grid-cols-4 max-w-[480px] w-full items-center justify-center mx-auto">
        {logos &&
          logos.map((logo) => (
            <>
              <Image
                src={logo.url}
                alt={logo.alt}
                key={logo.alt}
                width={60}
                height={60}
              />
            </>
          ))}
      </div>
    </section>
  );
}
