import { useState } from "react";
import {
    FaLightbulb,
    FaClipboardList,
    FaPencilRuler,
    FaCode,
    FaRocket
} from "react-icons/fa";
import style from "./css/Howwork.module.css";

export default function Howwork() {
    const [active, setActive] = useState(0);

    const steps = [
        {
            title: "Discovery",
            description: "Understanding goals, users, and project requirements.",
            icon: <FaLightbulb />,
            color: "#f97316"
        },
        {
            title: "Planning",
            description: "Defining scope, structure, and technical roadmap.",
            icon: <FaClipboardList />,
            color: "#22c55e"
        },
        {
            title: "Design",
            description: "Designing intuitive and user-focused interfaces.",
            icon: <FaPencilRuler />,
            color: "#8b5cf6"
        },
        {
            title: "Development",
            description: "Building fast, scalable, and responsive solutions.",
            icon: <FaCode />,
            color: "#06b6d4"
        },
        {
            title: "Launch",
            description: "Testing, refining, and deploying the final product.",
            icon: <FaRocket />,
            color: "#facc15"
        }
    ];

    return (
        <section className={style.process}>
            <h2 className={style.heading}>My Development Process</h2>
            <p className={style.subheading}>
                A structured workflow I follow to build high-quality digital products.
            </p>

            <div className={style.wrapper}>
                {/* Circular Flow */}
                <div className={style.circleContainer}>
                    <div className={style.ring} />

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${style.step} ${active === index ? style.active : ""
                                }`}
                            style={{
                                "--i": index,
                                "--color": step.color
                            }}
                        >
                            <div
                                className={style.circle}
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(0)}
                            >
                                {step.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Text Content */}
                <div className={style.content}>
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${style.textBlock} ${active === index ? style.textActive : ""
                                }`}
                        >
                            <h3 style={{ color: step.color }}>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
