import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carousel6() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="cama1.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="cama2.png"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}