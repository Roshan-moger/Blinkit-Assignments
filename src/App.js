import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginForm from './Component/LoginForm';
import RegistrationForm from './Component/RegistrationForm';
import UploadImage from './Component/UploadImage';
import Home from './Component/Home';
import AuthModal from './Component/AuthModal';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegistrationForm />} />
          <Route path='/upload' element={<UploadImage />} />
         
        </Routes>
     
    </div>
  );
}

export default App;
