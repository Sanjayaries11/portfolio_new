import style from "./css/Whyme.module.css";

export default function Whyme() {
    return (
        <section className={style.whyme}>
            <div className="container">
                <h2 className={style.heading}>Why Work With Me?</h2>

                <div className={style.cards}>
                    <div className={style.card}>
                        <h3>Clear Communication</h3>
                        <p>You’ll always know what’s happening with your project.</p>
                    </div>

                    <div className={style.card}>
                        <h3>On-Time Delivery</h3>
                        <p>I respect deadlines and deliver as promised.</p>
                    </div>

                    <div className={style.card}>
                        <h3>Quality First</h3>
                        <p>Clean design, scalable code, and attention to detail.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
