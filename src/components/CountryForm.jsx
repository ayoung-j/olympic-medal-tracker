import styles from "../styles/CountryForm.module.css";
import { COUNTRY_FORM_LIST_INPUT } from "../constants/CountryForm";
import CountryFormItem from "./CountryFormItem";
import Button from "./Button";

const CountryForm = ({ form, onChange, onAddClick, onUpdateClick }) => {
    return (
        <form className={styles[`input-group`]}>
            {COUNTRY_FORM_LIST_INPUT.map((item) => {
                return <CountryFormItem key={item.name} item={item} value={form[item.name]} onChange={onChange} />;
            })}
            <div className={styles[`button-group`]}>
                <Button className="default-button" type="submit" onClick={onAddClick}>
                    국가 추가
                </Button>
                <Button className="default-button" type="button" onClick={onUpdateClick}>
                    업데이트
                </Button>
            </div>
        </form>
    );
};

export default CountryForm;
