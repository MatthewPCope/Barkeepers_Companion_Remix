import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';  
import { userContext } from "../context/UserContext";


const CocktailList = (props) => {
    
    const [cocktailList, setCocktailList] = useState([]);
    const { currentUser } = useContext(userContext);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/cocktail")
        .then((res)=>{
            console.log(res.data);
            setCocktailList(res.data);
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
    
    return (
        <>
            <h1 className='font2 text-center mb-3 mt-5'>My Cocktails</h1>
                <div className='text-center'>
                    <Link to={'/cocktailform'}>
                        <button className='font1 button'>Create Cocktail</button>
                    </Link>
                </div>
                <div id="container2" className='font1'>
                    <table className=" table2 w-75 border-dark border-4 text-center table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col" colSpan="2">Actions Available</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        cocktailList.map((cocktail, index)=>{
                            if(cocktail.userId == currentUser._id)
                            return(
                                <tr key={cocktail._id}>
                                    <td>
                                        <Link to={`/cocktail/${cocktail._id}`}>
                                            <button  className=" button">{cocktail.name} </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <Link to={`/cocktail/edit/${cocktail._id}`}>
                                            <button className=" button">Edit </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button className='button' onClick={() => deleteCocktail(cocktail._id)}>Delete</button>
                                    </td>
                                </tr>
                        )})}
                        </tbody>
                    </table>
                </div>
        </>
)}
export default CocktailList;