import Portada from '../assets/Portada.jpg';

function ItemListContainer() {
  return (
      <div>
        <h2 className="text-2xl">
         Bienvenidos a panadería Panovo!
        </h2>
        <img className='w-full h-[75vh] object-cover'
        src={Portada}
        alt="Portada"
        />
      </div>
  )
}

export default ItemListContainer