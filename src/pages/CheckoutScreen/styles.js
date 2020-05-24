import styled from "styled-components";
import { Form as Unform } from "@unform/web";

export const Container = styled.div`
  display: flex;
  min-width: 352px;
  max-width: 1024px;
  width: 100%;
  flex-direction: row;
  height: 596px;
  border-color: #000;

  border-width: 3px;
`;
export const RedPanel = styled.div`
  min-width: 352px;
  width: 352px;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 596px;
  min-height: 239px;
  background-color: #de4b4b;
`;
export const WhitePanel = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 91px;
  width: 65%;
  height: 100%;
  background-color: #fff;
`;
export const Arrow = styled.div`
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 50px;
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
  align-items: center;

  justify-content: center;
  margin-top: 31px;
  flex-direction: column;
  display: flex;
  margin-left: -275px;
`;
export const InputContainer = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 40px;
`;
export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;
export const SemiInputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 51px;
`;

export const Row = styled.div`
  flex-direction: column;
  height: 44px;
`;
export const Label = styled.div`
  height: 44px;
`;
export const Label1 = styled.div`
  align-items: flex-start;
  height: 44px;
`;
export const Label2 = styled.div`
  align-items: flex-end;

  height: 44px;
`;

export const InputField = styled.input`
  height: 55px;
  padding: 0 20px;
  border-top: 0;
  border-left: 0;
  border-right: 0;

  border-color: #48285b;
  border-width: 2px;
  font-size: 18px;
`;
export const Title = styled.p`
  color: white;
  font-size: 24px;
  font-weight: bold;
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
