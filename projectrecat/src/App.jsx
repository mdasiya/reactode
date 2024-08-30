import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav'; // Correct import statement
import Fotter from './Components/Fotter';
import Singup from './Components/SingUp';
import Privatecomponent from './Components/Privatecomponent';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element ={<Privatecomponent/>}>
           <Route path='/' element={<h1>prodact page</h1>} />
           <Route path='Add' element={<h1>prodact page</h1>} />
           <Route path='/Apdat' element={<h1>prodact page</h1>} />
           <Route path='/Logout' element={<h1>prodact page</h1>} />
           <Route path='/Profile' element={<h1>prodact page</h1>} />
           </Route>
          <Route path='/Signup'element={<Singup/>}></Route>
      </Routes>
      <Fotter/>
    </BrowserRouter>

  );
}

export default App;
