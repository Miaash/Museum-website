import React from "react";
import styled from "styled-components";
import MuseumCard from "./MuseumCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const MuseumCards: React.FC = () => {
  return (
    <MainWrapper>
      <TitleBox>
        <Title>
          <div className="text">Free Admission</div>
          <FontAwesomeIcon className="arrow" icon={faArrowRightLong} />
        </Title>
        <UnderLine></UnderLine>
      </TitleBox>
      <CardBox>
        <MuseumCard />
        <MuseumCard />
        <MuseumCard />
      </CardBox>
    </MainWrapper>
  );
};

export default MuseumCards;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1350px;
  height: 500px;
  margin-top: 65px;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1300px;
  height: 45px;
`;

const Title = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  height: 100%;
  font-size: 25px;
  font-weight: 500;
  .arrow {
    width: 20px;
    margin-right: 1px;
    :hover {
      cursor: pointer;
    }
  }
`;

const UnderLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--black-010);
`;

const CardBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
