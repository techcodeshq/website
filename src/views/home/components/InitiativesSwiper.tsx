import { chakra } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumbnail from "./InitiativeThumbnail";

export const StylableSwiper = chakra(Swiper);

export const InitiativesSwiper: React.FC<{ data: any }> = ({ data }) => (
  <StylableSwiper slidesPerView={data.length >= 3 ? 2.5 : 2} spaceBetween={10} overflow="visible">
    {data.map((content: any) => (
      <SwiperSlide>
        <Thumbnail
          href={content.slug}
          url={content.thumbnail.url}
          name={content.title}
          date={new Date().toLocaleDateString()}
          homePage
        />
      </SwiperSlide>
    ))}
  </StylableSwiper>
);
