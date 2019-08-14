import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

// Checked IDs in DB
firestore
  .collection("users")
  .doc("GSGrMqyop93nhKs6IiTk")
  .collection("cartItems")
  .doc("qHATAU7YOAZG52ZkRUwo");

// the same as above
firestore.doc("/users/GSGrMqyop93nhKs6IiTk/cartItems/qHATAU7YOAZG52ZkRUwo"); // last one should be doc
firestore.collection("/users/GSGrMqyop93nhKs6IiTk/cartItems"); // last one should be collection
