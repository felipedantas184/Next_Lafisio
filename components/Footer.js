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
                                <Link href="/"><a className="FooterLink">Nossa Missão</a></Link>
                                <Link href="/"><a className="FooterLink">Nossos Projetos</a></Link>
                                <Link href="/"><a className="FooterLink">Diretoria</a></Link>
                        </div>
                        <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Atividades</h1>
                                <Link href="/"><a className="FooterLink">Processo Seletivo</a></Link>
                                <Link href="/"><a className="FooterLink">Curso de Férias</a></Link>
                                <Link href="/"><a className="FooterLink">Dia do Coração</a></Link>
                        </div>
                        <div className="FooterLinkItems">
                            <h1 className="FooterLinkTitle">Redes Sociais</h1>
                                <Link href="/"><a className="FooterLink">Instagram</a></Link>
                                <Link href="/"><a className="FooterLink">Linkedin</a></Link>
                                <Link href="/"><a className="FooterLink">Facebook</a></Link>
                        </div>
                    </div>
                </div>
                <section className="SocialMedia">
                    <div className="SocialMediaWrap">
                        <Link href="/"><a className="SocialLogo">Lafisio</a></Link>
                        <small className="WebsiteRights">Lafisio © {new Date().getFullYear()} Todos os direitos reservados</small>
                        <div className="SocialIcons">
                            <a href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin' className="SocialIconLink">
                                <FaInstagram />
                            </a>
                            <a href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin' className="SocialIconLink">
                                <FaInbox />
                            </a>
                            <a href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin' className="SocialIconLink">
                                <FaLinkedin />
                            </a>
                            <a href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin' className="SocialIconLink">
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
                    color: #01bf71;
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