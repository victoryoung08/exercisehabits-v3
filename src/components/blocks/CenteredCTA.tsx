import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { ReactElement } from "react";
import { SeaAndSun } from "iconoir-react";
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
        <section className="bg-muted">
          <div className="section-padding">
            <div className="w-full">
              <SeaAndSun
                width="64px"
                height="64px"
                color="HSL(40 33% 96%)"
                className="mx-auto"
              />
              <div className="mx-auto max-w-3xl">
                <div
                  className={cn(
                    "flex gap-8 section-padding flex-col items-center justify-center"
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
                      {heading && <h2 className="text-balance">{heading}</h2>}
                      {description && <p className="">{description}</p>}
                    </div>
                  )}
                  {(buttonText || secondaryButtonText) && (
                    <div className="flex flex-row gap-3 items-center">
                      {buttonText && (
                        <Button size="lg" className="gap-4" variant="outline">
                          {buttonText}{" "}
                          <div className="w-4 h-4">{buttonIcon}</div>
                        </Button>
                      )}
                      {secondaryButtonText && (
                        <Button size="lg" className="gap-4">
                          {secondaryButtonText}{" "}
                          <MoveRight className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
