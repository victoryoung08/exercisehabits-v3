import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ReactElement } from "react";
export type FeatureGridProps = {
  badgeText?: string;
  heading?: string | undefined;
  description?: string;
  featureGrid?: gridItem[];
};
type gridItem = {
  heading?: string;
  description?: string;
  icon?: ReactElement;
};

export const FeatureCards = ({
  badgeText,
  heading,
  description,
  featureGrid,
}: FeatureGridProps) => {
  return (
    <>
      {heading && (
        <div className="w-full py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
              <div>
                <Badge>{badgeText}</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
                  {heading}
                </h2>
                <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
                  {description}
                </p>
              </div>
              <div className="flex gap-10 pt-12 flex-col w-full">
                <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
                  {featureGrid &&
                    featureGrid.map(
                      ({ heading, description, icon }: gridItem) => (
                        <div
                          className="flex flex-row gap-6 w-full items-start"
                          key={heading}
                        >
                          {icon && (
                            <div className="w-4 h-4 mt-2 text-primary">
                              {icon}
                            </div>
                          )}
                          <div className="flex flex-col gap-1">
                            <p>{heading}</p>
                            <p className="text-muted-foreground text-sm">
                              {description}
                            </p>
                          </div>
                        </div>
                      )
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
