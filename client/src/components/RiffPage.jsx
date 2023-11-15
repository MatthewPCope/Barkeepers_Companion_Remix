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
                if(res.data.riffName == ""){
                    navigate(`/cocktail/edit/${res.data._id}`)
                }
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
                        
                        <h1 className='font8 text-center '>{oneCocktail.riffName}</h1>
                        <div className='text-center '>
                            <Link to={`/cocktail/${oneCocktail._id}`}>
                            <button className='font1 button' >View Original</button>
                            </Link>
                        </div>
                        <div id="container2">
                            <div className='box4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div >
                                        <p  className=' mb-5 mt-4 font11 me-4'>Ingredients: </p>
                                    </div>
                                    <div>
                                        <p className=' mb-5 mt-4 font12 ms-2'>{oneCocktail.riffIngredients}</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div>
                                        <p className=' mb-5 mt-4 font11 me-2'>Technique: </p>
                                    </div>
                                    <div>
                                        <p className=' mb-5 mt-4 font12 ms-2'>{oneCocktail.riffTechnique}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        
            </div>
                <div className='d-flex justify-content-center'>
                    <div className='text-center '>
                        <Link to={'/cocktaillist'}>
                            <button className='font1 button' >Cocktails</button>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/cocktail/edit/${oneCocktail._id}`}>
                            <button className=" font1 button">Edit/Add Riff</button>
                        </Link>
                    </div>
                </div>
        </div>
    
    );
};
export default RiffPage;

