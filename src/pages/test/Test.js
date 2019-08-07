import React from "react";
import { Link } from "react-router-dom";

export const TestDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>Test Details for {props.match.params.testId}</h1>
    </div>
  );
};
const Test = props => {
  console.log(props);
  return (
    <div>
      <h1>Test Home</h1>
      <Link to="/test/1">Test detail for 1</Link>
      <button onClick={() => props.history.push("/test/1")}>
        Test Detail for 1
      </button>
      <Link to={`${props.match.url}/13`}>Test detail for 13</Link>
      <Link to={`${props.match.url}/17`}>Test detail for 17</Link>
      <Link to={`${props.match.url}/21`}>Test detail for 21</Link>
    </div>
  );
};

export default Test;
