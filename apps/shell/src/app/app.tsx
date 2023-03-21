import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import createTheme from '@mui/material/styles/createTheme';
import MUIThemeProvider from '@mui/material/styles/ThemeProvider';
import { red } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});


 const Remote = React.lazy(() => import('remote/Module'));
 

export function App() {
  return (
    <MUIThemeProvider theme={theme}>
      <React.Suspense fallback={null}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/remote">Remote</Link></li>
      </ul>
      <Routes>
          <Route path="/remote" element={<Remote/>} />
      </Routes>
      </React.Suspense>
    </MUIThemeProvider>
  );
}

export default App;
