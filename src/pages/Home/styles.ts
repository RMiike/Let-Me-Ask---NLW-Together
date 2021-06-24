import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
  aside {
    flex: 7;

    background-color: #835afd;
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }
    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }
    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }
  main {
    flex: 8;

    padding: 0 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CreateRoomBtn = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 320px;
  align-items: stretch;

  text-align: center;
  > img {
    align-self: center;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      height: 50px;
      border-radius: 8px;
      padding: 0 16px;
      background: #fff;
      border: 1px solid #a8a8b3;
    }
    button {
      margin-top: 16px;
    }
    button,
    input {
      width: 100%;
    }
  }
  .separator {
    font-size: 14px;
    color: #a8a8b3;
    margin: 32px 0;
    display: flex;
    text-align: center;
    &::before {
      content: "";
      flex: 1;
      background: #a8a8b3;
      height: 1px;
      margin: 7px 16px 0 0;
    }
    &::after {
      content: "";
      flex: 1;
      background: #a8a8b3;
      height: 1px;
      margin: 7px 0 0 16px;
    }
  }
`;
