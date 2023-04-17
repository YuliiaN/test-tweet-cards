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
import NumberDisplay from 'components/Numeral';
import avatar from '../../pictures/avatar@2x.png';

export const TweetCard = ({ ...tweet }) => {
  const [followers, setFollowers] = useState(tweet.followers);
  const [following, setFollowing] = useState(false);

  const handleClick = () => {
    setFollowing(!following);
    setFollowers(prevState => (following ? prevState - 1 : prevState + 1));
  };

  const btnText = following ? 'Following' : 'Follow';

  return (
    <Item>
      <Logo />
      <Background />
      <Avatar src={avatar} />
      <DataWrapper>
        <Data>{tweet.tweets} tweets</Data>
        <Data>
          <NumberDisplay number={followers} />
        </Data>
      </DataWrapper>
      <Button onClick={handleClick} active={following}>
        {btnText}
      </Button>
    </Item>
  );
};
