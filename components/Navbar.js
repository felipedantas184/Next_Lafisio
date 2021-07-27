import { useEffect, useState } from 'react';
import Image from "next/image"
import Link from 'next/link'
import { FaBars } from 'react-icons/fa';

const Navbar = (props) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
        setScrollNav(true)
        } else {
        setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return ( 
        <nav className="nav" style={{background: scrollNav ? '#12a3ba' : 'transparent'}}>
                <div className="navbarContainer">
                    <Link href="/">
                        <a className="navLogo">LAFISIO</a>
                    </Link>
                    <div className="mobileIcon">
                        <FaBars onClick={props.toggle}/>
                    </div>
                    <ul className="navMenu">
                        <li className="navItem">
                            <Link href="/">
                                <a className="navLinks">Missão</a>
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link href="/">
                                <a className="navLinks">Projetos</a>
                            </Link>
                        </li>
                        <li className="navItem">
                            <Link href="/">
                                <a className="navLinks">Diretoria</a>
                            </Link>
                        </li>
                        <li className="navBtn">
                            <Link href="/">
                                <a className="navBtnLink">Contato</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <style jsx>{`
                    .nav {
                        background: #12a3ba;
                        height: 80px;
                        margin-top: -80px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 1rem;
                        position: sticky;
                        top: 0;
                        z-index: 10;
                        transition: all 0.3s ease-in-out;
                    }
                    
                    .navbarContainer {
                        display: flex;
                        justify-content: space-between;
                        height: 80px;
                        z-index: 1;
                        width: 100%;
                        padding: 0 24px;
                        max-width: 1100px;
                    }
                    
                    .navLogo {
                        color: #fff;
                        justify-self: flex-start;
                        cursor: pointer;
                        font-size: 2.0rem;
                        display: flex;
                        align-items: center;
                        margin-left: 24px;
                        font-weight: 600;
                        text-decoration: none;
                        -webkit-tap-highlight-color: transparent;
                        font-family: "Exo 2";
                    }
                    .mobileIcon {
                        display: none;
                        -webkit-tap-highlight-color: transparent;
                    }
                    .navMenu {
                        display: flex;
                        align-items: center;
                        list-style: none;
                        text-align: center;
                        margin-right: -22px;
                    }
                    
                    .navItem {
                        height: 80px;
                        margin-right: 16px
                    }
                    
                    .navLinks {
                        color: #FFF;
                        display: flex;
                        align-items: center;
                        text-decoration: none;
                        padding: 0 1rem;
                        height: 100%;
                        cursor: pointer
                    }
                    
                    .navLinks:active {
                        border-bottom: 3px solid #00b0cb;
                        transition: all 0.1s ease-in-out;
                    }
                    
                    .navBtn {
                        display: flex;
                        align-items: center;
                    }
                    
                    .navBtnLink {
                        border-radius: 50px;
                        background: transparent;
                        border: 1px solid #00b0cb;
                        color: #e1e2e3;
                        white-space: nowrap;
                        padding: 10px 22px;
                        color: #fff;
                        font-size: 16px;
                        outline: none;
                        cursor: pointer;
                        transition: all 1s ease-in-out;
                        text-decoration: none;
                    }
                    
                    .navBtnLink:hover {
                        transition: all 1s ease-in-out;
                        background: linear-gradient(to right top, #00b0cb, #5e88fc);
                        color: #fff;                       
                    }
                    
                    @media screen and (max-width: 960px) {
                        .nav{
                            transition: 0.8s all ease;
                        }
                    }
                    
                    @media screen and (max-width: 768px) {
                        .mobileIcon {
                            display: block;
                            position: absolute;
                            top: 0;
                            right: 0;
                            transform: translate(-100%, 60%);
                            font-size: 1.8rem;
                            cursor: pointer;
                            color: #fff;
                        }
                    
                        .navMenu {
                            display: none;
                        }
                    
                        .navBtn {
                            display: none;
                        }
                    }
                `}</style>
            </nav>
     );
}
 
export default Navbar;