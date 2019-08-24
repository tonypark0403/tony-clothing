import React from "react";
import { connect } from "react-redux";

import "./collection.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collections/collection-item/collection-item.component";

const Collection = ({ collection }) => {
  // console.log(match.params.categoryId);
  const { title, items } = collection;
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log("id", ownProps.match.params.collectionId);
  console.log("state", state);
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  };
};

export default connect(mapStateToProps)(Collection);
