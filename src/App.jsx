import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Table from "./components/Table";

function App() {
    const [countries, setCountries] = useState([]);
    const [name, setName] = useState("");
    const [goldMedal, setGoldMedal] = useState(0);
    const [silverMedal, setSilverMedal] = useState(0);
    const [bronzeMedal, setBronzeMedal] = useState(0);

    // input 초기화
    const resetInputs = () => {
        setName("");
        setGoldMedal(0);
        setSilverMedal(0);
        setBronzeMedal(0);
    };

    // 추가
    const handleAddCountry = (e) => {
        e.preventDefault();

        const newCountry = {
            id: new Date().getTime(),
            name: name,
            goldMedal: Number(goldMedal),
            silverMedal: Number(silverMedal),
            bronzeMedal: Number(bronzeMedal),
        };

        const targetCountry = countries.find((c) => c.name === name);

        if (name === "") {
            alert("국가명을 입력해주세요.");
        } else if (targetCountry) {
            alert("이미 등록된 국가입니다.");
        }else {
            setCountries([...countries, newCountry].sort((a, b) => b.goldMedal - a.goldMedal));

            resetInputs();
        }
    };

    // 업데이트
    const handleUpdateCountry = (e) => {
        e.preventDefault();

        const targetCountry = countries.find((c) => c.name === name);

        if (name === "") {
            alert("국가명을 입력해주세요.");
        } else if (targetCountry === undefined) {
            alert("등록되지 않은 국가입니다.");
        } else {
            setCountries(
                countries
                    .map((item) => {
                        if (item.id === targetCountry.id) {
                            return { ...item, goldMedal: Number(goldMedal), silverMedal: Number(silverMedal), bronzeMedal: Number(bronzeMedal) };
                        } else {
                            return item;
                        }
                    })
                    .sort((a, b) => b.goldMedal - a.goldMedal)
            );

            resetInputs();
        }
    };

    // 삭제
    const handleDeleteCountry = (id) => {
        const deletedCountry = countries.filter((country) => {
            return country.id !== id;
        });

        setCountries(deletedCountry);
    };

    return (
        <div className="container">
            <h1 className="title">2024 파리 올림픽</h1>
            <form className="input-group">
                <div className="input-field">
                    <label>국가명</label>
                    <input
                        type="text"
                        placeholder="국가명"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
                <div className="input-field">
                    <label>금메달</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={goldMedal}
                        onChange={(e) => {
                            setGoldMedal(e.target.value);
                        }}
                    />
                </div>
                <div className="input-field">
                    <label>은메달</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={silverMedal}
                        onChange={(e) => {
                            setSilverMedal(e.target.value);
                        }}
                    />
                </div>
                <div className="input-field">
                    <label>동메달</label>
                    <input
                        type="number"
                        placeholder="0"
                        value={bronzeMedal}
                        onChange={(e) => {
                            setBronzeMedal(e.target.value);
                        }}
                    />
                </div>
                <div className="button-group">
                    <Button className="default-button" type="submit" onClick={handleAddCountry}>
                        국가 추가
                    </Button>
                    <Button className="default-button" type="button" onClick={handleUpdateCountry}>
                        업데이트
                    </Button>
                </div>
            </form>
            <div className="table-area">
                <Table countries={countries} handleDeleteCountry={handleDeleteCountry} />
            </div>
        </div>
    );
}

export default App;
