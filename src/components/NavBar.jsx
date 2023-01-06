import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";


export default function NavBar(){
    const setActiveClass = ({ isActive })=>( isActive ? "active" : "");
    return (
        <Navbar className="d-flex px-5 bg-dark  py-lg-0 justify-content-between">
            <Navbar.Brand >
                <div>
                    <img className="tamañoImg" src="../poke.png" alt=""/>
                </div>
            </Navbar.Brand>   
            <div className="justify-content-end">      
                <NavLink className={`me-3 ${setActiveClass }`} to ="/">
                    Home
                </NavLink>
                
                <NavLink className={setActiveClass } to ="/Pokemones" >
                    Pokémones
                </NavLink>
            </div>   
        
        </Navbar>
    )
}