import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import './styles/mainStyle.css'


function App() {
  return (
    <div className="container-main-page">
        <Routes>  
         
            <Route
             path='/' 
             element = <Mainpage/> />

        </Routes>
    </div>
  );
}

export default App;
