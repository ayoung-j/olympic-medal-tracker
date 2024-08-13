import styles from "../styles/CountryTable.module.css";
import CountryTableItem from "./CountryTableItem";

const CountryTable = ({ countries, onDeleteClick }) => {
    const sortedCountries = countries.toSorted((a, b) => {
        return b.goldMedal - a.goldMedal;
    });

    if (sortedCountries.length === 0) {
        return (
            <div className={styles[`table-area`]}>
                <p className={styles[`text`]}>아직 추가된 국가가 없습니다. 메달을 추가하세요.</p>
            </div>
        );
    } else {
        return (
            <div className={styles[`table-area`]}>
                <table>
                    <thead>
                        <tr>
                            <th>국가명</th>
                            <th>금메달</th>
                            <th>은메달</th>
                            <th>동메달</th>
                            <th style={{ width: "10%" }}>액션</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedCountries.map((item) => {
                            return <CountryTableItem key={item.id} item={item} onDeleteClick={() => onDeleteClick(item.id)} />;
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default CountryTable;
