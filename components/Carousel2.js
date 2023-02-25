import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carousel2() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/jGj80by/casa1.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/44VZ1Cb/casa2.png"
          alt=""
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/SVC1jQG/casa3.png"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}