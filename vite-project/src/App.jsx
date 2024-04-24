import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Main from './components/Main.jsx'


function App() {

  return (

    <BrowserRouter>
      <Header/>
      <Main/>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App
