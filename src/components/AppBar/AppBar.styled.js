import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  min-height: 80px;
  margin-bottom: 16px;
  border-bottom: 1px solid #2a363b;
  color: grey;
  background-color: #007c91;
  background-image: linear-gradient(1deg, lightgray, rgb(81 110 114) 100%);
`;

export const Navigation = styled.ul`
  list-style: none;
  justify-content: space-between;
  display: flex;
  width: 250px;
  margin: 0;
`;

export const NavLink = styled.a`
  text-decoration: none;
`;
