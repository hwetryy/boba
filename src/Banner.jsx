import React from "react";
import styled from "styled-components";
import bg from "./images/Background.png";
import ImgSHto from "./images/Moonbird.jpg";
import Boy from "./images/Boy.png";
import Monkey from "."
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const Container = styled("div")`
  background-image: url(${bg});
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const Text = styled("div")`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  margin-top: 80px;
  background: none;
`;
const TextU = styled("div")`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 80px;
  line-height: 96px;
  text-align: center;
  background: none;
`;
const Stext = styled("h4")`
  background: none;
  font-family: "Syne";
  font-style: normal;
  font-size: 9px;
  text-align: center;
  margin-top: 35px;
`;
const StextI = styled("h4")`
  background: none;
  font-family: "Syne";
  font-style: normal;
  font-size: 9px;
  text-align: center;
  margin-top: 25px;
`;
const But = styled("div")`
  background: #8c008c;
  width: 114px;
  height: 54px;
  font-family: "Syne";
  font-style: normal;
  text-align: center;
  border-radius: 15px;
  align-items: center;
  color: white;
  justify-content: center;
  margin: 0 auto;
  display: flex;
  margin-top: 30px;
`;

const Ntext = styled("div")`
  font-family: "Syne";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 96px;
  text-align: center;
  margin-top: 200px;
  background: none;
`;

const Rasm = styled("img")`
  border-radius: 24 px;
`;

const ManiCardim = styled(Card)`
  width: 35rem;
  border-radius: 26px;
`;

const CardContainer = styled("div")`
  display: flex;
  background: none;
  justify-content: center;
  gap: 20px;
`;

function Banner() {
  return (
    <Container>
      <Text>Create & Sell</Text>
      <TextU>Your NFTs today</TextU>
      <Stext>Place for your NFTs</Stext>
      <But>Sign in</But>
      <Ntext>Hottest collections</Ntext>
      <StextI>Best NFTs of the last month</StextI>
      <CardContainer>
        <ManiCardim
         
        >
          <Rasm alt="Sample" src={ImgSHto} />
          <CardBody>
            <CardTitle tag="h1">
              ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌ ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌Moonbird
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h4">
              Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis
              fringilla pulvinar nibh diam sit.
            </CardSubtitle>
          </CardBody>
        </ManiCardim>

        <ManiCardim
         
        >
          <Rasm alt="Sample" src={Boy} />
          <CardBody>
            <CardTitle tag="h1">
              ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌ ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ Clone X - X Takashi ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌ ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌ ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌ ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌  Murakami
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h4">
              Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis
              fringilla pulvinar nibh diam sit.
            </CardSubtitle>
          </CardBody>
        </ManiCardim>
        <ManiCardim
          
        >
          <Rasm alt="Sample" src={ImgSHto} />
          <CardBody>
            <CardTitle tag="h1">
              ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌ ᠌ ᠌ ᠌᠌ ᠌ ᠌ ᠌ ᠌ ᠌᠌᠌᠌ ᠌
            </CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h4">
              Faucibus odio elementum nulla venenatis, libero. Ullamcorper duis
              fringilla pulvinar nibh diam sit.
            </CardSubtitle>
          </CardBody>
        </ManiCardim>
      </CardContainer>
    </Container>
  );
}

export default Banner;
