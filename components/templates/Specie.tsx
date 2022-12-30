import { SpecieType } from "../ExtraInfo";

const Specie = ({ specie }: { specie: SpecieType }) => {
  const {
    average_height,
    average_lifespan,
    classification,
    eye_colors,
    hair_colors,
    language,
    skin_colors,
    name,
  } = specie;
  return (
    <article>
      <h5>{name}</h5>
      <p>Average height: {average_height}h</p>
      <p>Language: {language}</p>
      <p>Classification: {classification}</p>
      <p>Average lifespan: {average_lifespan}km</p>
      <p>Skin colors: {skin_colors}</p>
      <p>Hair colors: {hair_colors}</p>
      <p>Eye colors: {eye_colors}</p>
    </article>
  );
};

export default Specie;
