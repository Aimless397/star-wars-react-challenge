import { createContext } from "react";
import { ICharacter } from "../interfaces/interfaces";

export interface SelectCharacterNameProps {
  name?: string;
}

type CharacterContextProps = {
  characterSelected: ICharacter | null;
  characters: ICharacter[] | null;
  isLoading: boolean;
  hasError: boolean;
  selectCharacter: ({ name }: SelectCharacterNameProps) => void;
  nextPage: () => void;
};

export const CharacterContext = createContext({} as CharacterContextProps);
