import Link from "next/link"
import Image from "next/image"

const SectionTeam = () => {
    return ( 
        <section className="TeamContainer" id="home">
            <div className="TeamWrapper" >
                <h1 className="TeamH1">Diretoria</h1>
                <div className="TopCornerTwo"></div>

                <div className="ColumnCenter">
                <div className="teachersGroup">
                    <div className="teachersUnit">
                        <div className="picDiv"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Carminha.jpg" alt="Maria do Carmo Orientadora Lafisio" width={100} height={100}/>
                        </div>
                        <strong className="teachersName">Maria do Carmo</strong>
                        <p className="teachersFunction">Orientadora</p>
                    </div>

                    <div className="teachersUnit">
                    <div className="picDiv"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Luciano.jpg" alt="Luciano da Silva Suborientador Lafisio" width={100} height={100}/>
                        </div>
                        <strong className="teachersName">Luciano da Silva</strong>
                        <p className="teachersFunction">Suborientador</p>
                    </div>
                </div>

                <div className="directorsGroup">
                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Francisco.jpg" alt="Francisco Gabriel Presidente Lafisio" width={100} height={100}/>
                        </div>
                        <strong className="directorsName">Francisco Gabriel</strong>
                        <p className="directorsFunction">Presidente</p>
                    </div>

                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Alessandro.jpg" alt="Alessandro Henrique Vice-Presidente Lafisio" width={100} height={100}/>
                        </div>
                        <strong className="directorsName">Alessandro Henrique</strong>
                        <p className="directorsFunction smallFunction">Vice-Presidente</p>
                    </div>

                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/João.jpg" alt="João Gabriel Ensino Lafisio" width={100} height={100}/>
                        </div>
    
                        <strong className="directorsName">João Gabriel</strong>
                        <p className="directorsFunction">Ensino</p>
                    </div>

                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Guilherme.jpg" alt="Guilherme Lima Pesquisa Lafisio" width={100} height={100}/>
                        </div>
    
                        <strong className="directorsName">Guilherme Lima</strong>
                        <p className="directorsFunction">Pesquisa</p>
                    </div>

                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Arlys.jpg" alt="Arlys Emanuel Extensão Lafisio" width={100} height={100}/>
                        </div>
    
                        <strong className="directorsName">Arlys Emanuel</strong>
                        <p className="directorsFunction">Extensão</p>
                    </div>

                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Iury.jpg" alt="Iury Lorenzo Financeiro Lafisio" width={100} height={100}/>
                        </div>
    
                        <strong className="directorsName">Iury Lorenzo</strong>
                        <p className="directorsFunction">Financeiro</p>
                    </div>

                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/PP/Gabriel.jpg" alt="Gabriel Soares Administrativo Lafisio" width={100} height={100}/>
                        </div>
    
                        <strong className="directorsName">Gabriel Soares</strong>
                        <p className="directorsFunction">Administrativo</p>
                    </div>

                    <div className="directorsUnit">
                        <div className="picDivTwo"></div>
                        <div className="ImgWrapper">
                            <Image src="/FelipeLinkedin.jpg" alt="Felipe Dantas Marketing Lafisio" width={100} height={100}/>
                        </div>
    
                        <strong className="directorsName">Felipe Dantas</strong>
                        <p className="directorsFunction">Marketing</p>
                    </div>
                </div>
                </div>

                <div className="TeamBtnWrapper">
                    <Link href="/contato">
                        <a className="ButtonStyle">Contato</a>
                    </Link>
                </div>
            </div>

            <style jsx> {`
                .TeamContainer {
                    background: #f6f6f6;
                }
                .TeamWrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    z-index: 3;
                    height: 860px;
                    width: 100% auto;
                    max-width: 1100px;
                    margin-right: auto;
                    margin-left: auto;
                    padding: 0 24px;
                }            
                .TeamH1 {
                    color: #0e7a8b;
                    font-size: 48px;
                    text-align: center;
                    text-transform: uppercase;
                    font-family: 'Exo 2';
                    align-self: flex-start;
                    z-index: 2
                }       
                .TopCornerTwo {
                    background-color: #e2e3e5;
                    width: 220px;
                    height: 40px;
                    margin-top: -25px;
                    margin-bottom: 20px;
                    align-self: flex-start;
                    margin-left: 20px
                }   
                .ColumnCenter {
                    padding: 0 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .teachersGroup {
                    display: grid;
                    grid-template-columns: 1fr;
                    align-items: center;
                    grid-gap: 20px;
                    margin-top: 24px;
                    margin-right: 40px;
                }
                .teachersUnit {
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    transition: all .5s ease-in-out;
                    -webkit-tap-highlight-color: transparent;
                }
                .picDiv {
                    width: 100px;
                    height: 100px;
                    margin-bottom: -92px;
                    margin-right: 10px;
                    background-color: #ff5757;
                }
                .teachersName {
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 5px;
                    max-width: 85px;
                }
                .teachersFunction {
                    font-size: 12px;
                }
                .directorsGroup {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    align-items: center;
                    grid-gap: 20px;
                    margin-top: 24px;
                }             
                .directorsUnit {
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    transition: all .5s ease-in-out;    
                    -webkit-tap-highlight-color: transparent;
                }
                .directorsUnit + .directorsUnit {
                    margin-left: 20px;
                }
                .picDivTwo {
                    width: 100px;
                    height: 100px;
                    background-color: #12A3BA;
                    margin-bottom: -92px;
                    margin-right: 10px
                }
                .directorsName {
                    font-size: 15px;
                    font-weight: bold;
                    margin-top: 5px;
                    max-width: 85px;
                }
                .directorsFunction {
                    font-size: 11px;
                }
                .teachersUnit:hover,
                .directorsUnit:hover {
                    transform: scale(1.05);
                }
                .TeamBtnWrapper {
                    margin-top: 35px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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
                
                @media screen and (max-width: 768px) {
                    .TeamH1 {
                        font-size: 40px;
                    }
                    .TeamP {
                        font-size: 18px;
                    }
                    .ColumnCenter {
                        flex-direction: column;
                        align-items: center;
                    }
                    .teachersGroup {
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        grid-gap: 5px;
                        margin-right: 0px;
                        width: 80%
                    }
                    .directorsGroup {
                        grid-template-columns: 1fr 1fr 1fr 1fr;
                        grid-gap: 5px;
                        row-gap: 15px;
                        width: 80%;
                    }
                    .directorsUnit + .directorsUnit {
                        margin-left: 0px;
                    }
                    .picDiv, .picDivTwo {
                        width: 62px;
                        height: 62px;
                        margin-bottom: -57px;
                        margin-right: 10px
                    }
                    .ImgWrapper {
                        max-width: 62px;
                    }
                    .smallFunction {
                        font-size: 10px
                    }
                }
                
                @media screen and (max-width: 480px) {
                    .ColumnCenter {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    .teachersGroup {
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-gap: 5px;
                        margin-right: 0px;
                        width: 100%
                    }
                    .directorsGroup {
                        grid-template-columns: 1fr 1fr 1fr;
                        grid-gap: 5px;
                        row-gap: 15px;
                        width: 100%;
                    }
                    .picDiv, .picDivTwo {
                        width: 57px;
                        height: 57px;
                        margin-bottom: -52px;
                        margin-right: 10px
                    }
                    .ImgWrapper {
                        max-width: 57px;
                    }
                }
            `} </style>
        </section>
     );
}
 
export default SectionTeam;