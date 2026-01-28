import style from "./css/CTA.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button";

export default function CTA() {
    const navigate = useNavigate();



    return (
        <section className={style.cta}>
            <div className={style.container}>
                {/* Headline */}
                <h4 className={style.headline}>
                    Got a project in mind? Let’s make it happen!
                </h4>

                {/* Supporting Text */}
                <p className={style.text}>
                    Whether it’s a website, app, or design idea, I can help turn your vision into reality—fast and hassle-free.
                </p>

                {/* Button */}
                <Button onClick={() => navigate("/service")}>Let's Chat</Button>
            </div>
        </section>
    );
}
