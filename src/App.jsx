
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Home';
import { Services } from './Services';
import { Sign } from './Usersign';
import { UserList } from './Userlist';
import { DeleteUser } from './Delete';
import { UptadeStudent } from './Uptade';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();

function App() {
  
  return (
  <>
<QueryClientProvider client={queryClient}>
<BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/services' element={<Services/>}>
  <Route path='sign'element={<Sign/>}/>
  <Route path='list' element={<UserList/>}/>
  <Route path='delete' element={<DeleteUser/>}/>
  <Route path='uptade' element={<UptadeStudent/>}/> 
</Route>
</Routes>
</BrowserRouter>
</QueryClientProvider>
  </>
  );
}

export default App;
