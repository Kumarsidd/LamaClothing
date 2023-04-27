import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover {
    text-decoration: underline;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
  cursor: pointer;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Lama.</Logo>
        <Desc>
          A world of limitless possibilities awaits you - for all its regular
          customers at zero subscription fee. All you need is 500 supercoins to
          be a part of this service. Plus members earns 4 supercoins & non-plus
          members earn 2 supercoins.. In short, earn more when you shop more!
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook overlap="rectangular" />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram overlap="rectangular" />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter overlap="rectangular" />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest overlap="rectangular" />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} overlap="rectangular" />{" "}
          Elphiston, Mumbai, 400024
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} overlap="rectangular" />
          +91 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} overlap="rectangular" />
          contact@ChapterOne.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
