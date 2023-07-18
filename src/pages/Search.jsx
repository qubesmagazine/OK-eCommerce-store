import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Container } from "react-bootstrap";
import Spinner from "../components/utils/Spinner";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProductContainer from "../components/ProductContainer";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const { error, loading, data } = useFetch(
    "https://ecommtest.onrender.com/products"
  );

  const navigate = useNavigate();

  useEffect(() => {
    const getSearch = setTimeout(() => {
      if (query && query.length > 0) {
        setQuery(query);
      }
    }, 3000);
    return () => clearTimeout(getSearch);
  }, [query]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.append("name", query);
    } else {
      params.delete("name");
    }
    navigate({ search: params.toString() });
  }, [query, navigate]);

  const filterData = data.filter((res) => {
    const filter = res.title === query || res.category?.name === query;
    if (query !== "") {
      return (
        res.title.toLowerCase().includes(query) ||
        res.category?.name.toLowerCase().includes(query) || filter
      );
    }
  });

  return (
    <Container style={{ marginTop: "7rem" }}>
      <div className="position-relative pb-2 mb-4 border-bottom border-dark">
        <input
          className="small w-100 no-outline border-0"
          id="search"
          type="text"
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <AiOutlineClose
            className="position-absolute end-0"
            style={{ cursur: "pointer" }}
            onClick={() => setQuery("")}
          />
        )}
      </div>
      {loading && <Spinner />}
      {error ||
        (filterData && (
          <div className="mt-5">
            {error && <p>{error.message}</p>}
            <div className="d-flex align-items-center">
              <p>{filterData.length} result</p>
            </div>
            {filterData && (
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
              >
                <Masonry gutter="30px">
                  {filterData.map((product) => (
                    <ProductContainer key={product.id} {...product} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            )}
          </div>
        ))}
    </Container>
  );
}

export default Search;
