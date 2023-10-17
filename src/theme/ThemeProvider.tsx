import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, myThem, Theme, ThemeContext} from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const defaultMyTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as myThem || myThem.LIGHT

const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)
    const [myTheme, setMyTheme] = useState<myThem>(defaultMyTheme)
    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme

    }), [theme])

    const myDefaultProps = useMemo(() => ({
        myTheme: myTheme,
        setMyTheme: setMyTheme
    }), [myTheme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;