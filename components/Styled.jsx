import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > h3 {
    width: 100%;
    text-align: center;
  }
`;

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Helvetica;
  > * {
    font-family: inherit;
  }
`;

export const Intro = styled.section`
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > * {
    margin: 0.5rem;
  }
`;

export const Title = styled.h1`
  color: skyblue;
`;

export const Replay = styled.ul`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const Score = styled.h2`
  color: skyblue;
  text-align: center;
`;

export const GameStatus = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`;
