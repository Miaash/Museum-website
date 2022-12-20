import styled from "styled-components";
import Logo from "../../assets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <MainWrapper>
      <FooterBox>
        <LogoImage src={Logo} alt="logo-img" />
        <FontAwesomeIcon className="github" icon={faGithub} size="4x" />
      </FooterBox>
    </MainWrapper>
  );
};

export default Footer;

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: var(--black-030);
  margin-top: 200px;
  position: sticky;
  z-index: 10000;
`;

const FooterBox = styled.div`
  width: 1300px;
  .github {
    color: #fff;
  }
`;

const LogoImage = styled.img`
  width: 90px;
`;
