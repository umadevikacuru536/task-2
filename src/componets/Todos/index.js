import '../Todos/index.css'
const TodosList=(props)=>{
    const {eachinitialUserDetailsList,onDelete} = props
    const {imageUrl,name,role,uniqueNo} = eachinitialUserDetailsList
    const onRemoveUser=()=>{
        onDelete(uniqueNo)
    }
    return(
       <li className=" d-flex flex-column justify-content-center  align-items-center">
          
           <h2>{name} <button onClick={onRemoveUser} className="button">
           Delete
            
           </button></h2>
         
           
       </li>
    )
}
export default TodosList;