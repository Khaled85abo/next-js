import { PlanetType } from "../ExtraInfo";

const Planet = ({ planet }: { planet: PlanetType }) => {
  const {
    climate,
    diameter,
    gravity,
    orbital_period,
    rotation_period,
    terrain,
    name,
  } = planet;
  return (
    <article>
      <h5>{name}</h5>
      <p>
        Rotation period: {rotation_period}
        {rotation_period != "0" ? " h" : ""}
      </p>
      <p>
        Orbital period: {orbital_period}
        {orbital_period != "0" ? " days" : ""}
      </p>
      <p>
        Diameter: {diameter} {diameter != "0" ? " km" : ""}
      </p>
      <p>Climate: {climate}</p>
      <p>Gravity: {gravity}</p>
      <p>terrain: {terrain}</p>
    </article>
  );
};

export default Planet;
