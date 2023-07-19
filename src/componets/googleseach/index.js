
const GoogleList=(props)=>{
    const {eachinitialUserDetailsList,onDelete} = props
    const {imageUrl,name,role,uniqueNo} = eachinitialUserDetailsList
    const onRemoveUser=()=>{
        onDelete(uniqueNo)
    }
    return(
       <li className=" d-flex flex-column justify-content-center  align-items-center">
         
        
           <h2>{name} <button onClick={onRemoveUser} className="">
           <i class="fa-sharp fa-solid fa-arrow-up"></i>
            
           </button></h2>
       </li>
    )
}
export default  GoogleList;