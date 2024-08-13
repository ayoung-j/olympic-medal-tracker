import styles from "./styles/App.module.css";
import ContrySection from "./components/CountrySection";

function App() {
    return (
        <div className={styles[`container`]}>
            <h1 className={styles[`title`]}>2024 파리 올림픽</h1>
            <ContrySection />
        </div>
    );
}

export default App;
