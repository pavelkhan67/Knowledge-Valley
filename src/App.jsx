
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <hr className='my-5 w-11/12 mx-auto border-gray-300'/>
      <Main></Main>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
