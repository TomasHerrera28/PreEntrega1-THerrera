import { Routes, Route } from 'react-router-dom'
import ItemListContainer from '../pages/ItemListContainer'
import Contacto from '../pages/Contacto'
import ItemDetailContainer from '../pages/ItemDetailContainer'


function Main() {
  return (
    <main className="text-center p-4 text-black grow mi-main bg-[#fde68a]">

          
        <Routes>
            <Route path='/' element={<ItemListContainer/>}/>

            <Route path='/products' element={<ItemDetailContainer/>}/>

            <Route path='/contact' element={<Contacto/>}/>

        </Routes>

       
    </main>
  )
}

export default Main