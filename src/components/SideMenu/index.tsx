import { useState } from 'react';
import { useQuery } from "react-query";
import {
  ApiRow,
  fetchAllKantoPokemon,
} from "../../fetchers/getPokemon";
import MenuItem from './MenuItem';
import MobileMenuButton from './MobileMenuButton';


const SideMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: pokemonCollection, isLoading, error } = useQuery<ApiRow[]>({
    queryKey: ["kanto-pokemon"],
    queryFn: async () => {
      const responseCollection = await fetchAllKantoPokemon();
      return responseCollection;
    },
    onError: (error) => {
      console.error("Failed to fetch Pokemon collection:", error);
    },
    retry: false,
  });

  if(isLoading) return <div>Loading...</div>;
  if(error) return(
    <>
    <MobileMenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <div className={`z-50 fixed block top-0 left-0 h-full bg-grayCustom border-r border-black rounded-r-lg 
        md:relative w-[200px] md:w-[220px] md:flex md:min-h-[630px] overflow-y-scroll custom-scrollbar 
        transition-transform duration-300 ease-in-out md:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} `}>
        <span data-testid="side-menu-error-message" className="m-auto" >Error fetching data</span>
      </div>
    </>
  );

  return (
    <>
      <MobileMenuButton
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

        <div className={`z-50 fixed top-0 left-0 h-full bg-grayCustom border border-black rounded-[1px]
        md:relative w-[200px] md:w-[220px] md:block md:max-h-[630px] overflow-y-scroll custom-scrollbar 
        transition-transform duration-300 ease-in-out md:translate-x-0 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} `}>

          <ul className="flex flex-col p-[0.9375rem] items-start w-full h-full max-w-[220px] gap-[10px] 
          shrink-0 self-stretch bg-grayCustom">
          {pokemonCollection?.map((pokemonRow: ApiRow) => {
              return (
                <MenuItem
                  setIsMenuOpen={setIsMenuOpen}
                  key={pokemonRow.url}
                  name={pokemonRow.name}
                  url={pokemonRow.url}
                />        
              );
            })}
        </ul>
      </div>
    </>
  )
}

export default SideMenu
