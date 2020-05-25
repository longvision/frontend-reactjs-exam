import styled from "styled-components";

export const Container = styled.div`
  width: 360px;
  height: 725px;
  @media only screen and (min-width: 361px) {
    width: 1920px;
    height: 1080px;
    background-color: #f7f7f7;
  }
`;
export const DeskContainer = styled.div`
  width: 360px;
  height: 725px;
  @media only screen and (min-width: 361px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
`;
