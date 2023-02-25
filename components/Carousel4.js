import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Carousel4() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/t49XrP0/parlante11.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/YPfgyrm/parlante12.png"
          alt=""
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/WgxY0r6/parlante21.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/6FdKk4W/parlante22.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/0rJQ7T6/parlante31.png"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 mx-auto"
          src="https://i.ibb.co/nsVZSKX/parlante32.png"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
}