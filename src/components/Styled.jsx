import styled from 'styled-components';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

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
  background-color: #6699CC;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
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
  color: white;
`;

export const Replay = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  > li {
    margin: 0.3rem 0;
  }
`;

export const Score = styled.h2`
  color: white;
  text-align: center;
`;

export const GameStatus = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-wrap: wrap;
`;

export const Select = styled.select`
  width: 10em;
  height: 5em;
  padding: 0.3em;
  overflow: scroll;
  border: none;
`;

export const Input = styled.input`
  padding-left: 0.5em;
  width: 12em;
  height: 3em;
  border: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5)
  text-align: center;
`;

export const Transition = styled(CSSTransitionGroup)`
  width: 100%;
  height: 100%;
`;

export const PlayerScore = styled.h3`
  width: 100%;
  color: white;
  text-align: center;
`;
