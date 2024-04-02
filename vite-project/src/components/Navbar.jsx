import CartWidget from "./CartWidget"

function Navbar() {
  return (
        <header className="flex justify-between p-4 shadow-md bg-slate-500">
            <h1 id="titulo" className="encabezado">Panaderia Panovo</h1>
            <nav className="hidden md:flex md:gap-4">
                <a href="#">Productos</a>
                <a href="#">Novedades</a>
                <a href="#">Contacto</a>
                <img src="/menu-hamburguesa.png" alt="" />
                <CartWidget />
            </nav>
        </header>
  )
}

export default Navbar