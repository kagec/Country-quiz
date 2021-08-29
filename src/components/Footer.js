import styled from "styled-components";

const Footer = () => {
  return (
    <FooterSign>
      created by <span>kagec</span> - devChallenges.io
    </FooterSign>
  );
};

const FooterSign = styled.footer`
  margin-top: auto;
  padding-top: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #f2f2f2;
  text-align: center;

  > span {
    font-weight: 500;
    text-decoration: underline;
  }
`;

export default Footer;
