interface PokemonImageProps {
    backgroundColor: string
    vectorSrc: string
    image: string
}

const PokemonImage = ({backgroundColor, vectorSrc, image}: PokemonImageProps) => {
  return (
    <div className={`min-h-[220px] lg:min-h-[307px] flex w-full justify-center items-end`}>           
        <div
          className={`flex justify-center lg:items-center w-full h-full bg-no-repeat bg-cover bg-center background-circled`}
          style={{
            background: `linear-gradient(142deg, ${backgroundColor} 35.77%, #ffffff 100%)`,
          }}
        >
         <div className={`w-[300px] h-[220px] lg:w-[400px] lg:h-[200px] mb-4 bg-no-repeat bg-cover bg-center`} style={{
              background: `linear-gradient(142deg, #ffffff 20.57%, ${backgroundColor} 90.68%)`,
              maskImage: `url(${vectorSrc})`,
              WebkitMaskImage: `url(${vectorSrc})`,
              maskRepeat: 'no-repeat',
              maskSize: 'cover',
              WebkitMaskSize: 'cover',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
          }}/>
        </div>  

        <img src={image} className="absolute w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] top-[150px] lg:top-[180px] object-contain" /> 
    </div>
  )
}

export default PokemonImage
