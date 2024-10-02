import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoGallery from './VideoGallery';
import Component from '../components/Scrollimage';
function Middle(props) {
    const navigate =useNavigate();
   
    function changeNavigate(){
        navigate('/')
    }
    return (
        <div className='bg-black text-white'>
            <div className='flex justify-start ml-[20px] pt-3'>

            <button className='bg-green-500 px-4 py-3 w-[90px] rounded-md' onClick={changeNavigate}>Back</button>
            </div>
           
            <VideoGallery></VideoGallery>
            <Component></Component>
           
        </div>
    );
}

export default Middle;