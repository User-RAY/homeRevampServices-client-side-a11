import { useState } from "react";
import ThemeContext from "./ThemeContext";
import PropTypes from "prop-types";


const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(true);

    const toggleMode = () => setTheme(!theme);

    const themeInfo ={
        theme,
        toggleMode,
    }

    return (
        <ThemeContext.Provider value={themeInfo}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node,

}

export default ThemeProvider;