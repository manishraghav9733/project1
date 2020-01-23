import React, {useState, useEffect} from 'react'
import axios from 'axios';
 const App=() =>{
   const [list, setList]= useState([""]);
 
   useEffect(()=>{
    const fetchData=async () =>{
      const response= await axios.get(
        'https://bizeminence.com/yougee/api/test/get_data'
      ,{
        headers:{
       'Access-Control-Allow-Origin': true,
     },
   });
      setList(response.data);
      console.log(response.data);
    };
     fetchData();
   },[]); 
   return(
   <div>
     {
          list.map((item,i) => (
              <div key={i}>
              <span>name - {item.name}</span>
              <span> address - {item.address}</span>
              <span>contact - {item.contact}</span>
              </div>
          ))
      }
    </div>
);
}
export default App;
