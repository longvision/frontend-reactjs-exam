import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-width: 352px;
  width: 100%;
  flex-direction: row;
  height: 596px;
  border-color: #000
  border-width:3px;

  background-color: #000;
`;
export const RedPanel = styled.div`
  min-width: 352px;
  width: 34%;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 596px;
  min-height: 239px;
  background-color: #de4b4b;
`;
export const WhitePanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #000;
`;
export const Arrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 44px;
  width: 44px;
`;
export const IconImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 15px;
  background-color: green;
`;
export const Results = styled.div`
  height: 100%;
`;
export const Message = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  background-color: #000;
  margin-left: 64px;
  height: 50px;
  width: 257px;
`;
export const Return = styled.div`
  height: 48px;
  flex-direction: row;
  display: flex;
  margin-bottom: 24px;
  margin-top: 53px;
`;
export const Card = styled.div`
  margin-left: 154px;
  height: 224.4px;
  flex-direction: row;
  display: flex;
`;
export const Title = styled.h1`
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
`;
export const InfoText = styled.p`
  color: #ffffff;
  opacity: 1;
  font-size: 13px;
  letter-spacing: -0.01px;
  text-align: left;
  width: 185px;
  height: 16px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 550px;
  /* display: flex; */

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    border: 0;
    color: #48285b;
    font-size: 18px;
    border-radius: 3px;
    min-width: 300px;
  }
  button {
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #ffe162;
    color: #48285b;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 3px;
    flex: 1;
    &:hover {
      background: #fff111;
    }
  }
`;
