import React, { useRef } from "react";
import { useState,useEffect } from "react";
import { serveralClient } from "./Service";



export function DeleteUser(){
const [UserId, setUserId] = useState("");
const [Have, setHave] = useState("");
const cases=useRef(null);

const fetch = async () => {
    cases.current.textContent=''
    try{
        if(UserId>0){
            const respons = await serveralClient.getById(UserId);
            if(respons.data){
                cases.current.style.color='green'
                cases.current.textContent='Tələbə mövcuddur!'
               setHave(UserId); } 
        }else{
            cases.current.style.color='red'
            cases.current.textContent='Tələbə id-sini daxil edin!' 
        }
    }catch(error){
        cases.current.style.color='red'
        cases.current.textContent='Belə bir istifadəçi mövcud deyil!'
        console.error('problem var',error.response.status);  
    }
    
};
    
const Deleted=async()=>{
if(Have){
    const respons= await serveralClient.delete(Have);
    setUserId('');
    setHave('');
    cases.current.style.color='green'
    cases.current.textContent='Tələbə uğurla xaric edildi!'
    console.log(respons);
}
    
    
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
                <button onClick={Deleted}>Xaric Et</button>
             </div>
          
        </div>
        </>
    )
}