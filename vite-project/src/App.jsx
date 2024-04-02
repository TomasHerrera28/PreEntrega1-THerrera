import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './Footer.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  

  return (
    <>
      <Navbar/>
      <ItemListContainer
        greeting="Bienvenidos a Panaderia Panovo!"
      />
      <Footer/>
    </>
  )
}

export default App
