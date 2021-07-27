import Link from "next/link"
import Image from "next/image"

const Section = () => {
    return ( 
        <section className="InfoContainer">
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className="Column1">
                        <div className="TextWrapper">
                            <p className="TopLine">Nossa Missão</p>
                            <h1 className="Heading">QUEBRAR BARREIRAS</h1>
                            <p className="Subtitle">Nosso objetivo é expandir os horizontes da Fisiologia no âmbito acadêmico por meio de diversas ações dentro da Liga!</p>
                            <div className="BtnWrap">
                                <Link href="/">
                                    <a className="ButtonStyle">Instagram Lafisio</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="Column2">
                        <div className="ImgWrap">
                            <Image src="/assetSelection.svg" alt="" width={650} height={530} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .InfoContainer {
                    color: #000;
                    background: #fff;
                }
                .InfoWrapper {
                    display: grid;
                    z-index: 1;
                    height: 860px;
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
                .TextWrapper {
                    max-width: 540px;
                    padding-top: 0;
                    padding-bottom: 60px;
                }
                .TopLine {
                    color: #fc766a;
                    font-size: 16px;
                    line-height: 16px;
                    font-weight: 700;
                    letter-spacing: 1.4px;
                    text-transform: uppercase;
                    margin-bottom: 16px;
                    font-family: "Exo 2";
                }
                .Heading {
                    margin-bottom: 24px;
                    font-size: 60px;
                    line-height: 1.1;
                    font-weight: 600px;
                    color: #0e7a8b;
                    font-family: "Exo 2";
                }
                .Subtitle {
                    max-width: 440px;
                    margin-bottom: 35px;
                    font-size: 18px;
                    line-height: 24px;
                    color: #41414A
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
                        padding: 100px 0;
                    }
                    .InfoRow {
                        grid-template-areas: 'col1' 'col2'
                    }
                }
                @media screen and (max-width: 480px) {
                    .Heading {
                        font-size: 32px;
                    }
                }
            `}</style>
        </section>
     );
}
 
export default Section;