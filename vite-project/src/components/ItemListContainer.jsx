

function ItemListContainer(props) {
 
    console.log(props)
    console.log(props.greeting)

    return (

    <div className="p-4 grow text-xl">
        <h2>{props.greeting}</h2>
    </div>
  )
}

export default ItemListContainer