import React from "react";
import { connect } from "react-redux";

import "./collection.scss";
import { selectCollection } from "../../redux/shop/shop.selectors";

const Collection = ({ collection }) => {
  // console.log(match.params.categoryId);
  console.log(collection);
  return (
    <div className="collection-page">
      <h2 className="title">COLLECTION PAGE</h2>
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
