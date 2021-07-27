import Footer from "./Footer"
import Navbar from "./Navbar";
import { useState } from 'react';
import SideBar from "./SideBar";


const Layout = ({ children }) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggle = () => {
        setIsOpened(!isOpened);
    }

    return ( 
        <div className="content">
            <Navbar 
                toggle={toggle}
            />
            { children }
            <Footer />
            
            <SideBar 
                isOpened={isOpened}
                toggle={toggle}
            />
        </div>        
     );
}
 
export default Layout;