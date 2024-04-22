import { ImageWithText } from "./ImageWithText";
import { FeatureCards } from "./FeatureCards";
import { CenteredCTA } from "./CenteredCTA";
import React from "react";

export type BlockListType = {
  [key: string]: React.ComponentType<any>;
};

export const blockList: BlockListType = {
  imageWithText: ImageWithText,
  featureCards: FeatureCards,
  centeredCTA: CenteredCTA,
};
