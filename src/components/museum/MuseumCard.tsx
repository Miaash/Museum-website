import React from "react";
import styled from "styled-components";

const MuseumCard = () => {
  return (
    <MainWrapper>
      <ImageContainer>
        <Image
          src="https://media-cdn.tripadvisor.com/media/photo-s/05/b8/74/b8/caption.jpg"
          alt="museum-img"
        />
      </ImageContainer>
      <TextContainer>
        <Title>국립중앙박물관</Title>
        <Address>서울특별시 용산구 서빙고로 137</Address>
        <Type>
          <span>국립</span>박물관
        </Type>
      </TextContainer>
    </MainWrapper>
  );
};

export default MuseumCard;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 455px;
  margin-top: 15px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 350px;
  :hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  width: 400px;
  height: 75px;
  margin-top: 10px;
  :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Address = styled.div`
  font-size: 14px;
  color: var(--gray-030);
`;

const Type = styled.div`
  font-size: 14px;
  color: var(--gray-030);
`;
