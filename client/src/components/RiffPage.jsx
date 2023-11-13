import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const RiffPage = (props) => {
    
    const {id} = useParams(); 
    const [oneCocktail, setOneCocktail] = useState({});
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/cocktail/${id}`)
            .then( (res) => {
                console.log(res.data);
                setOneCocktail(res.data);
            })
            .catch( (err) => {
                console.log(err);
            });
        }, [id]);
    
    //     const deleteCocktail = () => {
    //     axios.delete(`http://localhost:8000/api/cocktail/${id}`)
    //         .then((res) => {
    //             navigate("/cocktaillist");
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }
        
    return (
        <div>
            <div id='container' className='text-center mb-3 mt-5'>
                    
                    <div >
                        <h1 className='font2 text-center '>{oneCocktail.riffName}</h1>
                        <div className='text-center '>
                            <Link to={`/cocktail/${oneCocktail._id}`}>
                            <button className='font1 button' >View Riff</button>
                            </Link>
                        </div>
                        <div id="container2">
                            <div className='box2'>
                                <h4  className=' mb-5 mt-4 font6'>Ingredients: {oneCocktail.riffIngredients}</h4>
                                <h4 className='font6 mt-5 mb-5'>Technique: {oneCocktail.riffTechnique}</h4>
                            </div>
                        </div>
                    </div>
                        
            </div>
                <div className='text-center '>
                    <Link to={'/cocktaillist'}>
                        <button className='font1 button' >Back</button>
                    </Link>
                </div>
        </div>
    
    );
};
export default RiffPage;
