import logo from "./logo.svg";
//import './App.css';
import SignIn from "./components/sign-in.js";
import SignUp from "./components/sign-up.js";
import ResponsiveAppBar from "./components/navbar";
// import Dashboard from "./components/dashboard";
// import Dash from "./components/side-nav";
import AppRoutes from "./routes/routes";
function App() {
  return (
    <div className="App">
      <AppRoutes></AppRoutes>
    </div>
  );
}

export default App;
