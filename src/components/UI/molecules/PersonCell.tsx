import { CharacterContext } from "../../../context/CharacterContext";
import { ICharacter } from "../../../interfaces/interfaces";
import { useContext } from "react";

interface Props {
  data: ICharacter[];
}

export const PersonCell = ({ data }: Props) => {
  const { selectCharacter, characterSelected } = useContext(CharacterContext);

  const changeSelectedCharacter = (name: string) => {
    if (characterSelected?.name !== name) {
      selectCharacter({ name });
    }
  };

  return (
    <>
      {data.map((result) => (
        <div
          key={result.name}
          onClick={() => changeSelectedCharacter(result.name)}
          data-testid="personCell"
          className={`personCell ${
            characterSelected?.name === result.name ? "personCellHover" : ""
          }`}
        >
          <div>
            <div>
              <span className="characterNameSpan">{result.name}</span>
              <br />
              <span className="characterSpeciesSpan">
                {result.species.length ? result.species : "Human"} from{" "}
                {result.homeworld}
              </span>
            </div>
          </div>
          <div className="my-auto">
            <i className="gg-chevron-right"></i>
          </div>
        </div>
      ))}
    </>
  );
};
