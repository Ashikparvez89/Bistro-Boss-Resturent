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
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://i.ibb.co/GJzQmqG/02.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://i.ibb.co/ChV7SJy/03.png" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://i.ibb.co/r06V20s/04.jpg" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://i.ibb.co/CbJFv5L/05.png" />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src="https://i.ibb.co/fHkNxJ0/06.png" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Banner;
