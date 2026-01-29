// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import styles from "../css/Navbar.module.css";
// import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     // const [darkMode, setDarkMode] = useState(
//     //     localStorage.getItem("theme") !== "light"
//     // );
//     const [sticky, setSticky] = useState(false);

//     // Global Theme
//     // useEffect(() => {
//     //     document.body.className = darkMode ? "dark" : "light";
//     //     localStorage.setItem("theme", darkMode ? "dark" : "light");
//     // }, [darkMode]);

//     // Sticky Navbar
//     useEffect(() => {
//         const handleScroll = () => setSticky(window.scrollY > 50);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Disable scroll when mobile menu is open
//     useEffect(() => {
//         document.body.style.overflow = menuOpen ? "hidden" : "auto";
//         return () => (document.body.style.overflow = "auto");
//     }, [menuOpen]);

//     return (
//         <nav className={`${styles.navbar} ${sticky ? styles.sticky : ""}`}>
//             <div className={styles.logo}>LOGO</div>

//             <div className={styles.rightSection}>
//                 <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
//                     {/* Close button inside mobile menu */}
//                     <li className={styles.closeBtnWrapper}>
//                         <button
//                             className={styles.closeBtn}
//                             onClick={() => setMenuOpen(false)}
//                             aria-label="Close menu"
//                         >
//                             <FaTimes />
//                         </button>
//                     </li>

//                     <li>
//                         <NavLink to="/" end onClick={() => setMenuOpen(false)}>
//                             Home
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/service" onClick={() => setMenuOpen(false)}>
//                             Service
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/about" onClick={() => setMenuOpen(false)}>
//                             About
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
//                             Contact
//                         </NavLink>
//                     </li>
//                 </ul>

//                 {/* Theme toggle */}
//                 {/* <div
//                     className={`${styles.themeToggle} ${darkMode ? styles.rotateSun : styles.rotateMoon
//                         }`}
//                     onClick={() => setDarkMode(!darkMode)}
//                     title="Toggle theme"
//                     aria-label="Toggle theme"
//                 >
//                     {darkMode ? <FaSun /> : <FaMoon />}
//                 </div> */}

//                 {/* Hamburger */}
//                 <div
//                     className={styles.menuIcon}
//                     onClick={() => setMenuOpen(!menuOpen)}
//                     aria-label="Toggle menu"
//                 >
//                     {menuOpen ? <FaTimes /> : <FaBars />}
//                 </div>
//             </div>
//         </nav>
//     );
// }



import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [shadow, setShadow] = useState(false);

    // Add shadow on scroll
    useEffect(() => {
        const handleScroll = () => setShadow(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [menuOpen]);

    return (
        <nav className={`${styles.navbar} ${shadow ? styles.shadow : ""}`}>
            <div className={styles.logo}>LOGO</div>

            <div className={styles.rightSection}>
                <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
                    {/* Close button for mobile menu */}
                    <li className={styles.closeBtnWrapper}>
                        <button
                            className={styles.closeBtn}
                            onClick={() => setMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <FaTimes />
                        </button>
                    </li>

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

                {/* Hamburger */}
                <div
                    className={styles.menuIcon}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
}

