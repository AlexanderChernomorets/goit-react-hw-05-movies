import styled from 'styled-components';

export const FilmsList = styled.ul`
  display: block;
  list-style: circle;
  margin: 0;
  padding: 0;
`;

export const FilmsTitle = styled.p`
  margin: 10px;
  display: contents;
  color: rgb(52, 52, 52);
  font-weight: 800;
  font-family: Ultra, sans-serif;
  font-size: 30px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: white 0px 2px, rgb(119 119 119) 0px 3px;

  :hover {
    font-size: 31px;
  }
`;

export const Title = styled.h2`
  margin: 10px;
  display: contents;
  color: rgb(52, 52, 52);
  font-weight: 800;
  font-family: Ultra, sans-serif;
  font-size: 40px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: white 0px 2px, rgb(119 119 119) 0px 3px;
`;
