import { Link } from "react-router-dom";

interface MenuItemProps {
    name: string
    url: string
    setIsMenuOpen: (isMenuOpen: boolean) => void
}

const MenuItem = ({name, url, setIsMenuOpen}: MenuItemProps) => {
  const id = url.split("/").slice(-2)[0];
  
  return (
    <li 
      data-testid={`menu-item-${name}`} onClick={() => setIsMenuOpen(false)} 
      className="flex h-[30px] items-center self-stretch rounded-[4px] bg-grayCustomLight 
      hover:bg-white  hover: cursor-pointer transition-colors"> 
        <Link  to={`/pokemon/${id}`} className="w-full text-left p-[0.25rem_0.5rem] text-black font-sans text-[0.75rem] font-normal leading-6 capitalize">
          {name}
        </Link>
    </li>
  )
}

export default MenuItem
