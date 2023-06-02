import { Sidebar } from "./Sidebar";
import { CharacterContent } from "../templates/CharacterContent";

export const Container = () => {
  return (
    <div data-testid="contentContainer" className="row m-0 contentContainer">
      <Sidebar />
      <CharacterContent />
    </div>
  );
};
