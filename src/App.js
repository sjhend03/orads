import './App.css';
import Calculator from './components/Calculator/Calculator';
import Quickguide from './components/Quick Guide/Quickguide';
import Header from './components/Header/Header';
import { 
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import Authors from './components/Authors/Authors';
import Technical from './components/Technical/Technical';

function App() {

  const navigate = useNavigate()

  const questions = [
    {
        title: 'Question 1', 
        description: 'Test', 
        callback: (e) => {
          if (e.target.value === 'true') {
            navigate('orads1')
          }
        }, 
        type: 'boolean', 
        style: {
  
        }, 
        options: [
            {description: '', value: ''}
        ]
    },
    {
      title: 'Question 1', 
      description: 'Test', 
      callback: () => {
  
      }, 
      type: 'dropdown', 
      style: {
  
      }, 
      options: [
          {description: 'test', value: 'test'}
      ]
  },
  ]

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Calculator questions={questions} />} />
        <Route path='/quick-guide' element={<Quickguide/>} />
        <Route path='/authors' element={<Authors />} />
        <Route path='technical-requirements' element={<Technical />} />
      </Routes>
    </div>
  );
}

export default App;
