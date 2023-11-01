import './App.css';

import Menu from './components/Layouts/Menus/Menu';
import MainLayout from './components/Layouts/MainLayouts/MainLayout';
import Home from './components/Pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Menu />
      <MainLayout>
        <Home/>
      </MainLayout>
    </div>
  );
}

export default App;
