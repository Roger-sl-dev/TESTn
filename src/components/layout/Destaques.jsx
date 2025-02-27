import { Swiper, SwiperSlide } from "swiper/react";
import DestaqueItem from "../ui/DestaquesItem.jsx"; // Ajuste o caminho conforme necessário

import Destaques from '../../data/Destaques.js'
import 'swiper/css';

 export default () => {

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={5}
        slidesPerView={2}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {Destaques.map((item) => (
          <SwiperSlide key={item.title}>
            <DestaqueItem
            id={item.id}
              Image={item.image} 
              Preço={item.price} 
              Titulo={item.title} 
              Descrição={item.description} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

