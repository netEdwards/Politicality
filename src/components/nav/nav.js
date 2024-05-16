import sy from './nav.module.css';

const Navbar = () => { 

    return(
        <div className={sy.main}>
            <h1 className={sy.title}>POLY</h1>
            <nav className={sy.nav}>
                <button className={sy.b}>Home</button>
                <button className={sy.b}>About</button>
                <button className={sy.b}>Research</button>
                <button className={sy.b}>Base</button>
            </nav>
        </div>
    )
}

export default Navbar;