import { Routes, Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import Home from '../pages/Home'
import Contacto from '../pages/Contacto'
import Productos from '../pages/Productos'


function Main() {
  return (
    <main className="text-center p-4 text-black grow mi-main bg-[#fde68a]">

        <Routes>
            <Route path='/' element={<Home/>}/>

            <Route path='/products' element={<Productos/>}/>

            <Route path='/contact' element={<Contacto/>}/>

        </Routes>

       
    </main>
  )
}

export default Main