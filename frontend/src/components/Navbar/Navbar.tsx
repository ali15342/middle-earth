import './navbar.css'
import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';


function Navbar() {
  return (
    <div>
      <NavbarDesktop/>
      <NavbarMobile/>
    </div>
  )
}

export default Navbar