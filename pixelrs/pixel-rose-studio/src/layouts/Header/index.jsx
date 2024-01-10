import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoHeader from "../../assets/logo.png";

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`navigation ${isScrolled ? "sticky" : ""}`}>

      <div className="navigation">
        <div className="navigation__logo-container">

          <Link to="/">
            <img className="navigation__logo" src={logoHeader} alt="logo C'est nous" />
          </Link>
        </div>
        
        <nav className="navigation__liens">

          <Link to="/" className="navigation__accueil">  Accueil  </Link>

          <Link to="/apropos"className="navigation__apropos"> Qui sommes nous ?  </Link>

          <Link to="/ateliers"className="navigation__ateliers">  Les ateliers  </Link>

          <Link to="/partenaires"className="navigation__partenaires">Partenaires  </Link>

          <Link to="/actualites"className="navigation__agenda">  Actualités  </Link>

          <Link to="/contact"className="navigation__contact">  Contact  </Link>

        </nav>

      </div>

      
      
    </header>
  );
}

export default Header;