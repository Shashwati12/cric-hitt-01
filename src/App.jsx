import {  Route ,Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Middle from './Pages/Middle'
import Registration from './Pages/Registration'
import ReForm from './Pages/ReForm'
import CreateTournamentForm from './Pages/CreateTournamentForm'
import  Signup  from './Pages/Signup'
import HallOfFame from './Pages/HallOfFame'
import { useState } from 'react'

function App() {
  
  // const [user, setUser] = useState(null);
  return (
    <>
       <Routes>
        <Route path='/' element={<Home ></Home>}></Route>
        <Route path='/middle' element={<Middle></Middle>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/REform' element={<ReForm></ReForm>}></Route>
        <Route path='/signup' element={<Signup ></Signup>}></Route> 
        <Route path='/createTournamentForm' element={<CreateTournamentForm></CreateTournamentForm>}></Route>
       
        {/* <Route path='/halloffame' element={<HallOfFame></HallOfFame>}></Route> */}
       </Routes>
    </>
  )
}

export default App
