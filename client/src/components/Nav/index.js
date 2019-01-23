import React from "react";

function Nav() {
    return (
<div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo"><i className="material-icons"><img className="logo" alt ="logo" src="/IMAGES/logo3.png"></img></i></a>
            <ul className="right hide-on-med-and-down">
                    <li><a href="sass.html"><i className="material-icons">search</i></a></li>
                    <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
                    <li> <a className="btn-floating btn-large waves-effect waves-light red btn modal-trigger" href="#modal1"><i className="material-icons">add</i></a></li>
            </ul>
        </div>
    </nav>
</div>



    );
}

export default Nav;
