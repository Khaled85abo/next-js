import { VehicleType } from "../ExtraInfo";

const Vehicle = ({ vehicle }: { vehicle: VehicleType }) => {
  const {
    crew,
    length,
    manufacturer,
    max_atmosphering_speed,
    name,
    model,
    passengers,
  } = vehicle;
  console.log("rendering vehicles data: ", name);

  return (
    <article>
      <h5>{name}</h5>
      <p>Length: {length}h</p>
      <p>Manufacturer: {manufacturer}days</p>
      <p>model: {model}</p>
      <p>Max atmospheric speed: {max_atmosphering_speed}km</p>
      <p>Crew: {crew}</p>
      <p>Passengers: {passengers}</p>
    </article>
  );
};

export default Vehicle;
