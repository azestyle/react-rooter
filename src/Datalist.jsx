import React, { useEffect, useState } from "react";
import axios from './../../node_modules/axios/lib/axios';




export function TakeData(){
    const [Data, setData] = useState(null);
    
  useEffect(()=>{
    const fechdata=async()=>{
    try{
    const respons=await axios.get('https://678ed693a64c82aeb12183e7.mockapi.io/students');
    setData(respons.data);   
    }
    catch(error){
     console.error('data yuklenmedi',error)
    }
    }

   fechdata();
   
  },[]);
  console.log(Data);
    return(
        <>
        <table className="table">
        <thead>
    <tr>
      <th scope="col">#</th>
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