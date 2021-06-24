import React, { FormEvent, useState } from "react";
import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImg from "../../assets/images/google-icon.svg";
import { PageAuth, MainContent, CreateRoomBtn } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../services/firebase";

const Home: React.FC = () => {
  const history = useHistory();
  const [roomCode, setRoomCode] = useState("");
  const { user, signInWithGoogle } = useAuth();

  async function hanldeCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
    if (roomCode.trim() === "") {
      return;
    }
    const roomRef = await database.ref(`rooms/${roomCode}`).get();
    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }
    history.push(`/rooms/${roomCode}`);
  }
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
          <CreateRoomBtn onClick={hanldeCreateRoom}>
            <img src={googleIconImg} alt="google icon" />
            Crie sua sala com o Google
          </CreateRoomBtn>
          <div className="separator">Ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(e) => setRoomCode(e.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </MainContent>
      </main>
    </PageAuth>
  );
};

export default Home;
