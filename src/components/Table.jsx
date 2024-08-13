import React from "react";
import Country from "./Country";

const TableArea = ({ countries, handleDeleteCountry }) => {
    if (countries.length === 0) {
        return <p className="text">아직 추가된 국가가 없습니다. 메달을 추적하세요!</p>;
    } else {
        return (
            <table>
                <thead>
                    <tr>
                        <th>국가명</th>
                        <th>금메달</th>
                        <th>은메달</th>
                        <th>동메달</th>
                        <th style={{width: "10%"}}>액션</th>
                    </tr>
                </thead>
                <tbody>
                    {countries.map((country) => {
                        return <Country key={country.id} country={country} handleDeleteCountry={handleDeleteCountry} />;
                    })}
                </tbody>
            </table>
        );
    }
};

export default TableArea;
