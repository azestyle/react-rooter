import React from "react";
import { Link, Outlet } from "react-router-dom";





export function Services(){
    return(
        <>
          <div className="admin-inform">
            <h1>Tələbələr üzrə əməliyyatlar</h1>
            <div className="admin-list">
            <Link to='sign'>QEYDİYYAT</Link>
            <Link to='list'>TƏLƏBƏ SİYAHISI</Link>
            <Link to='delete'>TƏLƏBƏNİ SİL</Link>
            <Link to='uptade'>Tələbə məlumatlarını yenilə</Link>
            </div>
          </div>
         
         
          
        <Outlet/>  
        </>
    )
}