import React, { useRef } from "react";
import { serveralClient } from './Service';
import { useState } from "react";




export function UptadeStudent(){
const [Take, setTake] = useState('');
const [Data, setData] = useState('');
const [Personal, setPersonal] = useState({
    name:'',
    surname:'',
    age:'',
    specialty:''
});
const message=useRef(null);

    const checked=async()=>{
        message.current.textContent=''
        try{
            if (Number(Take)) {
             const quest= await serveralClient.getById(Take);
             if (quest.data) {
                const { name, surname, age, specialty } = quest.data;
                message.current.style.color='green'
                message.current.textContent='Tələbə mövcuddur!'
                setPersonal({ name, surname, age, specialty });
                setData(quest.data);
             }
             
            }else{
                message.current.style.color='red'
                message.current.textContent='Tələbə id-sini daxil edin!' 
            }
        

        }catch(error){
                message.current.style.color='red'
                message.current.textContent='Belə bir istifadəçi mövcud deyil!' 
                console.error('data alma problemi',error.response.status); 
        }
    }
    const ChangeInform=(el)=>{
        const{id,value}=el.target;
        setPersonal({...Personal,[id]:value})
    }
     
    const SendInform= async()=>{
        if (Take) {
            const sended= await serveralClient.put(Take,Personal)
        if (sended.status===200) {
              message.current.style.color='blue'
              message.current.textContent='Məlumat uğurla yeniləndi!'
              setTake("");
              setPersonal({
                name:'',
                surname:'',
                age:'',
                specialty:''
            });
        }
        }
        
        
    }


    return(
        <>
        <div className="Uptade-area">
            <h1>Tələbə məlumatlarını yenilə</h1>
            <label htmlFor="numbers">İd-ni daxil et</label>
            <div className="button-input">
            <input type="number" id="numbers" value={Take} onChange={(e)=>{setTake(Number(e.target.value))}} />
            <button onClick={checked} >YOXLA</button>
            </div>
            <p ref={message} className="special-messege"></p>

           {Data&& <div className="uptade-box">
            <label htmlFor="name">ad:</label>
            <input type="text"value={Personal.name} id="name" onChange={ChangeInform}/>
            <label htmlFor="surname">soyad:</label>
            <input type="text"value={Personal.surname} id="surname" onChange={ChangeInform}/>
            <label htmlFor="age">yas:</label>
            <input type="number" id="age" value={Personal.age} onChange={ChangeInform}/>
            <label htmlFor="specialty">ixtisas:</label>
            <input type="text" id="specialty" value={Personal.specialty} onChange={ChangeInform}/>
            <div className="uptade-btn">
                <button onClick={SendInform}>Məlumatı Yenilə</button>
            </div>
            </div>}
        </div>
        </>
    )
}