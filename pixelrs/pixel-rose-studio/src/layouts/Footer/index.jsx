import React from "react";
import { Link } from "react-router-dom";
import logoFacebook from "../../assets/facebook.png";
import logoInstagram from "../../assets/instagram.png";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer__logo-container">

                <Link to="/">
                    <img className="footer__facebook" src={logoFacebook} alt="logo Facebook" />
                </Link>

                <Link to="/">
                    <img className="footer__instagram" src={logoInstagram} alt="logo Instagram" />
                </Link>

            </div>

            <div className="footer__text">
                <p>Développeuse Web indépendante, je suis là pour <br /> concrétiser vos idées à travers des sites internet sur mesure. <br />
                Je mets en œuvre mes compétences pour répondre à vos besoins dans une variété de domaines créatifs. <br /> Priorisant les projets artistiques, je reste ouverte à explorer et à collaborer sur diverses initiatives.</p>
            </div>
        
            <div className="footer__contact">
                <h3>Pixel Rose Studio</h3>
                <p>9 rue de Colonnes</p>
                <p>75002 Paris</p>
                <p>+33 06 52 56 20 23</p>
                <p>contact@pixelrosestudio.fr</p>
            </div>
        
        </footer>
      
    );
}
  
export default Footer;