import { Container } from "../organisms/Container";
import { Navbar } from "../organisms/Navbar";
import { CharacterProvider } from "../../../context/CharacterProvider";
import "../../../styles/app.css";

export const App = () => {
  return (
    <CharacterProvider>
      <div className="app">
        <Navbar />
        <Container />
      </div>
    </CharacterProvider>
  );
};
