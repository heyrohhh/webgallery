import './header.css'
import { NavLink } from 'react-router-dom';
export default function Header() {
    return (
        <header>

            <nav>
                <div className='resName'>
                    <NavLink to="/" style={{textDecoration:"none", color:"#CC313D"}}><h1>Foody Dudy</h1></NavLink>
                    </div>

                <div className='Options'>
                    <ul>

                    <NavLink to="/home" className="nav"><li id="opt2">Home</li></NavLink> 
                        <NavLink className="nav" to="/home/menu"><li id="opt2">Menu</li></NavLink> 
                        <NavLink  className="nav"to="/home/Aboutus"><li id="opt2">About Us</li></NavLink> 
                        <NavLink  className="nav" to="/home/Contactus"><li id="opt2">Contact Us</li></NavLink> 
                    </ul>
                </div>

                <div className='order'>
                    <h2>Delivery Available!</h2>
                </div>

            </nav>
        </header>
    );
};