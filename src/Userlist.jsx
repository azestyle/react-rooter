import React, { useEffect, useState } from "react";
import { serveralClient } from './Service';





export function UserList(){
 const [Data, setData] = useState(null);
 useEffect(()=>{
    fetch();
   },[]);
   const fetch = async()=>{
    const respons= await serveralClient.get();
    setData(respons.data);   
    }
   console.log(Data);
    return(
        <>
        <table className="table table-dark table-striped">
        <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">age</th>
      <th scope="col">specialty</th>
    </tr>
  </thead>
  <tbody>
  {Data&&Data.map(({name,id,surname,specialty,age})=>{
            return <tr key={id}>
               <th scope="row">{id}</th>
               <td>{name}</td>
               <td>{surname}</td>
               <td>{age}</td>
               <td>{specialty}</td>
            </tr>
         })}
  </tbody>
        
        </table>
        
        </>
    )
}