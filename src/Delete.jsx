import React, { useRef } from "react";
import { useState } from "react";
import { serveralClient } from "./Service";
import { useMutation, useQueryClient,useQuery } from '@tanstack/react-query';


export function DeleteUser(){
const [UserId, setUserId] = useState("");
const [Have, setHave] = useState("");
const cases=useRef(null);
const queryClient = useQueryClient();


const{data,error,refetch,isLoading}=useQuery({queryKey:['person',UserId],queryFn:()=>serveralClient.getById(UserId).then((response) => response.data), enabled: false,retry:false});
console.log(data);
if (cases.current) {
    if (isLoading) {
      cases.current.style.color = 'blue';
      cases.current.textContent = 'Zəhmət olmasa gözləyin....';
    } else if (data) {
      cases.current.style.color = 'green';
      cases.current.textContent = 'Tələbə mövcuddur!';
     
    } else if (error) {
      cases.current.style.color = 'red';
      cases.current.textContent = 'Belə bir istifadəçi mövcud deyil!';
    }
  }
const fetch=()=>{
    queryClient.removeQueries(["user", UserId]);
    refetch();
    console.log(Have);
    
}
  
const mutation=use.Mutation((id)=>serveralClient.delete(id))
const deleted=()=>{
    mutation()
}



    return(
        <>
        <div className="delete-box">
            <h1>Tələbənin qeydiyyatdan çıxarılması</h1>
            <label htmlFor="numbers">İd-ni daxil et</label>
            <div className="locale">
            <input type="number" id="numbers" value={UserId} onChange={(e)=>{setUserId(Number(e.target.value))}}/>
            <button className="check" onClick={fetch} >YOXLA</button>
            </div>
            <p ref={cases} className="special-messege"></p>
          
             <div className="delete-area">
                <button onClick={deleted}>Xaric Et</button>
             </div>
          
        </div>
        </>
    )
}