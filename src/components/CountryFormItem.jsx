import styles from "../styles/CountryFormItem.module.css";

const CountryFormItem = ({ item, value, onChange }) => {
    const { label, type, name,placeholder } = item;

    return (
        <div className={styles[`input-field`]}>
            <label>{label}</label>
            <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
        </div>
    );
};

export default CountryFormItem;
