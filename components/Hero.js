import Link from "next/link"
import Image from "next/image"

const Hero = () => {
    return ( 
        <div className="heroContainer" id="home">
            <div className="heroBg">
                <div className="imageBg">
                    <Image src="/heroBG.jpg" alt="" 
                    width={600} height={300} />
                </div>
            </div>
            <div className="heroContent" >
                <h1 className="heroH1">Aulas Particulares e Cursos</h1>
                <p className="heroP" >
                    Transforme seus sonhos em realidade estudando com os melhores!
                </p>

                <div className="ImgWrap">
                    <Image src="/simpfolioImg.jpg" alt="" 
                    width={600} height={300} />
                </div>

                <div className="heroBtnWrapper">
                    <Link href="/">
                        <a className="ButtonStyle">Button Label</a>
                    </Link>
                </div>
            </div>

            <style jsx> {`
                .heroContainer {
                    background: #0c0c0c;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 0 30px;
                    height: 800px;
                    position: relative;
                    z-index: 1;
                }
                
                .heroContainer::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.2) 0%,
                        rgba(0, 0, 0, 0.6) 100%
                        ),
                        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent
                        100%);
                    z-index: 2;
                }
                
                .heroBg {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                
                .imageBg {
                    width: 100%;
                    height: 100%;
                    -o-object-fit: cover;
                    object-fit: cover;
                    background: #232a34;
                }
                
                .heroContent {
                    z-index: 3;
                    max-width: 1200px;
                    position: absolute;
                    padding: 8px 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .heroH1 {
                    color: #fff;
                    font-size: 48px;
                    text-align: center;
                }
                
                .heroP {
                    margin-top: 24px;
                    color: #fff;
                    font-size: 24px;
                    text-align: center;
                    max-width: 600px;
                }
                .ImgWrap {;
                    height: 100%;
                }
                .Img {
                    width: 90%;
                    margin: 0 0 10px 0;
                    padding-right: 0;
                }
                .heroBtnWrapper {
                    margin-top: 32px;
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
                    .heroH1 {
                        font-size: 40px;
                    }
                
                    .heroP {
                        font-size: 18px;
                    }
                }
                
                @media screen and (max-width: 480px) {
                    .heroH1 {
                        font-size: 24px;
                    }
                
                    .heroP {
                        font-size: 18px;
                    }
                }
            `} </style>
        </div>
     );
}
 
export default Hero;