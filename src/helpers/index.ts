import { ApiDetail } from "../fetchers/getPokemon";

import bugSvg from "../assets/vector/bug.svg";
import darkSvg from "../assets/vector/dark.svg";
import dragonSvg from "../assets/vector/dragon.svg";
import electricSvg from "../assets/vector/electric.svg";
import fairySvg from "../assets/vector/fairy.svg";
import fightingSvg from "../assets/vector/fighting.svg";
import fireSvg from "../assets/vector/fire.svg";
import flyingSvg from "../assets/vector/flying.svg";
import ghostSvg from "../assets/vector/ghost.svg";
import grassSvg from "../assets/vector/grass.svg";
import groundSvg from "../assets/vector/ground.svg";
import iceSvg from "../assets/vector/ice.svg";
import normalSvg from "../assets/vector/normal.svg";
import poisonSvg from "../assets/vector/poison.svg";
import psychicSvg from "../assets/vector/psychic.svg";
import rockSvg from "../assets/vector/rock.svg";
import steelSvg from "../assets/vector/steel.svg";
import waterSvg from "../assets/vector/water.svg";

export type AppPkmnDetail = {
  name: string;
  id: number;
  hp: number;
  image: string;
  height: number;
  weight: number;
  types: string[];
  ability: string;
  species: string;
};

// Helper function: given a color, returns whether it is dark or light
export const isDark = (color: string): boolean => {
  // Convert hex to RGB
  const hex = color.replace(/^#/, '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Helper function to convert sRGB to linear RGB
  const linearize = (value: number): number => {
    const v = value / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };

  // Linearize the RGB values
  const rLin = linearize(r);
  const gLin = linearize(g);
  const bLin = linearize(b);

  // Calculate luminance using the linearized values
  const luminance = 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;

  // Return whether the luminance indicates a dark color according to the set threshold
  return luminance < 0.3;
};

/**
 * helper function. given a pokemon from the api response, returns an object to be used in the app interface
 */
function getAppPkmnDetailFromApi(apiPkmn: ApiDetail): AppPkmnDetail {
  const hpStat = apiPkmn.stats.find(
    (stat) => stat.stat.name.toLowerCase() === "hp"
  );

  const ability =
    apiPkmn.abilities.length > 0
      ? apiPkmn.abilities.map((ability) => ability.ability.name)[0]
      : "N/A";

  return {
    name: apiPkmn.name,
    id: apiPkmn.id,
    hp: hpStat?.base_stat ?? 0,
    image: apiPkmn.sprites.front_default,
    height: apiPkmn.height / 10, // assume this calculation results in meters
    weight: apiPkmn.weight / 10, // assume this calculation results in kilograms
    types: apiPkmn.types
      .sort((typeA, typeB) => {
        if (typeA.slot > typeB.slot) {
          return 1;
        } else if (typeA.slot < typeB.slot) {
          return -1;
        }

        return 0;
      })
      .map((type) => type.type.name),
    ability: ability,
    species: apiPkmn.species.name,
  };
}

/**
 * helper function. given the pokemon's type (as string), return that type's associated hex color code
 */
function getImageConfigFromType(type: string) {
  const types: Record<
    string,
    { color: string;  vectorSrc: string }
  > = {
    bug: { color: "#91C12F", vectorSrc: bugSvg },
    dark: { color: "#5A5465",  vectorSrc: darkSvg },
    dragon: { color: "#0B6DC3",  vectorSrc: dragonSvg },
    electric: { color: "#F4D23C",  vectorSrc: electricSvg },
    fairy: { color: "#EC8FE6", vectorSrc: fairySvg },
    fighting: { color: "#CE416B", vectorSrc: fightingSvg },
    fire: { color: "#FF9D55",  vectorSrc: fireSvg },
    flying: { color: "#89AAE3", vectorSrc: flyingSvg },
    ghost: { color: "#5269AD",  vectorSrc: ghostSvg },
    grass: { color: "#63BC5A", vectorSrc: grassSvg },
    ground: { color: "#D97845",  vectorSrc: groundSvg },
    ice: { color: "#73CEC0",  vectorSrc: iceSvg },
    normal: { color: "#919AA2",  vectorSrc: normalSvg },
    poison: { color: "#B567CE",  vectorSrc: poisonSvg },
    psychic: { color: "#FA7179",  vectorSrc: psychicSvg },
    rock: { color: "#C5B78C", vectorSrc: rockSvg },
    steel: { color: "#5A8EA2",  vectorSrc: steelSvg },
    water: { color: "#5090D6",  vectorSrc: waterSvg },
  };

  return (
    types[type] ?? { color: "#919AA2",  vectorSrc: normalSvg }
  );
}

export { getAppPkmnDetailFromApi, getImageConfigFromType };
