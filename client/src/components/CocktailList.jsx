import React, {useEffect, useState, useContext} from 'react'
import {Link, Navigate, useNavigate} from 'react-router-dom';
import axios from 'axios';  
import { userContext } from "../context/UserContext";



const CocktailList = (props) => {
    
    const [cocktailList, setCocktailList] = useState([]);
    const { currentUser } = useContext(userContext);
    
    const navigate = useNavigate()
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/cocktail")
        .then((res)=>{
            console.log(res.data);
            let cocktailsSorted = res.data
            cocktailsSorted = cocktailsSorted.sort((a,b) => a.name.localeCompare(b.name))
            setCocktailList(cocktailsSorted);
    })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
            

    const deleteCocktail = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/cocktail/${idFromBelow}`)
            .then((res) => {
                const newList = cocktailList.filter((cocktail, index) => cocktail._id != idFromBelow)
                setCocktailList(newList);
                
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <>
            <h1 className='font2 text-center mb-3 mt-5'>{currentUser.firstName}'s' Cocktails</h1>
                <div className='text-center'>
                    <Link to={'/cocktailform'}>
                        <button className='font1 button3'>Create Cocktail</button>
                    </Link>
                </div>
                <div id="container2" className= ' '>
                    <div className=' d-flex justify-content-center table-scroll text-center font5'>
                    <table className="text-center">
                        
                        <tbody className=''>
                        {
                        cocktailList.map((cocktail, index)=>{
                            if(cocktail.userId == currentUser._id)
                            return(
                                
                                    <tr  key={cocktail._id}>
                                        <td>
                                            <Link to={`/cocktail/${cocktail._id}`}>
                                                <button  className="  button2">{cocktail.name} </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={`/cocktail/edit/${cocktail._id}`}>
                                                <button className=" font1 button">Edit/Add Riff</button>
                                            </Link>
                                        </td>
                                        <td>
                                        <div className=' text-center'>
                                        <button className=' font1 button' onClick={() => deleteCocktail(cocktail._id)}>Delete</button>
                                        </div>
                                        </td>
                                        
                                    </tr>
                                
                        )})}
                        </tbody>
                    </table>
                    </div>
                </div>
                <div className='d-flex justify-content-center mt-3'>
                <div className='text-center'>
                    <button className="font1 button3" onClick={logoutUser}>Logout</button>
                </div>
                    
                </div>
        </>
)}
export default CocktailList;