import Link from "next/link"
import Image from "next/image"
import { IoIosSearch } from 'react-icons/io';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { FaChalkboardTeacher } from 'react-icons/fa';

const SectionBox = () => {
    return ( 
        <section className="InfoContainer" id="SectionBox">
            <div className="InfoWrapper">
                <div className="InfoRow">
                    <div className="Column1">
                        <div className="blockTitle"></div>
                        <h1 className="TopLine">PROJETOS</h1>
                        <div className="boxGroup">
                            <div className="boxUnit">                                
                                <div className="boxUnitTop">
                                    <FaChalkboardTeacher color="#E1E1E1" size={32} style={{marginRight: 10}} />
                                    <h2 className="boxName">Ensino</h2>
                                </div>
                                <p className="boxDescription">As reuniões de ensino abordam vários  temas da Fisiologia e buscam a participação ativa dos ligantes!</p>
                            </div>

                            <div className="boxUnit">                                
                                <div className="boxUnitTop">
                                    <IoIosSearch color="#E1E1E1" size={32} style={{marginRight: 10}} />
                                    <h2 className="boxName">Pesquisa</h2>
                                </div>
                                <p className="boxDescription"> A LAFISIO busca sempre contato com os professores a fim de desenvolver novos projetos!</p>
                            </div>

                            <div className="boxUnit">                                
                                <div className="boxUnitTop">
                                    <HiOutlineUserGroup color="#E1E1E1" size={32} style={{marginRight: 10}} />
                                    <h2 className="boxName">Extensão</h2>
                                </div>
                                <p className="boxDescription">A nossa Liga  tem por objetivo levar o conhecimento para além da Universidade!</p>
                            </div> 
                        </div>                        
                    </div>
                    <div className="Column2">
                        <div className="ImgWrap">
                            <Image src="/goals.svg" alt="Projetos Lafisio" width={951} height={428} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .InfoContainer {
                    color: #000;
                    background: rgb(2,0,36);
                    background: linear-gradient(to left top, rgba(9,90,160,1) 33%, rgba(18, 163, 186,1) 100%);
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
                .blockTitle {
                    width: 200px;
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
                    margin-top: -60px;
                    margin-bottom: 80px;
                    margin-left: 20px;
                    font-family: "Exo 2";
                }
                .Heading {
                    margin-bottom: 24px;
                    font-size: 60px;
                    line-height: 1.1;
                    font-weight: 600px;
                    color: #44444a;
                    font-family: "Exo 2";
                }
                .Subtitle {
                    max-width: 440px;
                    margin-bottom: 35px;
                    font-size: 18px;
                    line-height: 24px;
                    color: #41414A
                }

                
                .boxGroup {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;                    
                }
                
                .boxUnit {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    width: 100%;
                    margin-bottom: 15px;
                    transition: all .5s ease-in-out;
                    border-radius: 10px;
                    padding: 12px 30px;
                    background: transparent;
                    border: solid 1px #c4c4c4;

                    -webkit-touch-callout: none;  
                    -webkit-user-select: none;    
                    -khtml-user-select: none;     
                    -moz-user-select: none;       
                    -ms-user-select: none;        
                    user-select: none;
                }
                .boxUnitTop{
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    width: 100%;
                    margin-bottom: 5px
                }
                .boxUnit:hover {
                    transform: scale(1.02);
                }
                
                .boxIcon {
                    margin-right: 10px;
                    align-self: center;
                
                }
                
                .boxName {
                    color: #f6f6f6;
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 24px;
                    font-family: 'Exo 2';
                }
                
                .boxDescription {
                    color: #F2F3F5;
                    font-size: 16px;
                    margin-bottom: 5px;
                    margin-left: 42px
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
                    margin-top: 200px;
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
                        grid-template-areas: 'col2' 'col1'
                    }
                    .TopLine {
                        font-size: 40px;
                        max-width: 100px
                    }
                    .Heading {
                        font-size: 40px;
                    }
                    .boxUnit{
                        padding: 12px 20px;
                    }
                    .ImgWrap {
                        margin-top: 0
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
 
export default SectionBox;