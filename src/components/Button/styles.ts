import styled from "styled-components";

export const Container = styled.button`
  margin-top: 64px;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: #8354fd;
  color: #fff;
  padding: 0 32px;
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
  &::not(::disabled):hover {
    filter: brightness(0.9);
  }
  &::disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
