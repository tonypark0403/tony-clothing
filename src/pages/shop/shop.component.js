import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/hoc/with-spinner/with-spinner.component";
import CollectionsOverview from "../../components/collections/collections-overview/collections-overview.component";
import Collection from "../collection/collection.component";
// import Constants from "../../common/Constants";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);

class Shop extends Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    // Promise
    collectionRef.get().then(snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionMap);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });

    // Direct Fetch
    // fetch(
    //   `https://firestore.googleapis.com/v1/projects/${Constants.firebase.FIREBASE_PROJECT_ID}/databases/(default)/documents/collections`
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log("collections : ", collections))
    //   .catch(err => console.log("Error :", err));

    // Opservable
    // collectionRef.onSnapshot(snapshot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   // console.log(collectionMap);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    console.log(match); // like shop/:collectionId
    const { loading } = this.state;
    return (
      <div className="shop-page">
        {/* <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} /> */}
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
