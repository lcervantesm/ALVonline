import React from "react";

function Nav() {
    return (
<div className="navbar-fixed">
    <nav>
        <div className="nav-wrapper">
            <a href="#!" className="brand-logo valign-wrapper left"><i className="material-icons valign-wrapper"><img className="logo" alt ="logo" src="/IMAGES/logo3.png"></img></i></a>
            <ul className="right">
                    <li><a href="sass.html"><i className="material-icons hide-on-med-and-down">search</i></a></li>
                    <li><a href="badges.html"><i className="material-icons hide-on-med-and-down">view_module</i></a></li>
                    <li> <a className="modal-trigger" href="#modal2"><i className="material-icons">account_circle</i></a></li>
                    <li> <a className="btn-floating btn-large waves-effect waves-light red btn modal-trigger pulse" href="#modal1"><i className="material-icons">add</i></a></li>
            </ul>
            <ul className="left">
                    <li><a href="sass.html"><i className="material-icons hide-on-med-and-up">search</i></a></li>
                    <li><a href="badges.html"><i className="material-icons hide-on-med-and-up">view_module</i></a></li>
            </ul>
        </div>
    </nav>
</div>

    );
}

export default Nav;
