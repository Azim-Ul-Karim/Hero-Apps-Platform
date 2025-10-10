import { Outlet } from 'react-router'
import './App.css'
import NavBar from './Components/Header/NavBar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App