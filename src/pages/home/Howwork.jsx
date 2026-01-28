import React, { useEffect, useRef } from "react";
import style from "./css/Howwork.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLightbulb, FaPenFancy, FaCode, FaRocket } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Howwork() {
    const timelineRef = useRef(null);
    const itemsRef = useRef([]);

    const steps = [
        { title: "Understand", description: "Discuss goals and requirements.", icon: <FaLightbulb /> },
        { title: "Plan & Design", description: "Create structure and visuals.", icon: <FaPenFancy /> },
        { title: "Build", description: "Develop fast, responsive layouts.", icon: <FaCode /> },
        { title: "Launch", description: "Final review and deployment.", icon: <FaRocket /> },
    ];

    useEffect(() => {
        const items = itemsRef.current;

        items.forEach((item, index) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                    },
                }
            );
        });

        // Animate timeline line for desktop
        if (window.innerWidth >= 768) {
            gsap.fromTo(
                timelineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    transformOrigin: "left center",
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                }
            );
        } else {
            gsap.fromTo(
                timelineRef.current,
                { scaleY: 0 },
                {
                    scaleY: 1,
                    transformOrigin: "top center",
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: 1,
                    },
                }
            );
        }
    }, []);

    return (
        <section className={style.container}>
            <h2 className={style.heading}>How I Work</h2>
            <div className={style.timeline} ref={timelineRef}>
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={style["timeline-item"]}
                        ref={(el) => (itemsRef.current[index] = el)}
                    >
                        <div className={style["timeline-icon"]}>{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
