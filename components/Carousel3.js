import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carousel3() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/tpLqY8F/pieza11.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/gdtS2vX/pieza12.png"
          alt=""
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/ckM4GHy/pieza21.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/xmJvHR6/pieza31.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/J2gHT1p/pieza41.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/3vn7k8F/pieza42.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/VmqWPpH/otros1.png"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}