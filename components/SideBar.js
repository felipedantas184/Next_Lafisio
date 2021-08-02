import { FaTimes } from 'react-icons/fa';
import Link from "next/link"

const SideBar = (props) => {
    return ( 
        <aside
            className="sidebarContainer"
            style={
                {opacity: props.isOpened ? 1 : 0,
                top: props.isOpened ? 0 : '-100%'
                }}
        >
            <div className="icon">
                <FaTimes color="#A4A4A4" className="closeIcon" onClick={props.toggle}/>
            </div>
            <div className="sideWrapper">
                <h1 className="navLogo">Lafisio</h1>
                <ul className="sidebarMenu">
                    <li>
                        <Link href="/"><a className="sidebarLink" onClick={props.toggle}>Missão</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a className="sidebarLink" onClick={props.toggle}>Projetos</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a className="sidebarLink" onClick={props.toggle}>Diretoria</a></Link>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/lafisio.ufpi/' target='_blank' rel="noreferrer" aria-label='Instagram' className="sidebarLink" onClick={props.toggle}>Instagram</a>
                    </li>
                </ul>
                <div className="sideBtnWrap">
                    <Link href="/contato"><a className="sidebarRoute" onClick={props.toggle}>Contato</a></Link>
                </div>
            </div>

            <style jsx> {`
            .sidebarContainer {
                position: fixed;
                z-index: 999;
                width: 100%;
                height: 100%;
                background: #0d0d0d;
                display: grid;
                align-items: center;
                top: 0;
                left: 0;
                transition: 1.3s ease-in-out;
                opacity: 0
            }
            
            .closeIcon {
                color: #fff
            }
            
            .icon {
                position: absolute;
                top: 1.2rem;
                right: 1.5rem;
                background: transparent;
                font-size: 2rem;
                cursor: pointer;
                outline: none;
            }

            .navLogo {
                color: #fff;
                justify-self: center;
                text-align: center;
                margin-bottom: 80px;
                cursor: pointer;
                font-size: 3.0rem;
                font-weight: 600;
                text-decoration: none;
                text-transform: uppercase;
                -webkit-tap-highlight-color: transparent;
                font-family: "Exo 2";

                -webkit-touch-callout: none;  
                -webkit-user-select: none;    
                -khtml-user-select: none;     
                -moz-user-select: none;       
                -ms-user-select: none;        
                user-select: none;
            }
            
            .sidebarWrapper{
                color: #fff;
            }
            
            .sidebarMenu {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(6, 80px);
                text-align: center;
            }
            
            .sidebarLink {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                text-decoration: none;
                list-style: none;
                transition: 0.2 ease-in-out;
                color: #fff;
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
            }
            
            .sidebarLink:hover {
                color: #00b0cb;
                transition: 0.2s ease-in-out;
            }
            
            
            .sideBtnWrap {
                display: flex;
                justify-content: center;
            }
            
            .sidebarRoute {
                border-radius: 50px;
                background: linear-gradient(to right top, #5e88fc, #00b0cb);;
                white-space: nowrap;
                padding: 16px 64px;
                color: #fff;
                font-size: 20px;
                outline: none;
                border: none;
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                text-decoration: none;
                -webkit-tap-highlight-color: transparent;
            }
            
            .sidebarRoute:hover {
                transition: all 0.2s ease-in-out;
                background: linear-gradient(to right top, #00b0cb, #5e88fc); 
            }
            
            @media screen and (max-width: 480px) {
                .sidebarMenu {
                    grid-template-rows: repeat(6, 60px);
                } 
            }
            `} </style>
        </aside>
     );
}
 
export default SideBar;