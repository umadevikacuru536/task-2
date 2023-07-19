import './index.css';
const UsersDetalis=(props)=>{
    const {eachinitialUserDetailsList,onDelete} = props
    const {imageUrl,name,role,uniqueNo} = eachinitialUserDetailsList
    const onRemoveUser=()=>{
        onDelete(uniqueNo)
    }
    return(
       <li className="list-item d-flex flex-column justify-content-center  align-items-center">
           <img src={imageUrl}/>
           <h2>{name}</h2>
           <h2>{role}</h2>
           <button onClick={onRemoveUser}>
            <img src="src/componets/userDetails/single-delete-mark-icon-flat-design-vector-4305811.htm"
            className="img" />
            
           </button>
       </li>
    )
}
export default UsersDetalis;