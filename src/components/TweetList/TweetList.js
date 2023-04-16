import users from '../../data/users.json';
import { List } from './TweetList.styled';
import { TweetCard } from 'components/TweetCard/TweetCard';

export const TweetList = () => {
  return (
    <List>
      {users.users.map(item => (
        <TweetCard key={item.id} {...item} />
      ))}
    </List>
  );
};
