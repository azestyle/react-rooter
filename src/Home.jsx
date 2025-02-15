 import React, { useRef, useState } from "react";
 import {  useNavigate } from 'react-router-dom';



 export function HomePage(){
    const [Login, setLogin] = useState('');
    const [Password, setPassword] = useState('');
    const navigate =useNavigate();
    const showed=useRef(null);
    const checked=()=>{
        if((Login && Login.trim()==='admin')&&(Password && Password==='admin')){
            console.log('worked');
            navigate('/services');
        }else{
            showed.current.classList.remove('hidden');
            showed.current.classList.add('vicible');
        }
        
    }

    return(
        <>
        <div className="userlogin">
         <h1>Tələbə məlumat portalı</h1>
         <h3>Müəllimlər üçün giriş</h3>
          <div className="login-box">
            <label htmlFor="login">login:</label>
           <input type="text" id="login" placeholder="Logini daxil et" onChange={(e)=>{setLogin(e.target.value)}}/>
           <label htmlFor="password" >Şifrə:</label>
           <input type="password"  id="password" placeholder="Şifrəni daxil et" onChange={(e)=>{setPassword(e.target.value)}}/>
           <p className="hidden" ref={showed}>*məlumatları yenidən yoxlayın*</p>
          </div>
          <div className="enter-btn">
            <button className="entered" onClick={checked}>DAXIL OL</button>
          </div>
        </div>
        </>
    )
 }