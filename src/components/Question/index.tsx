import React, { ReactNode } from "react";

import { Container, UserInfo } from "./styles";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
};
const Question: React.FC<QuestionProps> = ({
  content,
  author,
  children,
  isHighlighted = false,
  isAnswered = false,
}) => {
  return (
    <Container
      className={`${isAnswered ? "answered" : ""} 
      ${isHighlighted ? "highlighted" : ""}`}
    >
      <p>{content}</p>
      <footer>
        <UserInfo>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </UserInfo>
        <div>{children}</div>
      </footer>
    </Container>
  );
};

export default Question;
