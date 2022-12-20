import React from "react";
import styled from "styled-components";
import Header from "../components/commons/Header";
import Carousel from "../components/commons/Carousel";
import SearchBar from "../components/commons/SearchBar";
import MuseumCards from "../components/museum/MuseumCards";
import IntroductionCard from "../components/commons/IntroductionCard";
import Footer from "../components/commons/Footer";

const MainPage: React.FC = () => {
  return (
    <MainWrapper>
      <Header />
      <CarouselSection>
        <Carousel />
      </CarouselSection>
      <SearchBar />
      <MuseumCards />
      <MuseumCards />
      <IntroductionCard />
      <Footer />
    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CarouselSection = styled.div`
  width: 100%;
  height: 500px;
`;
