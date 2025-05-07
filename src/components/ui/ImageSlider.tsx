// components/ImageSlider.tsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type SlideItem = {
  id: string;
  imageUrl: string;
  alt?: string;
};

interface ImageSliderProps {
  title: string;
  data: SlideItem[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ title, data }) => {
  return (
    <div className="mb-10 w-full">
      <div className="flex justify-between items-center px-4 mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={4}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        className="relative px-4"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.imageUrl}
              alt={item.alt || ''}
              className="w-full h-48 object-cover rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
