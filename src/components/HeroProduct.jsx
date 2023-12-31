import React from "react";
import Spinner from "./utils/Spinner";
import { Button, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeroProduct({ error, data, loading }) {
  const bannerProduct = data.filter((product) => product.price >= 500);

  return (
    <>
      {loading && <Spinner />}
      {error ||
        (data && (
          <>
            <Carousel>
              {bannerProduct.slice(0, 3).map((banner) => (
                <Carousel.Item key={banner.id}>
                  <Image
                    className="d-block w-100"
                    src={banner.images[2]}
                    alt={banner.title}
                    style={{ height: "600px" }}
                  />
                  <Carousel.Caption>
                    <h1 className="display-3">{banner.title}</h1>
                    <Link to={`/products/${banner.id}`}>
                      <Button
                        variant="dark"
                        size="lg"
                        className="border-none rounded-0"
                      >
                        BUY NOW
                      </Button>
                    </Link>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </>
        ))}
    </>
  );
}

export default HeroProduct;
