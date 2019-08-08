import React from "react";
import CollectionPreview from "../../components/collection-preview";

const Shop = ({ data }) => {
  return (
    <div className="shop-page">
      {data.map(({ id, ...otherItemProps }) => (
        <CollectionPreview key={id} {...otherItemProps} />
      ))}
    </div>
  );
};

export default Shop;
