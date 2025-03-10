import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Common/Header';
import Task from './Other/Task';
import DiwaliTask from './Other/DiwaliTask';
import Home from './Components/Common/Home';
import Footer from './Components/Common/Footer';
import VerifyPage from './Other/VerifyPage';
import SuperNotes from './Other/Ui/SuperNotes';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>s
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
      }
      <Routes>
        <Route path='/' element={<Header/>}>  </Route>
        <Route path='/task' element={<Task/>}></Route>
        <Route path='/task2' element={<DiwaliTask/>}></Route>
        <Route path='/task3' element={<VerifyPage/>}></Route>
        <Route path='/task4' element={<SuperNotes/>}></Route>




      
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
