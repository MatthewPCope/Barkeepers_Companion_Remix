import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const EditCocktail = (props) => {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState({
        name:'',
        ingredients:'',
        technique:'',
        riffName:'',
        riffIngredients:'',
        riffTechnique:'',
        
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/cocktail/${id}`)
            .then((res) => {
                setCocktail(res.data)
                })
            .catch(err => console.log(err))
    }, [])

    const changeHandler = (e) => {
        setCocktail({
            ...cocktail,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/cocktail/${id}`, cocktail)
            .then((res) => {
                console.log(res.data);
                navigate(`/cocktaillist`);
            })
            .catch((err) => {
                console.log(err)
            setErrors(err.response.data.errors)
            })
            
    }
    const deleteCocktail = () => {
        axios.delete(`http://localhost:8000/api/cocktail/${id}`)
            .then((res) => {
                navigate("/cocktaillist");
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <>
        <div id="container" className=' box'>
            <form className="" onSubmit={onSubmitHandler}>
                < div className=''>
                    < div className='mt-3'>
                        
                        <h2 className=' font1 text-center  mt-1'>Edit Cocktail</h2>
                                <div className=' form-group mb-2'>
                                    <label htmlFor="name" className=' font4 form-label'>Name:</label><br/>
                                    <input className='form-control' type="text" value = {cocktail.name} id="name" name = "name" onChange = {changeHandler}/>
                                    { errors.name ? 
                                    <p>{errors.name.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor="ingredients" className=' font4 form-label'>Ingredients:</label><br/>
                                    <textarea className='form-control' type="text" id="ingredients" rows="4" cols="50" value = {cocktail.ingredients} name = "ingredients" onChange = {changeHandler}/>
                                    { errors.ingredients ? 
                                    <p>{errors.ingredients.message}</p>
                                    : null
                                    }
                                </div>
                                <div className='form-group mb-2'>
                                    <label htmlFor="technique" className='font4 form-label'>Technique:</label><br/>
                                    <textarea className='form-control' type="text" id="technique" rows="4" cols="50" value = {cocktail.technique} name = "technique" onChange = {changeHandler}/>
                                    { errors.technique ? 
                                    <p>{errors.technique.message}</p>
                                    : null
                                    }
                                </div>
                                <h2 className=' font1 text-center mb- '>Add a Riff</h2>
                            
                                <div className='form-group mb-2'>
                                    <label htmlFor="riffName" className='font4 form-label'>Name:</label><br/>
                                    <input className='form-control' type="text" value = {cocktail.riffName} id="riffName" name = "riffName" onChange = {changeHandler}/>
                                    
                                </div>
                                    <div className='form-group mb-2'>
                                        <label htmlFor="riffIngredients" className='font4 form-label'>Ingredients:</label><br/>
                                        <textarea className='form-control' type="text" id="riffIngredients" rows="4" cols="50" value = {cocktail.riffIngredients} name = "riffIngredients" onChange = {changeHandler}/>
                                        
                                    </div>
                                    <div className='form-group mb-2'>
                                        <label htmlFor="riffTechnique" className='font4 form-label'>Technique:</label><br/>
                                        <textarea className='form-control' type="text" id="riffTechnique" rows="4" cols="50" value = {cocktail.riffTechnique} name = "riffTechnique" onChange = {changeHandler}/>
                                        
                                    </div>
                                    <div className='d-flex justify-content-evenly'>
                                    <div>
                                        <button className=' font1 button'>Submit</button>
                                    </div>
                                    <div>
                                        <Link to={'/cocktaillist'}>
                                            <button className=' font1 button'>Cocktails</button>
                                        </Link>
                                    </div>
                                    <div className=' text-center'>
                                        <button className=' font1 button' onClick={deleteCocktail}>Delete</button>
                                    </div>
                                </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default EditCocktail;