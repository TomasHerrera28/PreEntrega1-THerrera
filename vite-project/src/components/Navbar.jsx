import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'

function Navbar() {
  return (
        <nav className="flex items-center justify-center gap-4">

            <div className="items-center hidden md:flex md:gap-4">

                <Link to="/">Home</Link>

                <Link to="/products">Productos</Link>

                <Link to="/contact">Contacto</Link>
                
                <Menu width={20} height={20} className="md:hidden" />

            </div>
        </nav>
  )
}

export default Navbar