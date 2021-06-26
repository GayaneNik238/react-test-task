import logo from './images/1.png';
import './App.css'

function Header() {

    return(
        <div className="logoName">
            <a href="#"><img src={logo} width="40" height="40" className="imgLogo" /></a>
            <span>sodefi</span>
        </div>
    )
}

export default Header;