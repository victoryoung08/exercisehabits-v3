import { ImageWithText } from "./ImageWithText";
import { FeatureCards } from "./FeatureCards";
import { CenteredCTA } from "./CenteredCTA";
import React from "react";
import { HeroBlock } from "./HeroBlock";
import StaticLogoGrid from "./StaticLogoGrid";
import FeatureRows from "./FeatureRows";
import ImageSlider from "./ImageSlider";
import AccordionBlock from "./AccordionBlock";
import SplitImageSlider from "./SplitImageSlider";

export type BlockListType = {
  [key: string]: React.ComponentType<any>;
};

export const blockList: BlockListType = {
  imageWithText: ImageWithText,
  featureCards: FeatureCards,
  centeredCTA: CenteredCTA,
  heroBlock: HeroBlock,
  staticGrid: StaticLogoGrid,
  featureRows: FeatureRows,
  imageSlider: ImageSlider,
  accordionBlock: AccordionBlock,
  splitImageSlider: SplitImageSlider,
};
