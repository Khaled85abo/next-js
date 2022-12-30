import { useState, useEffect } from "react";
import Styles from "../styles/StarwarsStyling.module.css";
import Planet from "./templates/Planet";
import Specie from "./templates/Specie";
import Vehicle from "./templates/Vehicle";
import Starship from "./templates/Starship";
import { CharType } from "../pages/starwars";
import Spinner from "./Spinner";
export type PlanetType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type SpecieType = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string | null;
  language: string;
  people: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
export type VehicleType = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
export type StarshipType = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};
const extraInfoTypes = {
  PLANET: "planet",
  SPECIES: "species",
  VEHICLES: "vehicles",
  STARSHIPS: "starship",
};
const ExtraInfoSection = ({ charInfo }: { charInfo: CharType }) => {
  const [extraInfo, setExtraInfo] = useState<{
    type: string | null;
    data: PlanetType | SpecieType | VehicleType | StarshipType | null;
  } | null>({ type: null, data: null });

  const fetchCharPlanet = async (url: string) => {
    setExtraInfo({ type: extraInfoTypes.PLANET, data: null });
    if (!charInfo) return;
    const res = await fetch(url);
    const data: PlanetType = await res.json();
    setExtraInfo({ type: extraInfoTypes.PLANET, data });
  };
  const fetchSpecie = async () => {
    setExtraInfo({ type: null, data: null });
    if (!charInfo) return;
    if (charInfo.species.length == 0)
      setExtraInfo({ type: extraInfoTypes.SPECIES, data: null });
    const res = await fetch(charInfo.species[0]);
    const data = await res.json();
    setExtraInfo({ type: extraInfoTypes.SPECIES, data });
  };
  const fetchVehicles = async () => {
    setExtraInfo({ type: extraInfoTypes.VEHICLES, data: null });
    if (!charInfo) return;
    console.log(charInfo);
    console.log("getting vehicles: ", charInfo.vehicles[0]);
    if (charInfo.vehicles.length == 0) {
      setExtraInfo({ type: extraInfoTypes.VEHICLES, data: null });
    }
    const res = await fetch(charInfo.vehicles[0]);
    const resData = await res.json();
    console.log("Vehicle data: ", resData);
    setExtraInfo({ type: extraInfoTypes.VEHICLES, data: resData });
  };

  const fetchStarships = async () => {
    setExtraInfo({ type: extraInfoTypes.STARSHIPS, data: null });
    if (!charInfo) return;
    if (charInfo.starships.length == 0)
      setExtraInfo({ type: extraInfoTypes.STARSHIPS, data: null });
    const res = await fetch(charInfo.starships[0]);
    const resData = await res.json();
    setExtraInfo({ type: extraInfoTypes.STARSHIPS, data: resData });
  };

  useEffect(() => {
    fetchCharPlanet(charInfo.homeworld);
  }, [charInfo]);
  return (
    <section className={Styles.extra_info}>
      <div className={Styles.btns}>
        <input
          type="radio"
          id="radio-1"
          name="tabs"
          data-type="planet"
          checked={extraInfo?.type == extraInfoTypes.PLANET}
          onChange={() => {
            if (charInfo) fetchCharPlanet(charInfo.homeworld);
          }}
        />
        <label htmlFor="radio-1" className={Styles.tab}>
          Planet
        </label>
        <input
          type="radio"
          id="radio-2"
          name="tabs"
          data-type="species"
          checked={extraInfo?.type == extraInfoTypes.SPECIES}
          onChange={fetchSpecie}
        />
        <label htmlFor="radio-2" className={Styles.tab}>
          Species
        </label>
        <input
          type="radio"
          id="radio-3"
          name="tabs"
          data-type="vehicles"
          checked={extraInfo?.type == extraInfoTypes.VEHICLES}
          onChange={fetchVehicles}
        />
        <label htmlFor="radio-3" className={Styles.tab}>
          Vehicles
        </label>
        <input
          type="radio"
          id="radio-4"
          name="tabs"
          data-type="starships"
          checked={extraInfo?.type == extraInfoTypes.STARSHIPS}
          onChange={fetchStarships}
        />
        <label htmlFor="radio-4" className={Styles.tab}>
          Starships
        </label>
      </div>

      {extraInfo && !extraInfo.data && extraInfo.type ? (
        <h5>No available data</h5>
      ) : extraInfo && extraInfo.data ? (
        <div className={Styles.article}>
          {extraInfo.type == extraInfoTypes.PLANET ? (
            <Planet planet={extraInfo.data} />
          ) : extraInfo.type == extraInfoTypes.SPECIES ? (
            <Specie specie={extraInfo.data} />
          ) : extraInfo.type == extraInfoTypes.VEHICLES ? (
            <Vehicle vehicle={extraInfo.data} />
          ) : (
            <Starship starship={extraInfo.data} />
          )}
        </div>
      ) : (
        <div className={`${Styles.spinner_div} ${Styles.extraInfo}`}>
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default ExtraInfoSection;
