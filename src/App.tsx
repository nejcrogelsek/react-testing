import "./App.css";
import AppProviders from "./providers/app-providers";
import MuiMode from "./components/mui/mui-mode";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
        <Home />
      </div>
    </AppProviders>
  );
};

export default App;
