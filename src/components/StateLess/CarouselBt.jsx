import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselBt.css";

function CarouselBt() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src="https://http2.mlstatic.com/D_NQ_979789-MLA48945171909_012022-OO.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src="https://http2.mlstatic.com/D_NQ_762551-MLA48925162783_012022-OO.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src="https://http2.mlstatic.com/D_NQ_835238-MLA48886206292_012022-OO.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src="https://http2.mlstatic.com/D_NQ_809812-MLA48915251801_012022-OO.webp"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel__img"
          src="https://http2.mlstatic.com/D_NQ_632214-MLA48895771326_012022-OO.webp"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBt;


