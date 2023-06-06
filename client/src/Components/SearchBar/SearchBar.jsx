import { getCountryByName } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from '../SearchBar/SearchBar.module.css';

export const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
    dispatch(getCountryByName(name));
  };

  return (
    <div>
      <input
        className={styles.input}
        placeholder="Search a country..."
        type="search"
        onChange={handleChange}
        value={name}
      />
    </div>

    
  );
};