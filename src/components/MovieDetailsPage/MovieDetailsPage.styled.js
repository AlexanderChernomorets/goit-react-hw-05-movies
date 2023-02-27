import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
`;

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  background: rgb(59, 79, 87);
  background: linear-gradient(
    90deg,
    rgba(59, 79, 87, 1) 13%,
    rgba(86, 96, 147, 1) 79%
  );
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  line-height: 20px;
  max-weight: 50px;
  padding: 12px 10px;
  text-align: center;
  text-transform: uppercase;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
  :focus {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

export const MoviePoster = styled.img`
  height: 100%;
  margin: auto 0;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const WrapperDescription = styled.div`
  margin-left: 24px;
`;

export const MovieTitle = styled.h3`
  margin: 10px;
  display: block;
  color: rgb(52, 52, 52);
  font-weight: 800;
  font-family: Ultra, sans-serif;
  font-size: 35px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: white 0px 2px, rgb(119 119 119) 0px 3px;
`;

export const Year = styled.p`
  margin-right: 10px;
  font-weight: normal;
  text-shadow: rgb(0 0 0 / 60%) 1px 1px;
  font-size: 32px;
  font-family: Muli, sans-serif;
`;

export const Score = styled.span`
  margin-left: 10px;
  font-weight: normal;
  text-shadow: rgb(0 0 0 / 60%) 1px 1px;
  font-size: 20px;
  font-family: Muli, sans-serif;
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

export const Overview = styled.h3`
  margin: 10px;
  display: block;
  color: rgb(52, 52, 52);
  font-weight: 800;
  font-family: Ultra, sans-serif;
  font-size: 24px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: white 0px 2px, rgb(119 119 119) 0px 3px;
`;

export const OverviewText = styled.p`
  margin: 0px;
  color: rgb(52, 52, 52);
  font-weight: normal;
  font-size: 20px;
  line-height: 35px;
  font-family: Orienta, sans-serif;
`;

export const Information = styled.h2`
  margin: 10px;
  display: block;
  color: rgb(52, 52, 52);
  font-weight: 800;
  font-family: Ultra, sans-serif;
  font-size: 35px;
  line-height: 42px;
  text-transform: uppercase;
  text-shadow: white 0px 2px, rgb(119 119 119) 0px 3px;
`;


