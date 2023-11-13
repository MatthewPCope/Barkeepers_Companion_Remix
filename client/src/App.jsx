
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Main from './views/Main.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import CocktailList from './components/CocktailList.jsx'
import CocktailForm from './components/CocktailForm.jsx'
import CocktailPage from './components/CocktailPage.jsx'
import EditCocktail from './components/EditCocktail.jsx'
import RiffPage from './components/RiffPage.jsx'

function App() {
    
  return (
    <>
      
        <Routes>
          <Route index element={<Main/>}/> 
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login  />}/>
          <Route path="/cocktaillist" element={<CocktailList/>}/>
          <Route path="/cocktailform" element={<CocktailForm/>}/>
          <Route path="/cocktail/:id" element={<CocktailPage/>}/>
          <Route path="/riffpage/:id" element={<RiffPage/>}/>
          <Route path="/cocktail/edit/:id" element={<EditCocktail />}/>
        </Routes>
      
    </>
  )
}

export default App


