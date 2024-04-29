import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReactElement } from "react";
import { MoveUpRight } from "lucide-react";
export type FeatureCardProps = {
  badgeText?: string;
  heading?: string | undefined;
  description?: string;
  featureGrid?: featureCard[];
};
type featureCard = {
  heading?: string;
  description?: string;
  icon?: string;
};

export const FeatureCards = ({
  badgeText,
  heading,
  description,
  featureGrid,
}: FeatureCardProps) => {
  return (
    <>
      {heading && (
        <div className="w-full section-padding">
          <div className="container mx-auto">
            <div className="flex gap-4 flex-col items-start">
              <div>
                <Badge>{badgeText}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="">{heading}</h2>
                <p className="">{description}</p>
              </div>
              <div className="flex gap-10 pt-12 flex-col w-full">
                <div className="grid grid-cols-2 gap-2 items-start lg:grid-cols-3">
                  {featureGrid &&
                    featureGrid.map(
                      ({ heading, description, icon }: featureCard) => {
                        return (
                          <div
                            className="flex flex-col gap-6 w-full h-full items-start px-6 py-6 border-[1.2px] rounded-3xl flex-grow"
                            key={heading}
                          >
                            <div className="w-4 h-4 mt-2 text-primary">
                              <MoveUpRight />
                            </div>

                            <div className="flex flex-col gap-1">
                              <h4 className="font-medium">{heading}</h4>
                              <p className="text-muted-foreground text-sm">
                                {description}
                              </p>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
