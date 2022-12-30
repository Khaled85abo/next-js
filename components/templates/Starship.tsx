import { StarshipType } from "../ExtraInfo";

const Starship = ({ starship }: { starship: StarshipType }) => {
  const {
    consumables,
    crew,
    length,
    manufacturer,
    model,
    passengers,
    starship_class,
    name,
  } = starship;
  return (
    <article>
      <h5>{name}</h5>
      <p>Starship class: {starship_class}</p>
      <p>Langth: {length}</p>
      <p>Manufacturer: {manufacturer}</p>
      <p>Model: {model}km</p>
      <p>Passengers: {passengers}</p>
      <p>Crew: {crew}</p>
      <p>Consumable: {consumables}</p>
    </article>
  );
};

export default Starship;
