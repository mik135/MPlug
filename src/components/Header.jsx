import "../App.css"
import { NavLink } from "react-router-dom"

function Header() {

  const activeStyles = {
    paddingBottom: "1px",
    borderBottom: "3px solid red"
  }

  return (
    <header className="md:py-5 py-3 md:px-12 px-2 font-inter header bg-transparent text-white">
        <nav className="md:flex flex gap-3 items-center">
            <img src="./assets/logo.svg" className="w-8"/>
            <h3 className="text-2xl font-extrabold">MPlug</h3>
            <ul className="hidden md:ml-auto md:flex md:gap-5">
                <NavLink to="/"
                  style={({isActive}) => isActive ? activeStyles : null}
                >Home</NavLink>
                <NavLink to="/movies"
                  style={({isActive}) => isActive ? activeStyles : null}
                >Movies</NavLink>
                <NavLink to="/series"
                  style={({isActive}) => isActive ? activeStyles : null}
                >Tv Series</NavLink>
            </ul>
            <img src="./assets/hamburger.svg" alt="menu" className="ml-auto md:hidden w-[40px] text-[#fff]"/>
        </nav>
    </header>
  )
}

export default Header