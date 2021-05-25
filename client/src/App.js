import {BrowserRouter} from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import GlobalStyle from "./app/components/styled-components/GlobalStyle";
import {Routes} from "./app/router/Routes";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <GlobalStyle/>
        <Routes/>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
