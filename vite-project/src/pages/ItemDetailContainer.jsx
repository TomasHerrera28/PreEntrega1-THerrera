import UserCard from "../components/UserCard"
import Sacramento from "../assets/Sacramento.jpg"
import Muffins from "../assets/Muffins.jpg"
import Pan from "../assets/Pan.jpg"
import Sandwich from "../assets/Sandwich.jpg"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function ItemDetailContainer() {

  useEffect(() => {
    const miPromesa = new Promise((res, rej) => { 
      console.log("Pidiendo...")
      setTimeout(()=>{
          res()
      },5000)
  })
  }, []);


  return (
    <div>
      <h2 className="text-2xl">Nuestros productos</h2>

      <div className="user-card flex flex-col items-center p-10 group-hover:scale-50">
        <img
        src={Sacramento}
        />
        <UserCard
        name='Sacramento'
        />
        <Link to={"/products/detail/sacramento"}>ver mas</Link>
      </div>


      <div className="user-card flex flex-col items-center p-10">
        <img
        src={Muffins}
        />
        <UserCard
        name='Muffins'
        />
        <Link to={"/products/detail/muffins"}>ver mas</Link>
      </div>

      <div className="user-card flex flex-col items-center p-10">
        <img
        src={Sandwich}
        />
        <UserCard
        name='Sándwich'
        />
        <Link to={"/products/detail/sandwich"}>ver mas</Link>
      </div>

      <div className="user-card flex flex-col items-center p-10">
        <img
        src={Pan}
        />
        <UserCard
        name='Pan'
        />
        <Link to={"/products/detail/pan"}>ver mas</Link>
      </div>


      </div>
  )
}

export default ItemDetailContainer