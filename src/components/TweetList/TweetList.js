import { useState } from 'react';
import users from '../../data/users.json';
import { List } from './TweetList.styled';
import { TweetCard } from 'components/TweetCard/TweetCard';
import LoadMoreBtn from 'components/LoadMore/LoadMore';

export const TweetList = () => {
  const data = [...users.users];
  const tweetsPerPage = 8;
  const [tweets, setTweets] = useState(data.slice(0, tweetsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const nextTweets = data.slice(0, nextPage * tweetsPerPage);
    setTweets(nextTweets);
    setCurrentPage(nextPage);
  };

  return (
    <>
      <List>
        {tweets.map(tweet => (
          <TweetCard key={tweet.id} {...tweet} />
        ))}
      </List>
      {tweets.length < data.length && <LoadMoreBtn loadMore={handleLoadMore} />}
    </>
  );
};
