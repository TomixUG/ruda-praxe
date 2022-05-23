import React, { useEffect, useState } from "react";

function FetchProducts() {
  const [data, setData] = useState();

  useEffect(async () => {
    var d = await fetch("products");
    d = await d.json();
    setData(d);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data.map((thing, i) => {
        return (
          <>
            <p style={{ color: "blue" }}>{thing.productID}</p>
            <p>{thing.dateCreated}</p>
            <p>{thing.createdBy}</p>

            <hr />
          </>
        );
      })}
    </>
  );
}

export default FetchProducts;
