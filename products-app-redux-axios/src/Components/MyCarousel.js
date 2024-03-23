import Carousel from "react-bootstrap/Carousel";

function MyCarousel({ images }) {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ height: "350px" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
