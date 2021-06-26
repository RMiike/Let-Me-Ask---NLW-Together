import React from "react";
import { useHistory, useParams } from "react-router-dom";
import logoImg from "../../assets/images/logo.svg";
import { Button } from "../../components/Button";
import Question from "../../components/Question";
import { RoomCode } from "../../components/RoomCode";
import { useRoom } from "../../hooks/useRoom";
import { PageRoom, Content, RoomTitle } from "./styles";
import deleteImg from "../../assets/images/delete.svg";
import { database } from "../../services/firebase";

type RoomParams = {
  id: string;
};

const AdminRoom: React.FC = () => {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const history = useHistory();
  const { questions, title } = useRoom(roomId);

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm("Tem certeza que deseja excluir esta pergunta?")) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });
    history.push("/");
  }
  return (
    <PageRoom>
      <header>
        <Content>
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </Content>
      </header>
      <main>
        <RoomTitle>
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </RoomTitle>

        {questions.map((question, index) => {
          return (
            <Question
              content={question.content}
              author={question.author}
              key={index}
            >
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          );
        })}
      </main>
    </PageRoom>
  );
};

export default AdminRoom;
