import React, {  useRef }  from "react";
import { useState } from "react";
import { serveralClient } from './Service';


let personal=null

export function Sign(){
const [Name, setName] = useState("");
const [Surname, setSurname] = useState("");
const [Age, setAge] = useState('');
const [Special, setSpecial] = useState("");
const check=useRef(null)
const Post=async(data)=>{
    const respons= await serveralClient.post(data);
    console.log(respons); 
}
console.log(Name,Surname,Age,Special);
const TakeInform=()=>{
    if(Name.length>3 && Surname.length>4 && Age>0 && Special.length>4){
        console.log('yeah');
        personal={
            name:Name,
            surname:Surname,
            age:Number(Age),
            specialty:Special
        };
            Post(personal);
            setName('');
            setSurname('');
            setAge('');
            setSpecial('');
            check.current.classList.remove('vicible');
            check.current.classList.add('green');
            check.current.textContent='Məlumat uğurla yükləndi';
    }else{
        check.current.classList.remove('hidden');
        check.current.classList.remove('green');
        check.current.classList.add('vicible');
        check.current.textContent='*boş xanaları doldurun!';
    }
   
}
    return(
        <>
        <div className="sign-box">
            <label htmlFor="name">ad:</label>
            <input type="text" id="name" value={Name} onChange={(e)=>{setName(e.target.value)}} />
            <label htmlFor="surname">soyad:</label>
            <input type="text" id="surname" value={Surname} onChange={(e)=>{setSurname(e.target.value)}}/>
            <label htmlFor="age">yaş:</label>
            <input type="number" id="age" value={Age} onChange={(e)=>{setAge(e.target.value)}}/>
            <label htmlFor="specialty">İxtisas:</label>
            <input type="text" id="specialty" value={Special} onChange={(e)=>{setSpecial(e.target.value)}}/>
            <p className="hidden" ref={check}></p>
            <div className="sign-btn">
            <button className="signup" onClick={TakeInform}>daxil et</button>
        </div>
        </div>
        
        </>
    )
}