import Link from "next/link"
import Image from "next/image"

const HeroLeft = () => {
    return ( 
        <section className="InfoContainer">
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className="Column1">
                        <div className="TextWrapper">
                            <h1 className="Heading">LAFISIO</h1>
                            <h2 className="UnderHeading">Liga Acadêmica de Fisiologia - UFPI</h2>
                            <p className="Subtitle">Uma liga acadêmica que desenvolve atividades de ensino, pesquisa e extensão aplicadas à fisiologia</p>
                            <div className="BtnWrap">
                                <Link href="/contato">
                                    <a className="ButtonStyle">Seletivo 2021</a>
                                </Link>
                                <Link href="/contato">
                                    <a className="ButtonStyle">Edital 2021</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Column2">
                        <div className="ImgWrap">
                            <Image src="/lafisioHero.svg" alt="Lafisio Hero" width={632} height={530} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .InfoContainer {
                    color: #fff;
                    background: rgb(2,0,36);
                    background: linear-gradient(to left top, rgba(9,90,160,1) 33%, rgba(18, 163, 186,1) 100%);
                    margin-top: -80px;
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
                    grid-template-areas: 'col2 col1';
                    margin-top: 80px
                }
                .Column1 {
                    margin-bottom: 15px;
                    padding: 0 15px;
                    grid-area: col2;
                    opacity: 1;  
                    transition: all 0.5s ease-in-out;
                    margin-top: -200px;
                }
                .Column2 {
                    margin-bottom: 15px;
                    padding: 0 15px;
                    grid-area: col1;
                    opacity: 1;  
                    transition: all 0.5s ease-in-out;
                }
                .TextWrapper {
                    max-width: 540px;
                    padding-top: 0;
                    padding-bottom: 60px;
                }
                .Heading {
                    font-size: 80px;
                    line-height: 1.1;
                    color: #fff;
                    text-transform: uppercase;
                    font-family: "Exo 2";
                    max-width: 300px;
                    font-weight: 600;
                }
                .UnderHeading {
                    margin-bottom: 32px;
                    font-size: 14px;
                    font-weight: 500;
                    color: #e4e4e4;
                    margin-left: 5px;
                    text-transform: uppercase
                }
                .Subtitle {
                    max-width: 440px;
                    margin-bottom: 35px;
                    font-size: 18px;
                    line-height: 24px;
                    color: #e6e6e6
                }
                .BtnWrap {
                    display:flex;
                    justify-content: flex-start;
                }
                .ButtonStyle {
                    border-radius: 50px;
                    background: linear-gradient(to right top, #5e88fc, #00b0cb);
                    white-space: nowrap;
                    padding: 9px 22.5px;
                    color: #fff;
                    font-size: 16px;
                    outline: none;
                    border: none;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 0.7s ease-in-out;                    
                }
                .ButtonStyle:hover {
                    transition: all 0.7s ease-in-out;
                    background: #000;
                    color: #fff;                    
                }
                .ButtonStyle + .ButtonStyle {
                    margin-left: 15px;
                    background: transparent;
                    border: 1px solid #00b0cb;
                    color: #e1e2e3;
                }
                .ImgWrap {
                    max-width: 555px;
                    height: 100%;
                }
                .Img {
                    width: 90%;
                    margin: 0 0 10px 0;
                    padding-right: 0;
                }

                @media screen and  (max-width: 768px) {
                    .InfoContainer {
                        padding: 80px 0 50px 0;
                    }
                    .InfoRow {
                        grid-template-areas: 'col2' 'col1';
                        margin-top: 40px;
                        height: 600px
                    }
                    .Column1 {
                        margin-top: 0px;
                        
                    }
                }
                @media screen and (max-width: 480px) {
                    .Heading {
                        font-size: 60px;
                    }
                    .InfoContainer {
                        padding: 80px 0 50px 0;
                    }
                }
            `}</style>
        </section>
     );
}
 
export default HeroLeft;