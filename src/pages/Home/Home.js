import React from "react";
import Directory from "../../components/directory";
import { HomePageContainer } from "./home.styles";
// import "./home.scss";

const Home = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Home;
