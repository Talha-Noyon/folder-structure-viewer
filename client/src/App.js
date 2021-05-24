import {BrowserRouter} from "react-router-dom";
import GlobalStyle from "./app/components/styled-components/GlobalStyle";
import {Routes} from "./app/router/Routes";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
