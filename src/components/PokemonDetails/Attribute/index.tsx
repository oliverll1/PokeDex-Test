import SVG from 'react-inlinesvg';

interface AttributeProps {
    label: string
    value: string
    icon?: string
}

const Attribute = ({label, value, icon} : AttributeProps) => {

   const SVGIcon = icon ?
   <SVG 
    cacheRequests={true}
    src={`/src/assets/information-icons/${icon}`}
    width={16}
   // preProcessor={(code) => code.replace(/fill=".*?"/g, `fill="white"`)}
    title="attribute icon"
    /> : null

  return (
    <div data-testid={`pokemon-${label}`} className="flex flex-col justify-center items-start gap-1">
        <span className=" flex items-center  gap-[6px] text-[0.75rem] uppercase text-black/60 font-sans tracking-[0.6px]">
          {SVGIcon}
          {label}
        </span>
        <span className="flex flex-col justify-center leading-5 items-center p-2 gap-2 w-[154px] border rounded-[15px] borderCustomLight capitalize">{value}</span>
    </div>
  )
}

export default Attribute;
