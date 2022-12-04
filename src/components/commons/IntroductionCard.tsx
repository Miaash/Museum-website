import styled from "styled-components";

const IntroductionCard = () => {
  return (
    <MainWrapper>
      <IntroContainer>
        <FirstBox>Text</FirstBox>
        <SecondBox>
          <img
            src="https://www.dreamers.id/img_artikel/59museum-nasional-korea-wisata-korea.jpg"
            alt="museum-img"
          />
        </SecondBox>
      </IntroContainer>
    </MainWrapper>
  );
};

export default IntroductionCard;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 130px 0;
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1900px;
  height: 500px;
  background-color: var(--gray-010);
  font-size: 25px;
`;

const FirstBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 50%;
  background-color: var(--yellow-020);
`;

const SecondBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 50%;
  background-color: #d2c3ad;
  img {
    width: 100%;
    height: 100%;
  }
`;
