import Link from 'next/link'
import { FaFacebook, FaInbox,FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <footer className="FooterContainer">
            <div className="FooterWrap">
                <div className="FooterLinkContainer">
                    <div className="FooterLinkWrapper">
                        <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Página Inicial</h1>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Nossa Missão</a>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Nossos Projetos</a>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Diretoria</a>
                        </div>
                        <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Atividades</h1>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Processo Seletivo</a>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Curso de Férias</a>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Dia do Coração</a>
                        </div>
                        <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Redes Sociais</h1>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Instagram</a>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Linkedin</a>
                                <a className="FooterLink" href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram Lafisio'>Facebook</a>
                        </div>
                    </div>
                </div>
                <section className="SocialMedia">
                    <div className="SocialMediaWrap">
                        <Link href="/"><a className="SocialLogo">Lafisio</a></Link>
                        <small className="WebsiteRights">Lafisio © {new Date().getFullYear()} Todos os direitos reservados</small>
                        <div className="SocialIcons">
                            <a href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram' className="SocialIconLink">
                                <FaInstagram />
                            </a>
                            <a href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Email' className="SocialIconLink">
                                <FaInbox />
                            </a>
                            <a href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Linkedin' className="SocialIconLink">
                                <FaLinkedin />
                            </a>
                            <a href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Facebook' className="SocialIconLink">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .FooterContainer {
                    background-color: #13131A;
                  }
                  .FooterWrap {
                    padding: 48px 24px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    max-width: 1100px;
                    margin: 0 auto;
                  }
                  .FooterLinkContainer {
                    display: flex;
                    justify-content: center;
                    width: 100% 
                  }
                  .FooterLinkWrapper {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    width: 75%
                  }
                  .FooterLinkItems {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    margin: 16px;
                    text-align: left;
                    box-sizing: border-box;
                    color: #fff;
                  }
                  .FooterLink:hover {
                    color: #00b0ff;
                    transition: 0.3s ease-in-out;
                  }
                  .FooterLinkTitle {
                    font-size: 16px;
                    margin-bottom: 16px;
                  }
                  .FooterLink {
                    color: #fff;
                    text-decoration: none;
                    margin-bottom: 0.5rem;
                    font-size: 14px;
                  }
                  .SocialMedia {
                    max-width: 1000px;
                    width: 100%;
                  }
                  .SocialMediaWrap {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1100px;
                    margin: 40px auto 0 auto;
                  }
                  .SocialLogo {
                    color: #fff;
                    justify-self: start;
                    cursor: pointer;
                    text-decoration: none;
                    font-size: 1.5rem;
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                    font-weight: bold;
                    font-family: 'Exo 2';
                    text-transform: uppercase
                  }
                  .WebsiteRights {
                    color: #fff;
                    margin-bottom: 16px;
                  }
                  .SocialIcons {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 200px;
                  }
                  .SocialIconLink {
                    color: #fff;
                    font-size: 24px;
                  }
                  
                  @media screen and (max-width: 768px) {
                    .FooterLinkContainer {
                      padding-top: 32px;
                    }
                    .FooterLinkWrapper {
                      grid-template-columns: 1fr 1fr;
                    }
                    .SocialMediaWrap {
                      flex-direction: column;
                    }
                  }
                  @media screen and (max-width: 480px) {
                    .FooterLinkWrapper {
                      grid-template-columns: 1fr;
                    }
                    .FooterLinkItems {
                      align-items: center
                    }
                  }
            `}</style>
        </footer>
     );
}
 
export default Footer;