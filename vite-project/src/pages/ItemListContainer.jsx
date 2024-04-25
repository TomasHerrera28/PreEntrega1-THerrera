import Portada from '../assets/Portada.jpg';

function ItemListContainer() {
  return (
      <div>
        <h2 className="text-2xl p-10">
         Bienvenidos a panadería Panovo!
        </h2>
        <div className='p-10'>
        <img className='w-full h-[80vh] object-cover'
        src={Portada}
        alt="Portada"
        />
        </div>
      </div>
  )
}

export default ItemListContainer