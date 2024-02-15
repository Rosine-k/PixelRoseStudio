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

            <div className="footer__bloc" >
                <div className="footer__text">
                    <h3 className="footer__titre">Développeuse web indépendante</h3>
                    <p>Je suis là pour  concrétiser vos idées à travers des sites <br />internet sur mesure.
                    Je mets en œuvre mes compétences <br />pour répondre à vos besoins dans une variété de <br />domaines créatifs. Priorisant les projets artistiques, je <br /> reste  ouverte à explorer et à collaborer sur <br />diverses initiatives.</p>
                </div>
        
                 <div className="footer__contact">
                    <h3 className="footer__titre">Pixel Rose Studio</h3>
                    <p>9 rue de Colonnes <br />75002 Paris <br />+33 06 52 56 20 23 <br /> contact@pixelrosestudio.fr</p>
                </div>
           

            </div>

            
        
        </footer>
      
    );
}
  
export default Footer;