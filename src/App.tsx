import './App.scss';
import Router from './router/Router.tsx';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {cyan} from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: cyan[500],
    },
  }
});

function App() {

  return (
    <div className={'app'}>
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;
