import style from "../css/Footer.module.css";
import { Link } from "react-router-dom";
import {
    FaLinkedinIn,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={style.footerBg}>
            <div className={style.container}>
                {/* Column 1 */}
                <div className={style.col}>
                    <h2 className={style.logo}>Govon Stack</h2>
                    <p className={style.desc}>
                        Innovative IT techky focused on delivering high-quality,
                        scalable, and SEO-friendly digital products.
                    </p>

                    <div className={style.socials}>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                {/* Column 2 */}
                <div className={style.col}>
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/services">Website Development</Link></li>
                        <li><Link to="/services">Web App Development</Link></li>
                        <li><Link to="/services">Mobile App Development</Link></li>
                        <li><Link to="/services">CRM & ERP Solutions</Link></li>
                        <li><Link to="/services">E-commerce Development</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className={style.col}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className={style.col}>
                    <h3>Contact Us</h3>
                    <p>
                        <FaMapMarkerAlt />
                        Chennai
                    </p>
                    <p>
                        <FaPhoneAlt />
                        +91-123456780
                    </p>
                    <p>
                        <FaEnvelope />
                        demo@gamil.com
                    </p>
                </div>
            </div>

            {/* Bottom */}
            <div className={style.bottom}>
                <div className={style.containerBottom}>
                    <p>© {year} GovonStack | All rights reserved.</p>
                    <p>Powered By : Govon Stack</p>
                </div>
            </div>
        </footer>
    );
}
