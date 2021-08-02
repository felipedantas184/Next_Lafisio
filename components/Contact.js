import Link from "next/link"
import Image from "next/image"
import { FaFacebook , FaInstagram, FaLinkedin, FaInbox } from 'react-icons/fa'

const Contact = () => {
    return ( 
        <section className="InfoContainer">
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className="Column1">
                        <div className="TextWrapper">
                            <h1 className="Heading">Envie Sua Mensagem</h1>
                            <p className="Subtitle">Estamos presentes em várias redes sociais prontos para te conhecer e para tirar suas dúvidas! Clique e descubra!</p>
                            
                            <div className="SocialWrap">
                                <Link href='https://www.instagram.com/lafisio.ufpi/'>
                                    <a target='_blank' aria-label='Instagram' className="SocialIconLink">
                                        <FaInstagram size={24} />
                                        <p className="SocialLinkText" >Instagram LAFISIO</p>
                                    </a>
                                </Link>

                                <Link href='https://www.linkedin.com/company/lafisioufpi'>
                                    <a target='_blank' aria-label='Linkedin' className="SocialIconLink">
                                        <FaLinkedin size={24} />
                                        <p className="SocialLinkText" >Linkedin LAFISIO</p>
                                    </a>
                                </Link>

                                <Link href='https://www.facebook.com/lafisio.ufpi'>
                                    <a target='_blank' aria-label='Facebook' className="SocialIconLink">
                                        <FaFacebook size={24} />
                                        <p className="SocialLinkText" >Facebook LAFISIO</p>
                                    </a>
                                </Link>

                                <Link href='https://mail.google.com/mail/?view=cm&fs=1&to=lafisioufpi@gmail.com'>
                                    <a target='_blank' aria-label='Email' className="SocialIconLink">
                                        <FaInbox size={24} />
                                        <p className="SocialLinkText">lafisio.ufpi@gmail.com</p>
                                    </a>
                                </Link>
                            </div>
                            
                            <div className="BtnWrap">
                                <Link href='https://www.instagram.com/lafisio.ufpi/'>
                                    <a  target='_blank' aria-label='Instagram' className="ButtonStyle">
                                        <FaInstagram size={24} style={{marginRight: 10}} />
                                        Siga-nos
                                    </a>
                                </Link>
                                <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=lafisioufpi@gmail.com">
                                    <a target='_blank' aria-label='Email'  className="ButtonStyle">
                                        <FaInbox size={24} style={{marginRight: 10}} />
                                        Email
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Column2">
                        <div className="blockTitle"></div>
                        <p className="TopLine">Contato</p>
                        <div className="ImgWrap">
                            <Image src="/chat.svg" alt="Contato Lafisio" width={951} height={428} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .InfoContainer {
                    color: #fff;
                    background: rgb(2,0,36);
                    background: linear-gradient(to left top, rgba(9,90,160,1) 33%, rgba(18, 163, 186,1) 100%);
                }
                .InfoWrapper {
                    display: grid;
                    z-index: 1;
                    height: 800px;
                    width: 100% auto;
                    max-width: 1100px;
                    margin-right: auto;
                    margin-left: auto;
                    padding: 0 24px;
                    justify-content: center;
                }
                .InfoRow {
                    display: grid;
                    grid-auto-columns: minmax(auto, 1fr);
                    align-items: center;
                    grid-template-areas: 'col1 col2';
                }
                .Column1 {
                    margin-bottom: 15px;
                    padding: 0 15px;
                    grid-area: col2;
                    opacity: 1;  
                    transition: all 0.5s ease-in-out;
                }
                .Column2 {
                    margin-bottom: 15px;
                    padding: 0 15px;
                    grid-area: col1;
                    opacity: 1;  
                    transition: all 0.5s ease-in-out;
                }
                .blockTitle {
                    width: 220px;
                    height: 40px;
                    background: #0e7a8b;
                }
                .TextWrapper {
                    max-width: 540px;
                    padding-top: 0;
                }
                .TopLine {
                    color: #fff;
                    font-size: 48px;
                    max-width: 250px;
                    line-height: 1;
                    font-weight: 700;
                    letter-spacing: 1.4px;
                    text-transform: uppercase;
                    margin-top: -65px;
                    margin-bottom: 80px;
                    margin-left: 20px;
                    font-family: "Exo 2";
                }
                .Heading {
                    margin-bottom: 24px;
                    font-size: 60px;
                    line-height: 1.1;
                    font-weight: 600px;
                    color: #f6f6f6;
                    font-family: "Exo 2";
                    max-width: 350px;
                    text-transform: uppercase;
                }
                .Subtitle {
                    max-width: 440px;
                    margin-bottom: 20px;
                    font-size: 18px;
                    line-height: 24px;
                    color: #E1E2E3
                }
                .SocialWrap {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    row-gap: 15px;
                    margin-bottom: 32px
                }
                .SocialIconLink {
                    display: flex;
                    color: #E1E2E3;
                    justify-content: flex-start;
                    align-items: center;
                }
                .SocialLinkText {
                    margin-left: 8px
                }
                .BtnWrap {
                    display:flex;
                    justify-content: flex-start;
                }
                .ButtonStyle {
                    border-radius: 50px;
                    background: linear-gradient(to right top, #5e88fc, #00b0cb);
                    white-space: nowrap;
                    padding: 12px 30px;
                    color: #fff;
                    font-size: 16px;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.2s ease-in-out;                    
                }
                .ButtonStyle:hover {
                    transition: all 0.2s ease-in-out;
                    background: linear-gradient(to right top, #00b0cb, #5e88fc);
                    color: #fff;                    
                }
                .ButtonStyle + .ButtonStyle {
                    margin-left: 15px;
                    background: transparent;
                    border: 1px solid #00b0cb;
                    color: #e1e2e3
                }
                .ImgWrap {
                    max-width: 555px;
                    height: 100%;
                    margin-top: 150px;
                }
                .Img {
                    width: 90%;
                    margin: 0 0 10px 0;
                    padding-right: 0;
                }

                @media screen and  (max-width: 768px) {
                    .InfoContainer {
                        padding: 100px 0;
                    }
                    .InfoRow {
                        grid-template-areas: 'col1' 'col2';
                        margin-top: 30px;
                    }
                    .TopLine {
                        font-size: 40px;
                        max-width: 100px
                    }
                    .Heading {
                        font-size: 40px;
                    }

                }
                @media screen and (max-width: 480px) {
                    .Heading {
                        font-size: 48px;
                    }
                }
            `}</style>
        </section>
     );
}
 
export default Contact;