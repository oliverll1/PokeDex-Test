
import {
    AppPkmnDetail,
    getImageConfigFromType,
    getAppPkmnDetailFromApi,
} from "../../helpers";
import { fetchPokemonDetail } from "../../fetchers/getPokemon";
import { useParams } from "react-router-dom";
import PokemonImage from "./PokemonImage";
import TypeChip from "./TypeChip";
import Attribute from "./Attribute";
import { useQuery } from "react-query";
import { useState } from "react";

const PokemonDetails = () => {
    const [selectedPkmn, setSelectedPkmn] = useState<AppPkmnDetail | null>(null);
    const { id } = useParams<{ id: string }>();
    
    // Fetch Pokemon details and cache it
    const { isLoading, error } = useQuery({
        queryKey: ["pokemonDetail", id],
        queryFn: async () => {
          if (id) {
            console.log("fetching", id);
            return fetchPokemonDetail(id);
          }
        },
        retry: false,
        enabled: !!id,
        cacheTime: 1000 * 60 * 30, // 30 minutes
        onSuccess: (apiDetail) => {
          if (apiDetail) {
            const pkmDetail = getAppPkmnDetailFromApi(apiDetail);
            setSelectedPkmn(pkmDetail);
          }
        },
        onError: (error) => {
          console.error("Failed to fetch Pokemon details:", error);
        },
      });

    if(error) return <div data-testid="pokemon-details-error"><span>Error displaying pokemon details</span></div>;

    if(isLoading) return (
        <div data-testid="pokemon-details-loading" className="flex xs:px-[1.25rem] flex-col justify-center items-center flex-[1_0_0] w-auto flex-grow 
            rounded-[1px] border border-black bg-white min-h-[630px]">
            <p className="text-black text-[2rem] font-normal leading-7 font-sans capitalize">Loading...</p>
        </div>
    )

    if(selectedPkmn) {
        const formattedId = selectedPkmn.id.toString().padStart(3, "0");
        const pkmnFirstType = !!selectedPkmn && (selectedPkmn.types.length ?? 0) > 0
        ? selectedPkmn.types[0] : "normal";
        const firstTypeImageConfig = getImageConfigFromType(pkmnFirstType);

        return (
            <div data-testid="pokemon-details" className="flex xs:px-[1.25rem] flex-col items-start flex-[1_0_0] w-auto flex-grow 
            rounded-[1px] border border-black bg-white min-h-[630px]">

                <PokemonImage
                    backgroundColor={firstTypeImageConfig.color}
                    vectorSrc={firstTypeImageConfig.vectorSrc}
                    image={selectedPkmn.image}
                />
                
                {/* 
                    Due to some pokemon having different dimensions under the same image size, we need to add some spacing between the pokemon details
                    and the image. If we follow the design as it is, the image and the pokemon name might overlap in some cases.
                */}
                <div className="flex flex-col items-center xs:items-start p-[5px] px-[10px] mt-[3rem] lg:mt-[1rem] gap-[20px]">

                    <div className="flex flex-col items-start">
                        <h2 data-testid="pokemon-name" className="text-black text-[2rem] font-normal leading-7 font-sans capitalize">{selectedPkmn?.name}</h2>
                        <span data-testid="pokemon-id" className="text-black/70 text-[1rem] font-normal ">#{formattedId}</span>
                    </div>

                    <div className="flex items-start justify-start content-start gap-[7px] flex-wrap">
                        {selectedPkmn?.types.map((type: string) => {
                            const typeImageConfig = getImageConfigFromType(type);
                            return (
                                <TypeChip key={type} type={type} vectorSrc={typeImageConfig.vectorSrc} typeColor={typeImageConfig.color}/>
                            );
                        })}
                    </div>

                    <div className="flex items-start justify-center xs:justify-start gap-5 flex-wrap">
                        <Attribute label="weight" value={`${selectedPkmn?.weight ?? 'N/A'} kg`} icon='weight.svg' />
                        <Attribute label="height" value={`${selectedPkmn?.height ?? 'N/A'} m`} icon='height.svg' />
                        <Attribute label="species" value={selectedPkmn?.species ?? 'N/A'} icon='species.svg' />
                        <Attribute label="ability" value={selectedPkmn?.ability ?? 'N/A'} icon='ability.svg' />
                    </div>
                </div>
            </div>            
        ) 
    }
}

export default PokemonDetails
