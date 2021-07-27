import Image from 'next/image'

const Services = () => {
    return ( 
        <section className="ServicesContainer">
            <h1 className="ServicesH1">Services</h1>
            <div className="ServicesWrapper">
                <div className="ServicesCard">
                    <Image src="/assetSelection.svg" width={160} height={160} className="ServicesIcon" />
                    <h2 className="ServicesH2">Aulas Particulares</h2>
                    <p className="ServicesP">Encontre os melhores professores para sua aula particular</p>
                </div>
                <div className="ServicesCard">
                    <Image src="/assetSelection.svg" width={160} height={160} className="ServicesIcon" />
                    <h2 className="ServicesH2">Aulas Particulares</h2>
                    <p className="ServicesP">Encontre os melhores professores para sua aula particular</p>
                </div>
                <div className="ServicesCard">
                    <Image src="/assetSelection.svg" width={160} height={160} className="ServicesIcon" />
                    <h2 className="ServicesH2">Aulas Particulares</h2>
                    <p className="ServicesP">Encontre os melhores professores para sua aula particular</p>
                </div>
            </div>

            <style jsx>{`
            .ServicesContainer {
                height: 800px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background: #010606;
            }
            .ServicesWrapper {
                max-width: 1000px;
                margin: 0 auto;
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                align-items: center;
                grid-gap: 16px;
                padding: 0 50px;
            }
            .ServicesCard {
                background: #fff;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                border-radius: 10px;
                max-height: 340px;
                padding:  30px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2);
                transition: all 0.2s ease-in-out;                
            }
            .ServicesCard:hover {
                transform: scale(1.05);
                transition: all 0.5s ease-in-out;
                cursor:pointer;
            }
            .ServicesIcon {
                height: 160px;
                width: 160px;
                margin-bottom: 10px;
            }
            .ServicesH1 {
                font-size: 40px;
                color: #fff;
                margin-bottom: 64px;
            }
            .ServicesH2 {
                font-size: 16px;
                margin-bottom: 10px;
                color: #000
            }
            .ServicesP {
                font-size: 16px;
                text-align: center; 
            }

            @media screen and (max-width: 1000px) {
                .ServicesWrapper {
                    grid-template-columns: 1fr 1fr;
                }
            }
            @media screen and (max-width: 768px) {
                .ServicesContainer {
                    height: 1100px;
                }
                .ServicesWrapper {
                    grid-template-columns: 1fr;
                    padding: 0 20px;
                }
            }
            @media screen and (max-width: 480px) {
                .ServicesContainer {
                    height: 1300px;
                }
                .ServicesH1 {
                    font-size: 32px;
                }
            }    

            `}</style>
        </section>
     );
}
 
export default Services;