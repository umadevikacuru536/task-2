import GoogleList from '../googleseach';

import { useState } from 'react';

const initialUserDetailsList = [
     {
     uniqueNo: 1,
  
     name: 'Price of Ethereum',
 
     },
     {
     uniqueNo: 2,
 
     name: 'Oculus Quest 2 specs',
 
     },
     {
     uniqueNo: 3,
   
     name: 'Tesla Share Price',
   
     },
     {
     uniqueNo: 4,
   
     name: 'Price of Ethereum today',
  
     },
     {
        uniqueNo: 4,
      
        name: 'Latest trends in al',
     
        },
        {
            uniqueNo: 4,
          
            name: 'latest trends in ML',
         
            }
    ]
    
const GoogleList1=()=>{
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
        <div className="d-flex flex-column  justify-content-center  align-items-center">

            <img src='https://cdn.telanganatoday.com/wp-content/uploads/2022/04/Google-multisearch-tool-to-help-users-search-with-photos.jpg' className='w-25'/>
            <input type='search' value={userEnteredText} onChange={onChangeUserText}/>
            <ul className='user-container'>
                {userList.map((each)=>(
            <GoogleList
            eachinitialUserDetailsList={each}
            key={each.uniqueNo}
            onDelete={onDeleteUser}
            />
                ))}
                </ul>
        </div>
    )
}
export default GoogleList1;