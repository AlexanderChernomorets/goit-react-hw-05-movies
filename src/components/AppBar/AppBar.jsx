import { NavLink } from 'react-router-dom';
import { Header, Navigation } from './AppBar.styled';

const AppBar = () => {
  let activeClassName = {
    color: '#2196f3',
  };
  return (
    <Header>
      <Navigation>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          style={({ isActive }) => {
            if (isActive) return { color: 'red' };
          }}
        >
          Movies
        </NavLink>
      </Navigation>

    </Header>
  );
};

export default AppBar;
