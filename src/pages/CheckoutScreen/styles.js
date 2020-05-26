import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 360px;
  width: 100%;
  flex-direction: column;
  height: 239px;
  border-width: 3px;
  background-color: #fff;
  @media only screen and (min-width: 361px) {
    display: flex;
    min-width: 360px;
    max-width: 1024px;
    width: 100%;
    flex-direction: row;
    height: 596px;
    background-color: #fff;
    border-width: 3px;
    margin-left: 277px;
    margin-top 65px;
  }
`;

export const RedPanel = styled.div`
  max-width: 360px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 239px;

  background-color: #de4b4b;

  @media only screen and (min-width: 361px) {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    height: 100%;
    background-color: #de4b4b;
  }
`;
export const CreditCard = styled.div`
  align-items: center;
  max-width: 360px;
  flex-direction: column;
  justify-content: center;
  margin-top: -80px;
  flex-direction: row;
  display: flex;

  @media only screen and (min-width: 361px) {
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 31px;
    flex-direction: column;
    display: flex;
    margin-left: -275px;
  }
`;
export const WhitePanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 361px) {
    display: flex;
    flex-direction: column;
    margin-left: -50px;

    padding-top: 53px;

    width: 672px;
    height: 543px;
    background-color: #fff;
  }
`;
export const Arrow = styled.div`
  flex-direction: column;

  height: 50px;
  width: 50px;
`;
export const IconImg = styled.img`
  height: 50px;
  width: 50px;

  margin-right: 15px;
`;
export const BreadcrumbsContainer = styled.div`
  display: none;

  @media only screen and (min-width: 361px) {
    display: flex;
  }
`;
export const Message = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -80px;
  margin-left: 34px;
  height: 100%;
  @media only screen and (min-width: 361px) {
    flex-direction: row;
    justify-content: center;
    width: auto;
    align-items: center;
    margin-left: 80px;
    margin-top: 74px;
    height: 20px;
  }
`;
export const Return = styled.div`
  height: 48px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  @media only screen and (min-width: 361px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    margin-top: 20px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  @media only screen and (min-width: 361px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
  }
`;
export const Form = styled.div`
  width: 80%;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 361px) {
    flex-direction: column;
    display: flex;
    width: 440px;
    align-items: center;
    justify-content: center;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 40px;
`;
export const SubmitContainer = styled.div`
  justify-content: center;
  margin-top: -25px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  @media only screen and (min-width: 361px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
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
  font-size: 16px;
  font-weight: bold;
  width: 185px;
  text-align: left;
  color: white;
  @media only screen and (min-width: 361px) {
    color: white;
    font-size: 24px;
    width: 215px;
    display: flex;
    font-weight: bold;
    text-align: left;
    align-items: flex-end;
  }
`;
export const InfoText = styled.p`
  color: #ffffff;
  opacity: 1;
  font-size: 13px;
  letter-spacing: -0.01px;
  text-align: center;

  height: 16px;
`;
export const InfoText1 = styled.p`
  color: #ffffff;
  opacity: 1;
  font-size: 13px;
  letter-spacing: -0.01px;
  text-align: center;
  margin-left: 100px;
  height: 16px;
`;
