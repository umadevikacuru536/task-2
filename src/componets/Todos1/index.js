import TodosList from '../Todos';
import '../Todos1/index.css'
import { useState } from 'react';

const initialUserDetailsList = [
     {
     uniqueNo: 1,
     
     name: 'Book the ticket for today evening',
 
     },
     {
     uniqueNo: 2,
    
     name: 'Rent the movie for tomorrow movie night',
   
     },
     {
     uniqueNo: 3,
    
     name: 'Confirm the slot for the yoga sesstion tomorrow morning',
    
     },
     {
     uniqueNo: 4,
    
     name: 'Drop the parcel at Bloomingdale',
    
     },
     {
        uniqueNo: 5,
       
        name: 'Order fruits on Big Baseket ',
       
        },
        {
            uniqueNo: 6,
           
            name: 'Fix the production issue',
           
            },
            {
                uniqueNo: 7,
               
                name: 'Confirm my slot for saturday night',
               
                },
                {
                    uniqueNo: 8,
                   
                    name: 'Get essentials for sunday car wash',
                   
                    }
    ]
    
const TodosList1=()=>{
    const [userEnteredText,setuserEnteredText] = useState('');
    const [userList,setuserList] = useState(initialUserDetailsList);
    const onChangeUserText=(e)=>{
        setuserEnteredText(e.target.value)
        const filteredUserList = initialUserDetailsList.filter((user)=>
        user.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setuserList(filteredUserList );
    }
    const onDeleteUser=uniqueNo=>{
        const removedItemList=userList.filter(each => each.uniqueNo !== uniqueNo)
        setuserList(removedItemList)
    }
    console.log(userEnteredText);
    console.log(userList);

    return(
        <div className="d-flex flex-column">
            <h1 style={{color:"brown",marginLeft:"500px" }}>Simple Todos </h1>
          
            <ul className='user-container'>
                {userList.map((each)=>(
            <TodosList
            eachinitialUserDetailsList={each}
            key={each.uniqueNo}
            onDelete={onDeleteUser}
            />
                ))}
                </ul>
        </div>
    )
}
export default TodosList1;