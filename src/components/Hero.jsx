import { useNavigate } from "react-router-dom";
import styles from "../css/Hero.module.css";
import Button from "../UI/Button";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section className={styles.home}>
            <div className="container">
                <h1>Experienced Software Developer for Scalable Digital Solutions</h1>
                <p>With 2+ years of hands-on industry experience, I specialize in developing robust, maintainable, and performance-driven applications tailored to business needs.</p>
                <Button onClick={() => navigate("/service")}>Explore</Button>
            </div>
        </section>
    )
}