import Button from "./Button";

const CountryTableItem = ({ item, onDeleteClick }) => {
    const { name, goldMedal, silverMedal, bronzeMedal } = item;

    return (
        <tr>
            <td>{name}</td>
            <td>{goldMedal}</td>
            <td>{silverMedal}</td>
            <td>{bronzeMedal}</td>
            <td>
                <Button className="delete-button" onClick={onDeleteClick}>
                    삭제
                </Button>
            </td>
        </tr>
    );
};

export default CountryTableItem;
