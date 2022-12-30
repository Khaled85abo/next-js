import { CharType } from "../../pages/starwars";

const Character = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
}: Partial<CharType>) => {
  return (
    <article>
      <h5>{name}</h5>
      <p>Height: {height}cm</p>
      <p>Mass: {mass} kg</p>
      <p>Hair color: {hair_color}</p>
      <p>Skin color: {skin_color}</p>
      <p>Eye color: {eye_color}</p>
      <p>Birth year:{birth_year}</p>
      <p>Gender: {gender}</p>
    </article>
  );
};

export default Character;
