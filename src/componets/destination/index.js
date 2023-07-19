// import './index.css';
const UsersDestination=(props)=>{
    const {eachinitialUserDetailsList,onDelete} = props
    const {imageUrl,name,role,uniqueNo} = eachinitialUserDetailsList
  
    return(
       <li className=" d-flex flex-column justify-content-center  align-items-center">
           <img src={imageUrl}/>
           <h2>{name}</h2>
         
          
       </li>
    )
}
export default UsersDestination;