import { Routes, Route, Navigate } from 'react-router-dom';
import routes from 'routes';
import Tweets from 'pages/Tweets';
import Home from 'pages/Home';
import { Container } from './Container/Container.styled';

export const App = () => {
  return (
    <main>
      <Container>
        <Routes>
          <Route path={routes.HOME} Component={Home} />
          <Route path={routes.TWEETS} Component={Tweets} />
          <Route path="*" Component={<Navigate to={routes.HOME} />} />
        </Routes>
      </Container>
    </main>
  );
};
