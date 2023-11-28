import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Menu from './components/Layouts/Menus/Menu';
import MainLayout from './components/Layouts/MainLayouts/MainLayout';

// Page
import Home from './components/Pages/Home/Home';
import DashBoard from './components/Pages/DashBoard/DashBoard';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<DashBoard />} />
          </Routes>
        </BrowserRouter>
      </MainLayout>
    </div>
  );
}

export default App;
