import { Route, Routes} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'



function App() {

  return (
    <>
     <Header/>
     <Routes>
     <Route path='/' element={<Landing/>}></Route>
     <Route path='/home' element={<Landing/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
