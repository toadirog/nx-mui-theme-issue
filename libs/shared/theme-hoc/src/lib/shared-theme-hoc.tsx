
import createTheme from '@mui/material/styles/createTheme';
import MUIThemeProvider from '@mui/material/styles/ThemeProvider';
import { useTheme as useMUITheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { createContext, PropsWithChildren, useContext } from 'react';


const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export const ThemeContext = createContext<any>(null);

export function useTheme() {
  const theme = useContext(ThemeContext)
  return theme
}

const ThemeProvider = ({children, theme}: PropsWithChildren<{ theme: any }>) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
