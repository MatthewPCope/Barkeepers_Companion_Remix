
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Main from './views/Main.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import CocktailList from './components/CocktailList.jsx'
import CocktailForm from './components/CocktailForm.jsx'

function App() {
    
  return (
    <>
      
        <Routes>
          <Route index element={<Main/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login  />}/>
          <Route path="/cocktaillist" element={<CocktailList/>}/>
          <Route path="/cocktailform" element={<CocktailForm/>}/>
        </Routes>
      
    </>
  )
}

export default App


