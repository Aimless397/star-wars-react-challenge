import { useContext } from "react";
import "../../../styles/sidebar.css";
import { LoadingCell } from "../atoms/LoadingCell";
import { NoticeCell } from "../atoms/NoticeCell";
import { PersonCell } from "../molecules/PersonCell";
import { CharacterContext } from "../../../context/CharacterContext";

export const Sidebar = () => {
  const { characters, isLoading, hasError, nextPage } =
    useContext(CharacterContext);

  return (
    <div className="col-5 col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
      <div className="sidebar">
        {!hasError && <PersonCell data={characters ?? []} />}

        {isLoading ? (
          <LoadingCell />
        ) : (
          !hasError && (
            <div className="d-flex">
              <button
                className="btn btn-secondary my-2 mx-auto"
                onClick={() => nextPage()}
              >
                Load more Characters
              </button>
            </div>
          )
        )}
        {!isLoading && hasError && <NoticeCell />}
      </div>
    </div>
  );
};
