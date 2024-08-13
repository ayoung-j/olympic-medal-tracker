import React from "react";
import Button from "./Button";

const Country = ({ country, handleDeleteCountry }) => {
    const { id, name, goldMedal, silverMedal, bronzeMedal } = country;

    return (
        <tr>
            <td>{name}</td>
            <td>{goldMedal}</td>
            <td>{silverMedal}</td>
            <td>{bronzeMedal}</td>
            <td>
                <Button className="delete-button" onClick={() => handleDeleteCountry(id)}>
                    삭제
                </Button>
            </td>
        </tr>
    );
};

export default Country;
