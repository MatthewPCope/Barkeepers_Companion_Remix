import React, { useState, useContext } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userContext } from '../context/UserContext'

const CocktailForm = (props) => {
    const navigate = useNavigate();
    const {currentUser} = useContext(userContext)
    const [errors, setErrors] = useState({})
    
    const [cocktail, setCocktail] = useState({
        name:'',
        ingredients:'',
        technique:'',
        riffName:'',
        riffIngredients:'',
        riffTechnique:'',
        userId: currentUser._id
    })
    
    const changeHandler = (e) => {
        setCocktail({
            ...cocktail,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/cocktail', cocktail)
            .then((res)=>{
                setCocktail({
                    name:'',
                    ingredients:'',
                    technique:'',
                    riffName:'',
                    riffIngredients:'',
                    riffTechnique:'',
                    userId: currentUser._id
                    })
                navigate('/cocktaillist');
            })
            .catch(err=> {
                setErrors(err.response.data.errors)
            })
    }

    return (
        <>
        <div id="container" className='mt-5 box'>
            <form className="" onSubmit={onSubmitHandler}>
                < div className=''>
                    < div className='mt-3'>
                        
                        <h2 className=' font1 text-center  mt-1'>Create a Cocktail</h2>
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
                                <h2 className=' font1 text-center mb- '>Add a Riff - <span>Optional</span></h2>
                            
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
                                </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default CocktailForm;

