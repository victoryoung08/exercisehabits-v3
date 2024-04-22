import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { ReactElement } from "react";
import cn from "clsx";

type CenterCTAProps = {
  badgeText?: string;
  heading: string;
  description?: string;
  buttonText?: string;
  buttonIcon?: ReactElement;
  secondaryButtonText?: string;
  secondaryButtonIcon?: ReactElement;
  alignment: "left" | "center" | "right";
};

export const CenteredCTA = ({
  badgeText,
  heading,
  description,
  buttonText,
  buttonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
  alignment = "center",
}: CenterCTAProps) => {
  return (
    <>
      {heading && (
        <div className="w-full">
          <div className="container mx-auto">
            <div
              className={cn(
                "flex gap-8 py-20 lg:py-40 flex-col items-center justify-center"
              )}
            >
              {badgeText && (
                <div>
                  <Button variant="secondary" size="sm" className="gap-4">
                    {badgeText} <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
              {(heading || description) && (
                <div
                  className={cn(
                    "flex gap-4 flex-col",
                    alignment === "left" &&
                      "items-start justify-start text-left",
                    alignment === "center" &&
                      "items-center justify-center text-center",
                    alignment === "right" && "items-end justify-end"
                  )}
                >
                  {heading && (
                    <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter font-regular">
                      {heading}
                    </h1>
                  )}
                  {description && (
                    <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl">
                      {description}
                    </p>
                  )}
                </div>
              )}
              {(buttonText || secondaryButtonText) && (
                <div className="flex flex-row gap-3 items-center">
                  {buttonText && (
                    <Button size="lg" className="gap-4" variant="outline">
                      {buttonText} <div className="w-4 h-4">{buttonIcon}</div>
                    </Button>
                  )}
                  {secondaryButtonText && (
                    <Button size="lg" className="gap-4">
                      {secondaryButtonText} <MoveRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
