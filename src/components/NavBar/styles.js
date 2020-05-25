import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media only screen and (min-width: 361px) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100px;
    background-color: #fff;
  }
`;

export const LogoItems = styled.div`
  @media only screen and (min-width: 361px) {
    justify-content: space-between;
    display-direction: row;
    display: flex;
    width: 260px;
    margin-left: 230px;
  }
  @media only screen and (min-width: 1919px) {
    justify-content: space-between;
    display-direction: row;
    display: flex;
    width: 260px;
    margin-left: 230px;
  }
`;

export const MenuItems = styled.div`
  @media only screen and (min-width: 361px) {
    flex-direction: row;
    display: flex;
    margin-left: 300px;
    align-items: center;
    justify-content: stretch;
    width: 572px;
    height: 100%;

    margin-left: 277px;
  }
  @media only screen and (min-width: 1919px) {
    flex-direction: row;
    display: flex;
    margin-left: 300px;
    align-items: center;
    justify-content: stretch;
    width: 572px;
    height: 100%;
    margin-right: 277px;
  }
`;
export const Item = styled.div`
  @media only screen and (min-width: 361px) {
    margin-right: 18px;
    background: #3c3c3c;

    width: 100px;
    border-radius: 5px;
  }
`;
