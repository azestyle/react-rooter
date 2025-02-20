useEffect(()=>{
    fetch();
   },[]);
   const fetch = ()=>{
    const respons=  serveralClient.get();
    setData(respons.data);   
    }
   console.log(Data);


//    const fetch = async () => {
//     cases.current.textContent=''
//     try{
//         if(UserId>0){
//             const respons = await serveralClient.getById(UserId);
//             if(respons.data){
//                 cases.current.style.color='green'
//                 cases.current.textContent='Tələbə mövcuddur!'
//                setHave(UserId); } 
//         }else{
//             cases.current.style.color='red'
//             cases.current.textContent='Tələbə id-sini daxil edin!' 
//         }
//     }catch(error){
//         cases.current.style.color='red'
//         cases.current.textContent='Belə bir istifadəçi mövcud deyil!'
//         console.error('problem var',error.response.status);  
//     }
    
// };
    
// const Deleted=async()=>{
// if(Have){
//     const respons= await serveralClient.delete(Have);
//     setUserId('');
//     setHave('');
//     cases.current.style.color='green'
//     cases.current.textContent='Tələbə uğurla xaric edildi!'
//     console.log(respons);
// }
    
    
// }