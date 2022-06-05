import {createContext,useState} from 'react'

export const ThemeContext = createContext();
export const ThemeProvider=({children})=>
{
    const [theme, settheme] = useState();
    const toogletheme=()=>
    {
        if(theme==='light')
        {
            settheme('dark');
        }
        else{
            settheme('light')
        }
    }
    
    
    return (<ThemeContext.Provider
    value={{
        theme,
        isLight:theme==='light',
        toogletheme
    }}>{children}</ThemeContext.Provider>)
}