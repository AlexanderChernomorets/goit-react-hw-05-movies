import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const CastItem = styled.li`
  display: flex;
  width: 50%;
  margin-bottom: 20px;
`;

export const ActorPhoto = styled.img`
  width: 150px;
  height: 100%;
  border-radius: 5px;
`;

export const Info = styled.div`
  margin-left: 20px;
`;

export const Description = styled.p`
  display: flex;
  align-items: baseline;
  margin: 0px;
  color: rgb(52, 52, 52);
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  font-family: Orienta, sans-serif;
`;
