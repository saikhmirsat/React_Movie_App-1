import React from 'react'

export const Theme = React.createContext()

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState('light')

    const themeChanger = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <Theme.Provider value={{ theme, themeChanger }}>
            {children}
        </Theme.Provider>
    )
}
