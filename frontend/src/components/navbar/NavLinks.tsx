import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { authenticationApi } from "../../services/api/AuthenticationApi";

function NavLinks() {
    const navigate = useNavigate();
    const currentPage = useLocation();
    const logout = async () => {
        await authenticationApi()
            .logout()
            .then(() => {
                localStorage.removeItem("jwt");
                navigate("/");
            })
            .catch((exception) => console.log(exception));
    };
    return (
        <ul className="center">
            <li>
                <Link className="navbar-brand boldText" to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link className="navbar-brand boldText" to="/map">
                    Map
                </Link>
            </li>
            <li>
                <Link className={currentPage.pathname.includes("/about") ? "navbar-brand boldText currentPageHighlight" : "navbar-brand boldText"} to="/about/us">
                    About
                </Link>
            </li>
            {localStorage.getItem("jwt") != null ? (
                <li>
                    <Link className={currentPage.pathname.includes("/characters") ? "navbar-brand boldText currentPageHighlight" : "navbar-brand boldText"} to="/characters">
                        Characters
                    </Link>
                </li>
            ) : null}
            {localStorage.getItem("jwt") != null ? (
                <li>
                    <Link className={currentPage.pathname.includes("/profile") ? "navbar-brand boldText currentPageHighlight" : "navbar-brand boldText"} to="/profile">
                        Profile
                    </Link>
                </li>
            ) : null}
            {localStorage.getItem("jwt") != null ? (
                <li>
                    <Link className={currentPage.pathname.includes("/fraction") ? "navbar-brand boldText currentPageHighlight" : "navbar-brand boldText"} to="/fraction">
                        Fraction
                    </Link>
                </li>
            ) : null}
            {localStorage.getItem("jwt") != null ? (
                <li>
                    <Link className={currentPage.pathname.includes("/tweets") ? "navbar-brand boldText currentPageHighlight" : "navbar-brand boldText"} to="/tweets">
                        Tweets
                    </Link>
                </li>
            ) : null}
            {localStorage.getItem("jwt") != null ? (
                <li>
                    <Link
                        className="navbar-brand boldText"
                        to="/"
                        onClick={() => {
                            logout();
                        }}
                    >
                        Logout
                    </Link>
                </li>
            ) : (
                <li>
                    <Link className={currentPage.pathname.includes("/login") ? "navbar-brand boldText currentPageHighlight" : "navbar-brand boldText"} to="/login">
                        Login
                    </Link>
                </li>
            )}
        </ul>
    );
}

export default NavLinks;
