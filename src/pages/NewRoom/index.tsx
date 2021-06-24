import React from "react";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import { PageAuth, MainContent } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const NewRoom: React.FC = () => {
  const { user } = useAuth();

  return (
    <PageAuth>
      <aside>
        <img src={illustrationImg} alt="illustration" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as suas dúvidas em tempo real.</p>
      </aside>
      <main>
        <MainContent>
          <img src={logoImg} alt="logo" />

          <h2>Criar uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui.</Link>
          </p>
        </MainContent>
      </main>
    </PageAuth>
  );
};

export default NewRoom;
