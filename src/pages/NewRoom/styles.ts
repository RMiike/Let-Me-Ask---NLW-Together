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
  h2 {
    font: 700 24px "Poppins", sans-serif;
    margin: 62px 0 24px;
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
  p {
    font-size: 14px;
    color: #737380;
    margin-top: 16px;
    a {
      color: #e559f9;
    }
  }
`;