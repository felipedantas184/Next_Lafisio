import Image from 'next/image'
import Link from 'next/link'

const Perks = () => {
    return ( 
        <section className="PerksContainer">
            <div className="PerksWrapper">
                <div className="PerksCard">
                    <div className="Top">
                        <Image src="/assetSelection.svg" width={40} height={40} className="PerksIcon" />
                        <h2 className="PerksH2">Aulas Particulares</h2>
                    </div>
                    <p className="PerksP">Encontre os melhores professores para sua aula particular</p>
                </div>
                <div className="PerksCard">
                    <div className="Top">
                        <Image src="/assetSelection.svg" width={40} height={40} className="PerksIcon" />
                        <h2 className="PerksH2">Aulas Particulares</h2>
                    </div>
                    <p className="PerksP">Encontre os melhores professores para sua aula particular</p>
                </div>
                <div className="PerksCard">
                    <div className="Top">
                        <Image src="/assetSelection.svg" width={40} height={40} className="PerksIcon" />
                        <h2 className="PerksH2">Aulas Particulares</h2>
                    </div>
                    <p className="PerksP">Encontre os melhores professores para sua aula particular</p>
                </div>                
            </div>

            <div className="BtnWrap">
                <Link href="/">
                    <a className="ButtonStyle">Button Label</a>
                </Link>
                <Link href="/">
                    <a className="ButtonStyle">Button Label</a>
                </Link>
            </div>

            <style jsx>{`
            .PerksContainer {
                height: 300px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #1a1a1a;
            }
            .PerksWrapper {
                max-width: 1000px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                align-items: center;
                grid-gap: 16px;
                padding: 0 50px;
            }
            .PerksCard {
                background: #fff;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                border-radius: 10px;
                max-height: 150px;
                padding:  20px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                transition: all 0.2s ease-in-out;                
            }
            .PerksCard:hover {
                transform: scale(1.05);
                transition: all 0.5s ease-in-out;
                cursor:pointer;
            }
            .PerksIcon {
                height: 160px;
                width: 160px;
                margin-bottom: 10px;
            }
            .Top {
                display: flex;
                width: 100%;
                align-items: center;
                margin-bottom: 5px;
            }
            .PerksH2 {
                font-size: 16px;
                color: #000;
                margin-left: 8px;
            }
            .PerksP {
                font-size: 14px;
                text-align: left; 
                line-height: 18px
            }
            .BtnWrap {
                display:flex;
                justify-content: flex-start;
                flex-direction: row;
                margin-top: 40px;
            }
            .ButtonStyle {
                border-radius: 50px;
                background: linear-gradient(to right top, #5e88fc, #00b0cb);
                white-space: nowrap;
                padding: 6px 15px;
                color: #fff;
                font-size: 14px;
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
                color: #00b0cb
            }

            @media screen and (max-width: 1000px) {
                .PerksWrapper {
                    grid-template-columns: 1fr 1fr;
                }
            }
            @media screen and (max-width: 768px) {
                .PerksContainer {
                    height: 600px;
                }
                .PerksWrapper {
                    grid-template-columns: 1fr;
                    padding: 0 20px;
                    grid-gap: 32px;
                }
                .BtnWrap {
                    margin-top: 60px
                }
            }
            @media screen and (max-width: 480px) {
                .PerksContainer {
                    height: 700px;
                }
            }
            `}</style>
        </section>
     );
}
 
export default Perks;