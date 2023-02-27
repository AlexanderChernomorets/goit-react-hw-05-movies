import { NavLink } from 'react-router-dom';
import { Header, Navigation } from './AppBar.styled';

const AppBar = () => {
  return (
    <Header>
      <nav>
        <Navigation>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </Navigation>
      </nav>
    </Header>
  );
};

export default AppBar;
