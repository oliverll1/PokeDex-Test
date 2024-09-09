
import SVG from 'react-inlinesvg';
import { isDark } from '../../../helpers';

interface TypeChipProps {
  type: string
  vectorSrc: string
  typeColor: string
}

const TypeChip = ({type, vectorSrc, typeColor}: TypeChipProps) => {
  /**
   * Determines if the text color should be light or dark.
   * The result might not resemble every single example in the design but this is the result of the luminance formula.
   */
  const textColor = isDark(typeColor) ? 'white' : 'black';

  return (
    <div style={{backgroundColor: typeColor}} className="flex p-[0.25rem_0.875rem] justify-center items-center gap-[8px] rounded-[67px]">

         <div className="flex justify-center items-center w-[28px] h-[28px] bg-white rounded-full">
          <SVG
              src={`${vectorSrc}`}
              cacheRequests={true}
              className='absolute'
              preProcessor={(code) => code.replace(/fill=".*?"/g, `fill=${typeColor}`)}
              title="type icon"
            />
        </div>

        <span className="text-[0.875rem] font-sans font-normal leading-6 capitalize" style={{ color: textColor }}>{type}</span>
    </div>
  )
}

export default TypeChip
