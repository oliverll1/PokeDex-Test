interface MobileMenuButtonProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const MobileMenuButton = ({isMenuOpen, setIsMenuOpen}: MobileMenuButtonProps) => {
  return (
    <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden fixed top-2 right-1 z-50 bg-white p-[0.4rem] rounded-full border border-black"
        >
         {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
  )
}

export default MobileMenuButton