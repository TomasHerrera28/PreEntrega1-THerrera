import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { ShoppingCart } from 'lucide-react';

function Navbar() {
  return (
        <nav className="flex items-center justify-center gap-4">

            <div className="items-center hidden md:flex md:gap-4">

                <Link to="/">Home</Link>

                <Link to="/products">Productos</Link>

                <Link to="/contact">Contacto</Link>

                <ShoppingCart />3

            </div>
        </nav>
  )
}

export default Navbar