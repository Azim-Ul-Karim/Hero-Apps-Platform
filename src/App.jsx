import { Outlet, useNavigation } from 'react-router'
import './App.css'
import NavBar from './Components/Header/NavBar'
import Footer from './Components/Footer/Footer'
import Loader from './Components/Loader/Loader';

function App() {

  const navigation = useNavigation();

  const isLoading = navigation.state === 'loading';

  return (
    <>
      {isLoading && <Loader></Loader>}
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App