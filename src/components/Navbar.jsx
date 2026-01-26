import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") !== "light"
    );
    const [sticky, setSticky] = useState(false);

    // Global Theme
    useEffect(() => {
        document.body.className = darkMode ? "dark" : "light";
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    // Sticky Navbar
    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav className={`${styles.navbar} ${sticky ? styles.sticky : ""}`}>
                <div className={styles.logo}>LOGO</div>

                <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                    <li>
                        <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service" onClick={() => setMenuOpen(false)}>
                            Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Only Hamburger on right */}
                <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>

            {/* Floating Theme Toggle (outside navbar, fixed position) */}
            <div
                className={styles.themeToggleFloating}
                onClick={() => setDarkMode(!darkMode)}
                title="Toggle theme"
                aria-label="Toggle theme"
            >
                {darkMode ? <FaSun /> : <FaMoon />}
            </div>
        </>
    );
}
