import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
import {Link} from 'react-router-dom';

const CocktailPage = (props) => {
    
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
                        <h1 className='font2 text-center '>{oneCocktail.name}</h1>
                        <div className='text-center '>
                            <Link to={`/riffpage/${oneCocktail._id}`}>
                            <button className='font1 button3' >View Riff</button>
                            </Link>
                        </div>
                        <div id="container2">
                            <div className='box4'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div >
                                            <p  className=' mb-5 mt-4 font me-4'>Ingredients: </p>
                                        </div>
                                        <div>
                                            <p className=' mb-5 mt-4 font10 ms-2'>{oneCocktail.ingredients}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>
                                            <p className=' mb-5 mt-4 font me-2'>Technique: </p>
                                        </div>
                                        <div>
                                            <p className=' mb-5 mt-4 font10 ms-2'>{oneCocktail.technique}</p>
                                        </div>
                                    </div>
                                        
                            </div>
                        </div>
                    </div>
                        
            </div>
            <div className='d-flex justify-content-center'>
                <div className='text-center '>
                    <Link to={'/cocktaillist'}>
                        <button className='font1 button3' >Cocktails</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/cocktail/edit/${oneCocktail._id}`}>
                        <button className=" font1 button3">Edit/Add Riff</button>
                    </Link>
                </div>
            </div>
        </div>
    
    );
};
export default CocktailPage;
