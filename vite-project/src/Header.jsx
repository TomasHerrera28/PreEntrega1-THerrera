import Navbar from './components/Navbar'

function Header() {
  return (
    <header className="flex justify-between p-4 shadow-md bg-[#fcd34d]">

        <h1 id="titulo" className="encabezado text-2xl">Panovo</h1>

        <Navbar/>
        
    </header>
  )
}

export default Header