import './App.css';
import Calculator from './components/Calculator/Calculator';
import Quickguide from './components/Quick Guide/Quickguide';
import Header from './components/Header/Header';
import { 
  Routes,
  Route
} from 'react-router-dom';
import Authors from './components/Authors/Authors';
import Technical from './components/Technical/Technical';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Calculator/>} />
        <Route path='/quick-guide' element={<Quickguide/>} />
        <Route path='/authors' element={<Authors />} />
        <Route path='technical-requirements' element={<Technical />} />
      </Routes>
    </div>
  );
}

export default App;
