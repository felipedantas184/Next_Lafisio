import Image from "next/image"
import Link from 'next/link'

const Projects = () => {
    return ( 
        <section className="ProjectsContainer">
            <div className="ProjectsWrapper">
                <h1 className="ProjectsH1">Projects</h1>
                <div className="ProjectsRow">
                    <div className="ColumnOne">
                        <div className="Text-Wrapper">
                            <h1 className="ProjectsHeading">Heading</h1>
                            <p className="ProjectsSubtitle">Sed tellus dolor, volutpat nec tortor vitae, vestibulum faucibus nulla. Vestibulum ante ipsum primis in faucibus.</p>
                            <div className="BtnWrap">
                                <Link href="/">
                                    <a className="ButtonStyle">Button Label</a>
                                </Link>
                                <Link href="/">
                                    <a className="ButtonStyle">Button Label</a>
                                </Link>
                            </div> 
                        </div>
                    </div>
                    <div className="ColumnTwo">
                        <div className="ImgWrap">
                            <Image src="/simpfolioImg.jpg" alt="" 
                            width={770} height={430} />
                        </div>
                    </div>
                </div>

                <div className="ProjectsRow">
                    <div className="ColumnOne">
                        <div className="Text-Wrapper">
                            <h1 className="ProjectsHeading">Heading</h1>
                            <p className="ProjectsSubtitle">Sed tellus dolor, volutpat nec tortor vitae, vestibulum faucibus nulla. Vestibulum ante ipsum primis in faucibus.</p>
                            <div className="BtnWrap">
                                <Link href="/">
                                    <a className="ButtonStyle">Button Label</a>
                                </Link>
                                <Link href="/">
                                    <a className="ButtonStyle">Button Label</a>
                                </Link>
                            </div> 
                        </div>
                    </div>
                    <div className="ColumnTwo">
                        <div className="ImgWrap">
                            <Image src="/simpfolioImg.jpg" alt="" 
                            width={770} height={430} />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx> {`
                .ProjectsContainer {
                    color: #fff;
                    background: #a4a4a4;
                }
                .ProjectsH1 {
                    font-size: 40px;
                    color: #fff;
                    margin-bottom: 24px;
                    text-align: center;
                }
                .ProjectsWrapper {
                    display: grid;
                    z-index: 1;
                    width: 100% auto;
                    max-width: 1100px;
                    margin-right: auto;
                    margin-left: auto;
                    padding: 0 24px;
                    justify-content: center;
                }
                .ProjectsRow {
                    display: grid;
                    grid-auto-columns: 1fr 2fr;
                    align-items: center;
                    grid-template-areas: 'col2 col1';
                }
                .ProjectsRow + .ProjectsRow {
                    margin-top: 40px;
                } 
                .ColumnOne {
                    margin-bottom: 15px;
                    padding: 0 15px;
                    grid-area: col2;
                    opacity: 1;  
                    transition: all 0.5s ease-in-out;
                }
                .ColumnTwo {
                    margin-bottom: 15px;
                    padding: 0 15px;
                    grid-area: col1;
                    opacity: 1;  
                    transition: all 0.5s ease-in-out;
                }
                .Text-Wrapper {
                    max-width: 540px;
                    padding-top: 0;
                    padding-bottom: 60px;
                }
                .ProjectsHeading {
                    margin-bottom: 24px;
                    font-size: 24px;
                    line-height: 1.1;
                    font-weight: 600px;
                    color: #f1f2f3
                }
                .ProjectsSubtitle {
                    max-width: 440px;
                    margin-bottom: 35px;
                    font-size: 16px;
                    line-height: 24px;
                    color: #e2e3e5
                }
                .BtnWrap {
                    display:flex;
                    justify-content: flex-start;
                    flex-direction: row;
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
                .ImgWrap {
                    height: 100%;
                }

                @media screen and  (max-width: 768px) {
                    .ProjectsContainer {
                        padding: 100px 0;
                    }
                    .ProjectsRow {
                        grid-template-areas: 'col1' 'col2'
                    }
                    .BtnWrap {
                        justify-content: space-between;
                    }
                    .ButtonStyle + .ButtonStyle {
                        margin-left: 0;
                    }
                }
                @media screen and (max-width: 480px) {
                    .Heading {
                        font-size: 32px;
                    }
                }
            `} </style>
        </section>
     );
}
 
export default Projects;