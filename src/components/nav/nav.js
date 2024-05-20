import { useNavigate } from 'react-router-dom';
import sy from './nav.module.css';

const Navbar = () => { 
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    }

    return(
        <div className={sy.main}>
            <h1 className={sy.title}>POLY</h1>
            <nav className={sy.nav}>
                <button className={sy.b} onClick={() => handleClick('/')}>Home</button>
                <button className={sy.b} onClick={() => handleClick('/about')}>About</button>
                <button className={sy.b} onClick={() => handleClick('/research')}>Research</button>
                <button className={sy.b} onClick={() => handleClick('/base')}>Base</button>
            </nav>
        </div>
    )
}

export default Navbar;