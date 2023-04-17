import { ThemeProvider } from '@emotion/react';
import theme from 'theme';
import { Container } from './Container/Container.styled';
import { TweetList } from './TweetList/TweetList';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container>
          <TweetList />
        </Container>
      </main>
    </ThemeProvider>
  );
};
