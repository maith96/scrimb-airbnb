import logo from '../images/airbnb-logo.png'
import './css/Navbar.css'

function Navbar(){
    return (
        <nav>
            <img src={logo} alt='airbnb logo' className='nav-logo'/>
        </nav>
    )
}

export default Navbar