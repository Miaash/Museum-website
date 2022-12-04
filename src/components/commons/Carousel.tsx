import styled from "styled-components";

const Carousel = () => {
  return (
    <MainWrapper>
      <CarouselContainer>This is a Carousel</CarouselContainer>
    </MainWrapper>
  );
};

export default Carousel;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1900px;
  height: 450px;
  background-color: var(--gray-010);
  font-size: 25px;
`;
