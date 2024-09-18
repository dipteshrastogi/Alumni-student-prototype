import Register from './components/Register';
import './App.css'
import AuthPage from './AuthPage';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App;
