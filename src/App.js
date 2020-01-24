import React, {useState, useEffect} from 'react'
import axios from 'axios';


 const App=() =>{
  const [resource, setData]=useState([]);
   const fetchData = async () => {
    const response= await axios.get(
      "http://dummy.restapiexample.com/api/v1/employees");
      setData(response);
      console.log(response.data); 
    };
  useEffect(() => {
     fetchData(resource);
  },[]);

  const list = ()=>resource.map((item,i) => (
              <div key={i}>
              <span>name - {item.name}</span>
              <span> address - {item.address}</span>
              <span>contact - {item.contact}</span>
              </div>
          ))

return(<div>
  {list}
  </div>
  );
}
export default App;