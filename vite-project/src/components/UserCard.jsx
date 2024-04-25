
function UserCard(props) {

    console.log(props)
    console.log(props.name)

  return (

         <div className="user-card flex flex-col items-center">
        
            
            <h3 className="text-xl">{props.name}</h3>
            
             


            {/* <Button>ver mas</Button> 
            </div><Link to=>ver mas</Link>*/}
        
        </div>
  )
}

export default UserCard