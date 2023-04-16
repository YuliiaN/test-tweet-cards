import { useState } from 'react';
import {
  Item,
  Logo,
  Background,
  Avatar,
  DataWrapper,
  Data,
  Button,
} from './TweetCard.styled';
import avatar from '../../pictures/avatar@2x.png';

export const TweetCard = ({ ...item }) => {
  const [followers, setFollowers] = useState(item.followers);

  const handleClick = () => {
    setFollowers(followers + 1);
  };

  return (
    <Item>
      <Logo />
      <Background />
      <Avatar src={avatar} />
      <DataWrapper>
        <Data>{item.tweets} tweets</Data>
        <Data>{followers} followers</Data>
      </DataWrapper>
      <Button onClick={handleClick}>Follow</Button>
    </Item>
  );
};
