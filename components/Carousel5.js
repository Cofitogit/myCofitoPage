import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carousel5() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/zFnRqzN/teclado1.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/XzxBKCc/teclado2.png"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}