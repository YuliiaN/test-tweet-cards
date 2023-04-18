import { Link } from 'react-router-dom';
import routes from 'routes';

const Home = () => {
  return (
    <section>
      <h1>Welcome!</h1>
      <p>
        Click <Link to={routes.TWEETS}>here</Link> to see tweets
      </p>
    </section>
  );
};

export default Home;
