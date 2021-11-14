import React from "react";
import Title from "./Title";
import {
  CupImage,
  FolderImage,
  PotionImage,
  RocketImage,
  SecondCupImage,
  SecondFolderImage,
  SecondRocketImage,
} from "./TitleImage";

interface HeroProps {}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <>
      <Title />
      <RocketImage />
      <PotionImage />
      <FolderImage />
      <CupImage />
      <SecondFolderImage />
      <SecondRocketImage />
      <SecondCupImage />
    </>
  );
};

export default Hero;
