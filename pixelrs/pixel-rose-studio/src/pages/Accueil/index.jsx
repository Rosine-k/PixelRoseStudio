import React  from 'react';
import { Link } from "react-router-dom";
import Header from "../../layouts/Header/index";
import Footer from '../../layouts/Footer';
import Model from '../../assets/topOrange.png';
import Actrice from '../../assets/actrice.png';
import Peintre from '../../assets/peintre.png';
import Chanteuse from '../../assets/chant.png';
import Guitariste from '../../assets/guitare.png';
import Danseur from '../../assets/danse.png';
import Orange from '../../assets/orange.png';
import Services from '../../assets/services.png';
import Mouna from "../../assets/mouna.png";
import Georges from "../../assets/gx226.png";
import Cestnous from "../../assets/cestnous.png";

function Accueil() {
    return (

        <div>
            <Header />
            <main>
                <div className='home'>
                    <h1 className='home__titre'>Création de site internet <br />pour artistes</h1>
                    <div className='home__banner'>
                        <div className='home__a'><img className="home__imga" src={Model} alt="top model" /></div>
                        <div className='home__b'>
                            <img className="home__imgb" src={Actrice} alt="actrice" />
                            <img className="home__imgb" src={Peintre} alt="peintre" />
                        </div>
                        <div className='home__c'><img className="home__imgc" src={Chanteuse} alt="chanteuse" /></div>
                        <div className='home__d'>
                            <img className="home__imgd" src={Guitariste} alt="guitariste" />
                            <img className="home__imgd" src={Danseur} alt="danseur" />

                        </div>
                        <div className='home__e'><img className="home__imge" src={Orange} alt="bande dessinée" /></div>

                    </div>

                    <div className='home__services'>
                        <div className='home__services-bloc'>
                            <h2 className='home__h2'>Mes services</h2>
                            <p className='home__services-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  <br />tempor incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  <br />ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate  <br />velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non <br /> proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum  <br />dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> 
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  <br />laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit  <br />in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <br />cupidatat 
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        
                        </div>
                        <div className='home__services-img-bloc'>
                            <img className="home__services-img" src={Services} alt="services" />
                        </div>        
                    </div> 

                    <div className='home__portfolio'>
                        <div className='home__bloch3'>
                            <h3 className='home__h3'>Portfolio</h3>
                        </div>


                            <div className='home__blocsites'>
                                <div className='home__blocp'>
                                   <Link to="/"><img className='home__site1' src={Mouna} alt="Site 1"/></Link> 
                                    <Link to="/" className='home__linksite'>Comédienne</Link>
                                </div>

                                <div className='home__blocp'>
                                    <Link to="/" ><img className='home__site1' src={Georges} alt="Site 3"/></Link>
                                    <Link to="/" className='home__linksite'>Marque de mode</Link>
                                </div>


                                <div className='home__blocp'>
                                    <Link to="/" ><img className='home__site1' src={Cestnous} alt="Site 2"/></Link>
                                    <Link to="/" className='home__linksite'>Association artistique</Link>
                                </div>

                                

                                
                            
                                
                            </div>

                        

                        
                        
                        
                    </div>  

                    <div className='home__apropos'>
                        <h4 className='home__h4'>A propos</h4>
                        <p></p>

                        <p></p>

                    </div>

                    <div className='home__tarif'>
                        <h5 className='home__h5'>Tarif</h5>
                    </div> 

                    <div className='home__contact'>
                        <h6 className='home__h6'>Contact</h6>

                    </div>

                </div>

            </main>
            <Footer />
        </div>
    )
}

export default Accueil;