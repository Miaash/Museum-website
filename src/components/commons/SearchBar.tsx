import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar: React.FC = () => {
  return (
    <SearchWrapper>
      <BarBox>
        <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
        <input type="search" />
      </BarBox>
    </SearchWrapper>
  );
};

export default SearchBar;

const SearchWrapper = styled.div`
  width: 880px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
`;

const BarBox = styled.div`
  margin-top: 35px;
  position: relative;
  input {
    height: 60px;
    width: 700px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 30px;
    border: none;
    -webkit-appearance: none;
    margin-left: 10px;
    padding: 0 20px 0 80px;
    overflow: auto;
    z-index: -1;
    :focus {
      outline: none;
      text-align: left;
    }
    :hover {
      box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
      transition: 0.1s ease-out;
    }
  }
  .search {
    position: absolute;
    right: 650px;
    top: 18px;
    font-size: 25px;
    color: var(--gray-020);
  }
`;
