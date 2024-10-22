import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddEmp from './AddEmp';
import ViewEmp from './ViewEmp';
import EditEmp from './EditEmp';
import { useSelector } from 'react-redux';

function App() {
  const x = useSelector(state=>state.kuchbhi);
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddEmp/>}></Route>
        <Route path='/view/:someId' element={<ViewEmp/>}></Route>
        <Route path='/edit/:someId' element={<EditEmp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
