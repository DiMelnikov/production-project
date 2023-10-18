import {createContext} from "react";

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export enum myThem {
    LIGHT = 'light',
    MY = 'my',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}


export interface ThemeContextProps2 {
    myThem?: myThem;
    setMyThem?: (theme: myThem) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme';