import { CharacterContext } from "../../../context/CharacterContext";
import "../../../styles/characterContent.css";
import { useContext } from "react";
import { SectionHeader } from "../atoms/SectionHeader";
import { DataCell } from "../atoms/DataCell";
import { NoVehicle } from "../atoms/NoVehicle";
import { FetchFailureError } from "../atoms/FetchFailureError";

export const CharacterContent = () => {
  const { characterSelected, hasError, characters } =
    useContext(CharacterContext);

  return (
    <div className="col-7 col-sm-8 col-md-8 col-lg-8 col-xl-9 col-xxl-9">
      <div className="row m-0">
        <div className="col"></div>
        <div className="col-12 col-sm-10 col-md-9 col-lg-9 col-xl-9 col-xxl-8">
          <div className="charactersContainer">
            {!characters?.length && hasError ? (
              <FetchFailureError />
            ) : hasError ? (
              <></>
            ) : (
              <>
                <SectionHeader text={"General Information"} />
                <DataCell
                  text={"Eye Color"}
                  value={characterSelected?.eye_color}
                />
                <DataCell
                  text={"Hair Color"}
                  value={characterSelected?.hair_color}
                />
                <DataCell
                  text={"Skin Color"}
                  value={characterSelected?.skin_color}
                />
                <DataCell
                  text={"Birth Year"}
                  value={characterSelected?.birth_year}
                />

                <SectionHeader text={"Vehicles"} />
                {characterSelected?.vehicles.length === 0 && <NoVehicle />}
                {characterSelected?.vehicles.map((vehicle, index) => (
                  <DataCell key={index} text={vehicle} />
                ))}
              </>
            )}
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};
