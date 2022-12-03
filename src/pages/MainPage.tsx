import React from "react";
import styled from "styled-components";
import Header from "../components/commons/Header";
import Carousel from "../components/commons/Carousel";
import SearchBar from "../components/commons/SearchBar";

const MainPage: React.FC = () => {
  return (
    <MainWrapper>
      <Header />
      <CarouselSection>
        <Carousel />
      </CarouselSection>
      <SearchBar />
    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
`;

const CarouselSection = styled.div`
  width: 85%;
  height: 500px;
`;
