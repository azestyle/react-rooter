
import { serveralClient } from './Service';
import { useQuery } from '@tanstack/react-query';




export function UserList(){

 const{data,isLoading,error}=useQuery({queryKey: ['users'],queryFn:() =>
  serveralClient.get().then((response) => response.data),})
  if (isLoading) return <div>Yüklənir...</div>;
  console.log(error);
 console.log(data);
 
 console.log(Array.isArray(data));
 
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
  {data && data.map(({name,id,surname,specialty,age})=>{
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