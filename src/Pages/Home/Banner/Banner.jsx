import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./banner.css";

const Banner = () => {
  return (
    <Carousel
      autoPlay={true}
      swipeable={true}
      emulateTouch={true}
      infiniteLoop={true}
    >
      <div>
        <img src="https://i.ibb.co/SVkhc64/01.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/GJzQmqG/02.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/ChV7SJy/03.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/r06V20s/04.jpg" />
      </div>
      <div>
        <img src="https://i.ibb.co/CbJFv5L/05.png" />
      </div>
      <div>
        <img src="https://i.ibb.co/fHkNxJ0/06.png" />
      </div>
    </Carousel>
  );
};

export default Banner;
