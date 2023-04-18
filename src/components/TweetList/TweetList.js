import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import routes from 'routes';
import users from '../../data/users.json';
import { List } from './TweetList.styled';
import { TweetCard } from 'components/TweetCard/TweetCard';
import LoadMoreBtn from 'components/LoadMore/LoadMore';

export const TweetList = () => {
  const data = [...users.users];
  const tweetsPerPage = 8;
  const [tweets, setTweets] = useState(data.slice(0, tweetsPerPage));
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const nextTweets = data.slice(0, nextPage * tweetsPerPage);
    setTweets(nextTweets);
    setCurrentPage(nextPage);
  };

  const path = location.state?.from ?? routes.HOME;

  return (
    <>
      <Link
        style={{
          fontSize: '18px',
          fontWeight: '600',
          color: 'black',
        }}
        to={path}
        state={{ from: location }}
      >
        Click to go back
      </Link>
      <List>
        {tweets.map(tweet => (
          <TweetCard key={tweet.id} {...tweet} />
        ))}
      </List>
      {tweets.length < data.length && <LoadMoreBtn loadMore={handleLoadMore} />}
    </>
  );
};
