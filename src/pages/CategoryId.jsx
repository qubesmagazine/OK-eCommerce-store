import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Container, Spinner } from "react-bootstrap";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProductContainer from "../components/ProductContainer";

// react-responsive-masonry  on npm package

// then you go to the package and copy the settings its like grid

function CategoryId() {
  const { Categoryid } = useParams();
  const { data, error, loading } = useFetch(
    `https://ecommtest.onrender.com/categories/${Categoryid}/products`
  );

  return (
    <Container style={{ paddingTop: "5rem" }}>
      {loading && <Spinner />}
      {error ||
        (data && (
          <>
            {error && <p>{error.message}</p>}
            {data && (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
              >
                <Masonry gutter="30px">
                  {data.map((product) => (
                    <ProductContainer key={product.id} {...product} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </>
        ))}
    </Container>
  );
}

export default CategoryId;
