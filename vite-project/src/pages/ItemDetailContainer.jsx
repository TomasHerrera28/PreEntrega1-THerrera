import UserCard from "../components/UserCard"
import Sacramento from "../assets/Sacramento.jpg"
import Muffins from "../assets/Muffins.jpg"
import Pan from "../assets/Pan.jpg"
import Sandwich from "../assets/Sandwich.jpg"

function ItemDetailContainer() {
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
        <button className="button">ver mas</button>
      </div>


      <div className="user-card flex flex-col items-center p-10">
        <img
        src={Muffins}
        />
        <UserCard
        name='Muffins'
        />
        <button className="button">ver mas</button>
      </div>

      <div className="user-card flex flex-col items-center p-10">
        <img
        src={Sandwich}
        />
        <UserCard
        name='Sándwich'
        />
        <button className="button">ver mas</button>
      </div>

      <div className="user-card flex flex-col items-center p-10">
        <img
        src={Pan}
        />
        <UserCard
        name='Pan'
        />
        <button className="button">ver mas</button>
      </div>


      </div>
  )
}

export default ItemDetailContainer