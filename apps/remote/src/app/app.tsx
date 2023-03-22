
import { Button } from '@mui/material';
import { ThemeContext, useTheme } from '@mf-react-state/shared/theme-hoc';
import { Fragment, useContext, useEffect, useState } from 'react';



export function App() {
  const theme = useContext(ThemeContext)
  const [divStyles, setDivStyles] = useState({ 
    height: '40px', 
    width: '40px', 
    backgroundColor: theme?.palette.primary.main
  })
  useEffect(() => {
    console.log(theme)
    setDivStyles(state => ({
      ...state,
      backgroundColor: theme?.palette.primary.main
    }))
  }, [theme.palette.primary.main])
  
  return (
    <Fragment>
      <Button color="primary">REMOTE</Button>
      <div style={divStyles} />
    </Fragment>
  );

}


export default App;

