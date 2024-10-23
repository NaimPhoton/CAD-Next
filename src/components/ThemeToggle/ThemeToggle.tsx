import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleTheme} from "@/state/slice/themeSlice";
import {RootState} from "@/state/store";
import styles from "./ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const dispatch = useDispatch();
  const {theme} = useSelector((state: RootState) => state.theme); // Select theme from state
  const useTheme = theme === "light" ? styles.darkButton : styles.lightButton;

  return (
    <button
      style={{marginTop: "10px"}}
      className={`${styles.button} ${useTheme}`}
      onClick={() => dispatch(toggleTheme())}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggle;