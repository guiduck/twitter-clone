import React from 'react';

import { 
  Container, 
  Retweeted, 
  Avatar, 
  RocketseatIcon, 
  Body, 
  Content, 
  Header, 
  Description, 
  ImageContent, 
  Icons, 
  Status, 
  CommentIcon, 
  RetweetIcon, 
  LikeIcon 
} from './styles';
//do pretty stuff right here
const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            {/* <Dot /> */}
            <time>27 de jun</time>
          </Header>
          
          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>

        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;