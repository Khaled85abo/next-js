import Styles from "../styles/StarwarsStyling.module.css";
import React, { useEffect, useReducer, useState } from "react";
import Spinner from "../components/Spinner";
import Character from "../components/templates/Chararcter";
import ExtraInfo from "../components/ExtraInfo";

const getNumber = (url: string) => {
  const splitted = url.split("/");
  const num = splitted.filter((le) => le !== "" && Number.isInteger(+le));
  return num[0];
};

export type CharType = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
};

const StarWars = () => {
  const [page, setPage] = useState(1);
  const [chars, setChars] = useState<null | CharType[]>(null);
  const [charInfo, setCharInfo] = useState<CharType | null>(null);

  const fetchChars = async () => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    const chars = await res.json();
    setChars(chars.results);
  };

  const addCharInfo = (char: CharType) => {
    setCharInfo(char);
  };

  const handleNext = () => {
    if (page >= 9) return;
    setPage((page) => page + 1);
  };
  const handlePrev = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  useEffect(() => {
    fetchChars();
  }, [page]);

  return (
    <div className={Styles.wrapper}>
      <header>
        <p>Star wars catalog</p>
      </header>
      <div className={Styles.container}>
        <section className={Styles.characters}>
          <p>Characters</p>
          {chars ? (
            <ul>
              {chars.map((char, index) => (
                <li key={index} onClick={() => addCharInfo(char)}>
                  {char.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="spinner-div ul-loader">
              <Spinner />
            </div>
          )}

          <div className={Styles.page_controllers}>
            <button onClick={handlePrev} className={Styles.back_btn}>
              ◀
            </button>
            <span>{page}</span>
            <span>/</span>
            <span className={Styles.talpages}>9</span>
            <button onClick={handleNext} className={Styles.forward_btn}>
              ▶
            </button>
          </div>
        </section>
        <aside>
          <p>Details</p>
          {charInfo ? (
            <div className={Styles.character_details}>
              <Character {...charInfo} />
            </div>
          ) : (
            <div className={`${Styles.detaisl} ${Styles.spinner_div}`}>
              <Spinner />
            </div>
          )}
          {charInfo && <ExtraInfo charInfo={charInfo} />}
        </aside>
      </div>
    </div>
  );
};

export default StarWars;
