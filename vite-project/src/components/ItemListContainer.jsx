

function ItemListContainer(props) {
 
    console.log(props)
    console.log(props.greeting)

    return (

    <main className="p-4 grow">
        <h2>{props.greeting}</h2>
    </main>
  )
}

export default ItemListContainer