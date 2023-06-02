import { useState, useEffect } from "react";
import {
  ICharacter,
  IGetPeople,
  IHomeworld,
  ISpecies,
  IVehicle,
} from "../interfaces/interfaces";

interface Props {
  url: string;
}

export const useCharacter = ({ url }: Props) => {
  const [data, setData] = useState<ICharacter[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [next, setNext] = useState<string | null>("");

  const getCharacters = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = (await response.json()) as IGetPeople;
      setNext(data.next);

      const charactersData: ICharacter[] = await Promise.all(
        data.results.map(async (character: ICharacter) => {
          const characterData = {
            name: character.name,
            height: character.height,
            mass: character.mass,
            hair_color: character.hair_color,
            skin_color: character.skin_color,
            eye_color: character.eye_color,
            birth_year: character.birth_year,
            gender: character.gender,
            homeworld: character.homeworld,
            films: character.films,
            species: [""],
            vehicles: [""],
            starships: character.starships,
            created: character.created,
            edited: character.edited,
            url: character.url,
          };

          const response = await fetch(character.homeworld);
          const homeworld = (await response.json()) as IHomeworld;

          const speciesData = await Promise.all(
            character.species.map(async (speciesUrl: string) => {
              const response = await fetch(speciesUrl);
              const data = (await response.json()) as ISpecies;
              return { name: data.name };
            })
          );

          const vehiclesData = await Promise.all(
            character.vehicles.map(async (vehicleUrl: string) => {
              const response = await fetch(vehicleUrl);
              const data = (await response.json()) as IVehicle;
              return { name: data.name };
            })
          );

          characterData.homeworld = homeworld.name;
          characterData.species = speciesData.map((species) => species.name);
          characterData.vehicles = vehiclesData.map((vehicle) => vehicle.name);

          return characterData;
        })
      );

      setData(charactersData);
      setIsLoading(false);
      // throw new Error("error generated to test setHasError message");
    } catch (error) {
      setIsLoading(false);
      setData([]);
      setHasError(true);
    }
  };

  useEffect(() => {
    getCharacters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, next, isLoading, hasError };
};
