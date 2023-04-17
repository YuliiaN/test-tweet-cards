import { useState, useEffect } from 'react';
import users from '../../data/users.json';
import { List } from './TweetList.styled';
import { TweetCard } from 'components/TweetCard/TweetCard';
import LoadMoreBtn from 'components/LoadMore/LoadMore';

export const TweetList = () => {
  const [tweets, setTweets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const data = [...users.users];
  const tweetsPerPage = 8;

  useEffect(() => {
    const indexOfLastTweet = currentPage * tweetsPerPage;
    const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage;
    const updatedTweets = data.slice(indexOfFirstTweet, indexOfLastTweet);
    setTweets([...tweets, ...updatedTweets]);
  }, [data, currentPage, tweetsPerPage]);

  const loadMore = () => {
    if (currentPage < data.length / tweetsPerPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <List>
        {tweets.length > 0 &&
          tweets.map(tweet => <TweetCard key={tweet.id} {...tweet} />)}
      </List>
      {tweets.length < data.length && <LoadMoreBtn loadMore={loadMore} />}
    </>
  );
};
