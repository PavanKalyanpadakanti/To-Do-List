import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return ( < >
        <
        nav > Header < /nav> <
        div className = "Header" >
        <
        Link to = "/" > Home < /Link>  <
        Link to = "/About" > About < /Link>  <
        Link to = "/Contact" > Contact < /Link>  < /
        div > <
        />
    );
};
export default Header;