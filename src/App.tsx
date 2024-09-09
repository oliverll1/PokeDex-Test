import "./App.css";
import { Route, Routes } from "react-router-dom";

import SideMenu from "./components/SideMenu";
import PokemonDetails from "./components/PokemonDetails";

function App() {

  // When no pokemon is selected
  const EmptyPokemonDetails = (
    <div className="flex xs:px-[1.25rem] flex-col justify-center items-center flex-[1_0_0] w-auto flex-grow 
    rounded-[1px] border border-black bg-white min-h-[630px]">
      <p className="text-black text-[2rem] font-normal leading-7 font-sans capitalize">Select a Pokemon</p>
    </div>
  )

  return (
      <div className="w-full h-screen md:h-full flex bg-redCustom min-h-[730px] p-[3.5rem_0.5rem] xs:p-[3.5rem_2.5rem] md:p-[3.125rem_2.5rem] gap-[1.5625rem]">
        <SideMenu />
        <Routes>
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
          <Route path="/" element={EmptyPokemonDetails}/>
        </Routes>
      </div>
  );
}

export default App;
