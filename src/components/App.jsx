import { Container } from './Container/Container.styled';
import { TweetList } from './TweetList/TweetList';

export const App = () => {
  return (
    <main>
      <Container>
        <TweetList />
      </Container>
    </main>
  );
};
