/* eslint-disable react/prop-types */
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.cityName}</span>
    </li>
  );
}

export default CountryItem;
