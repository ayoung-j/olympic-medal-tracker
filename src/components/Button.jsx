import styles from "../styles/Button.module.css";

const Button = ({ children, onClick, className }) => {
    return (
        <button className={styles[className]} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
