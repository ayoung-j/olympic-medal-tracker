import { useState } from "react";
import { validateCountryForm } from "../utils/CountryForm";
import CountryForm from "./CountryForm";
import CountryTable from "./CountryTable";

const INITIAL_STATE = {
    id: 0,
    name: "",
    goldMedal: 0,
    silverMedal: 0,
    bronzeMedal: 0,
};

const CountrySection = () => {
    const [form, setForm] = useState(INITIAL_STATE);
    const [countries, setCountries] = useState([]);
    const find = countries.find((item) => item.name.toLowerCase() === form.name.toLowerCase());

    // 변경
    const handleFormChange = (e) => {
        const { name, value } = e.target;

        const numberFields = ["id", "goldMedal", "silverMedal", "bronzeMedal"];
        const newValue = numberFields.includes(name) ? Number(value) : value;

        setForm({ ...form, [name]: newValue });
    };

    // 추가
    const handleAddCountry = (e) => {
        e.preventDefault();

        if (!validateTest(form)) return;
        if (find) {
            return alert("이미 등록된 국가입니다.");
        }

        setCountries([...countries, { ...form, id: new Date().getTime() }]);
        initialize();
    };

    // 업데이트
    const handleUpdateCountry = (e) => {
        e.preventDefault();

        if (!validateTest(form)) return;
        if (find === null || find === undefined || find === "" || find === "undefined") {
            return alert("등록되지 않은 국가입니다.");
        }

        const updatedCountry = countries.map((item) => {
            if (item.name.toLowerCase() === form.name.toLowerCase()) {
                return form;
            }
            return item;
        });

        setCountries(updatedCountry);
        initialize();
    };

    // 삭제
    const handleDeleteCountry = (id) => {
        if (confirm("정말 삭제하시겠습니까?")) {
            const deletedCountry = countries.filter((item) => {
                return item.id !== id;
            });

            setCountries(deletedCountry);
        }
    };

    // 초기화
    const initialize = () => {
        setForm(INITIAL_STATE);
    };

    // 유효성 검사
    const validateTest = (form) => {
        const { isValid, message } = validateCountryForm(form);
        if (!isValid) {
            alert(message);
        }
        return isValid;
    };

    return (
        <>
            <CountryForm form={form} onChange={handleFormChange} onAddClick={handleAddCountry} onUpdateClick={handleUpdateCountry} />
            <CountryTable countries={countries} onDeleteClick={handleDeleteCountry} />
        </>
    );
};

export default CountrySection;
