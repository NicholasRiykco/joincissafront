import logo from './logo.svg';
//import './App.css';
import SignIn from './components/sign-in.js';
import SignUp from './components/sign-up.js';
import ResponsiveAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar></ResponsiveAppBar>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
