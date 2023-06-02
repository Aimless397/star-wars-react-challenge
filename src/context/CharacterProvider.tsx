import { ReactNode, useState, useEffect } from "react";
import { CharacterContext, SelectCharacterNameProps } from "./CharacterContext";
import { ICharacter } from "../interfaces/interfaces";
import { useCharacter } from "../hooks/useCharacter";

type Props = {
  children: ReactNode;
};

export const CharacterProvider = ({ children }: Props) => {
  const [url, setUrl] = useState(`https://swapi.dev/api/people`);
  const { data, next, isLoading, hasError } = useCharacter({
    url,
  });
  const [characterSelected, setCharacterSelected] = useState<ICharacter | null>(
    data && data[0]
  );
  const [characters, setCharacters] = useState<ICharacter[]>(data);

  useEffect(() => {
    setCharacters(data);

    if (data.length) {
      setCharacters([...characters, ...data]);
      if (!characterSelected) setCharacterSelected(characters[0] ?? data[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const selectCharacter = ({ name }: SelectCharacterNameProps) => {
    const characterFound = characters?.find(
      (character) => character.name === name
    );

    setCharacterSelected(characterFound as ICharacter);
  };

  const nextPage = () => {
    setUrl(next as string);
  };

  return (
    <CharacterContext.Provider
      value={{
        characterSelected,
        characters,
        isLoading,
        hasError,
        selectCharacter,
        nextPage,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
