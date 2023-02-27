import styled from 'styled-components';

export const ReviewList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ReviewText = styled.p`
  margin: 0 0 20px 0;
  color: rgb(52, 52, 52);
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  font-family: Orienta, sans-serif;
  padding-left: 30px;
`;

export const Author = styled.p`
  margin: 0 0 0 10px;
  font-weight: normal;
  text-shadow: rgb(0 0 0 / 60%) 1px 1px;
  font-size: 32px;
  font-family: Muli, sans-serif;
`;

export const ReviewAuthor = styled.p`
  display: flex;
  align-items: baseline;
  margin: 0 0 5px 0;
  color: rgb(52, 52, 52);
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  font-family: Orienta, sans-serif;
`;

export const Error = styled.p`
  display: flex;
  align-items: baseline;
  margin: 0 0 5px 0;
  color: rgb(52, 52, 52);
  font-weight: normal;
  font-size: 40px;
  line-height: 35px;
  font-family: Orienta, sans-serif;
`;
