import styles from "./Button.module.css";

export default function Button({ children, onClick }) {
    return (
        <button className={styles.button} onClick={onClick}>
            <span>{children}</span>
            <div className={styles.top}></div>
            <div className={styles.left}></div>
            <div className={styles.bottom}></div>
            <div className={styles.right}></div>
        </button>
    );
}
